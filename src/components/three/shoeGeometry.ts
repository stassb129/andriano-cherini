import * as THREE from "three";

/*
 * Procedural cap-toe derby. The shoe is lofted along its length:
 * s ∈ [0, 1] runs heel → toe, θ ∈ [0, π] runs around the cross-section
 * from the outer bottom edge, over the top, to the inner bottom edge.
 * Units: 1 = 10 cm. The shoe sits on y = 0 and is centred on x.
 */

export const LENGTH = 2.85;
const SOLE_T = 0.095;
const INSOLE = 0.055;
const CAVITY_EXTRA = 0.34;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const gauss = (x: number, m: number, s: number) => Math.exp(-((x - m) ** 2) / (2 * s * s));

type Pt = readonly [number, number];

function spline(points: Pt[], x: number) {
  const n = points.length;
  const first = points[0]!;
  const last = points[n - 1]!;
  if (x <= first[0]) return first[1];
  if (x >= last[0]) return last[1];
  let i = 0;
  while (x > points[i + 1]![0]) i++;
  const p0 = points[Math.max(0, i - 1)]!;
  const p1 = points[i]!;
  const p2 = points[i + 1]!;
  const p3 = points[Math.min(n - 1, i + 2)]!;
  const t = (x - p1[0]) / (p2[0] - p1[0]);
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * p1[1] +
      (-p0[1] + p2[1]) * t +
      (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
      (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)
  );
}

// ---------- Shape functions ----------

export function halfWidth(s: number) {
  // Fermo silhouette: roomy midfoot, classic rounded toe (not pointed).
  const base = 0.325 + 0.12 * gauss(s, 0.68, 0.2) + 0.025 * gauss(s, 0.88, 0.08) - 0.025 * gauss(s, 0.42, 0.09);
  let cap = 1;
  if (s < 0.12) {
    const u = (0.12 - s) / 0.12;
    cap = Math.sqrt(Math.max(0, 1 - u * u));
  } else if (s > 0.78) {
    const u = (s - 0.78) / 0.22;
    cap = Math.pow(Math.max(0, 1 - Math.pow(u, 2.2)), 0.5);
  }
  return base * cap;
}

/** Lateral drift of the centre line: toes point slightly inward, like a real right shoe. */
const centreZ = (s: number) => -0.05 * smoothstep(0.55, 1, s);

/** Heel lift and toe spring of the sole. */
export const rise = (s: number) =>
  0.14 * (1 - smoothstep(0.18, 0.62, s)) + 0.05 * Math.pow(smoothstep(0.82, 1, s), 2);

const VISIBLE_HEIGHT: Pt[] = [
  [0, 0.66],
  [0.08, 0.63],
  [0.2, 0.55],
  [0.3, 0.57],
  [0.37, 0.62],
  [0.43, 0.655],
  [0.52, 0.58],
  [0.62, 0.5],
  [0.74, 0.41],
  [0.86, 0.36],
  [0.93, 0.3],
  [0.975, 0.24],
  [1, 0.19],
];
const height = (s: number) => spline(VISIBLE_HEIGHT, s);

/** How "open" the collar is at s: 1 inside the foot opening, 0 elsewhere. */
const opening = (s: number) => smoothstep(0, 0.035, s) * (1 - smoothstep(0.36, 0.41, s));

const exponent = (s: number) => 2 / spline([[0, 3.3], [0.5, 2.8], [1, 2.2]], s);

type Frame = {
  s: number;
  x: number;
  cz: number;
  w: number;
  base: number;
  rim: number;
  top: number;
  e: number;
  theta1: number;
};

function frame(s: number): Frame {
  const w = halfWidth(s);
  const rim = height(s);
  const o = opening(s);
  const top = rim + CAVITY_EXTRA * o;
  const e = exponent(s);
  const ratio = Math.min(1, rim / top);
  const theta1 = Math.asin(Math.pow(ratio, 1 / e));
  return {
    s,
    x: (s - 0.5) * LENGTH,
    cz: centreZ(s),
    w,
    base: rise(s) + SOLE_T,
    rim,
    top,
    e,
    theta1,
  };
}

/** A point on the upper. `cavity` folds the part above the rim down into the shoe. */
function upperPoint(f: Frame, theta: number, cavity: boolean, out = new THREE.Vector3()) {
  const c = Math.cos(theta);
  const sn = Math.max(0, Math.sin(theta));
  let z = f.w * Math.sign(c) * Math.pow(Math.abs(c), f.e);
  let y = f.top * Math.pow(sn, f.e);
  if (cavity && f.top - f.rim > 1e-5) {
    const d = Math.max(0, y - f.rim);
    const k = (f.rim - INSOLE) / (f.top - f.rim);
    y = f.rim - d * k;
    z *= 1 - 0.1 * Math.min(1, d / (0.15 * (f.top - f.rim)));
  }
  return out.set(f.x, y + f.base, z + f.cz);
}

function surfaceNormal(s: number, theta: number) {
  const eps = 1e-3;
  const p = upperPoint(frame(s), theta, false);
  const ps = upperPoint(frame(Math.min(1, s + eps)), theta, false);
  const pt = upperPoint(frame(s), theta + eps, false);
  const n = new THREE.Vector3()
    .subVectors(ps, p)
    .cross(new THREE.Vector3().subVectors(pt, p))
    .normalize();
  // Keep the normal pointing away from the shoe's core.
  const core = new THREE.Vector3(p.x, frame(s).base + 0.15, frame(s).cz);
  if (n.dot(new THREE.Vector3().subVectors(p, core)) < 0) n.negate();
  return n;
}

function surfaceOffset(s: number, theta: number, offset: number) {
  return upperPoint(frame(s), theta, false).add(surfaceNormal(s, theta).multiplyScalar(offset));
}

// ---------- Generic grid mesh ----------

function gridIndices(rows: number, cols: number, offset: number, classify?: (r: number, c: number) => number) {
  const buckets: number[][] = [[], [], []];
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const a = offset + r * cols + c;
      const b = a + cols;
      const bucket = buckets[classify ? classify(r, c) : 0]!;
      bucket.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  return buckets;
}

function buildGrouped(positions: number[], uvs: number[], buckets: number[][]) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  const index: number[] = [];
  buckets.forEach((b, i) => {
    geo.addGroup(index.length, b.length, i);
    index.push(...b);
  });
  geo.setIndex(index);
  geo.computeVertexNormals();
  return geo;
}

// ---------- Upper ----------

/** s at which the derby quarter overlaps the vamp, for a given θ (outer side). */
function quarterEdge(theta: number) {
  const t = clamp01((theta - 0.1) / 0.76);
  return theta > 0.86 ? 0.4 : lerp(0.32, 0.4, t);
}

const S_SAMPLES = 180;

function sSample(i: number) {
  // Cosine spacing packs samples at the heel and toe where curvature is highest.
  const t = i / (S_SAMPLES - 1);
  return 0.5 - 0.5 * Math.cos(Math.PI * t);
}

/**
 * Material groups: 0 = polished (cap + heel counter + eyestays), 1 = pebble vamp, 2 = shearling lining.
 * Matches Fermo: smooth toe/heel/flaps, grained mid-vamp.
 */
export function buildUpper() {
  const NA = 32;
  const NB = 28;
  const positions: number[] = [];
  const uvs: number[] = [];
  const frames = Array.from({ length: S_SAMPLES }, (_, i) => frame(sSample(i)));
  const tmp = new THREE.Vector3();

  const segments: { from: (f: Frame) => number; to: (f: Frame) => number; n: number; cavity: boolean }[] = [
    { from: () => 0, to: (f) => f.theta1, n: NA, cavity: false },
    { from: (f) => f.theta1, to: (f) => Math.PI - f.theta1, n: NB, cavity: true },
    { from: (f) => Math.PI - f.theta1, to: () => Math.PI, n: NA, cavity: false },
  ];

  const allBuckets: number[][] = [[], [], []];

  segments.forEach((seg) => {
    const offset = positions.length / 3;
    frames.forEach((f) => {
      const a = seg.from(f);
      const b = seg.to(f);
      for (let j = 0; j < seg.n; j++) {
        const theta = lerp(a, b, j / (seg.n - 1));
        upperPoint(f, theta, seg.cavity, tmp);
        positions.push(tmp.x, tmp.y, tmp.z);
        uvs.push(f.s * 10, (theta / Math.PI) * 3.6);
      }
    });

    const buckets = gridIndices(S_SAMPLES, seg.n, offset, (r, c) => {
      if (seg.cavity) return 2;
      const f = frames[r]!;
      const sMid = (f.s + frames[r + 1]!.s) / 2;
      const theta = lerp(seg.from(f), seg.to(f), (c + 0.5) / (seg.n - 1));
      const sideTheta = theta > Math.PI / 2 ? Math.PI - theta : theta;
      // Cap toe — polished
      if (sMid > 0.78) return 0;
      // Heel counter — polished
      if (sMid < 0.18) return 0;
      // Quarters / eyestay zone — polished
      if (sMid < quarterEdge(sideTheta)) return 0;
      // Mid vamp — pebble grain
      return 1;
    });
    buckets.forEach((b, i) => allBuckets[i]!.push(...b));
  });

  return buildGrouped(positions, uvs, allBuckets);
}

// ---------- Derby quarters (eyestays) ----------

const LACE_GAP = 0.17;
const FLAP_START = 0.4;
const FLAP_END = 0.6;

function flapBottom(s: number) {
  const t = Math.sqrt(Math.max(0, (FLAP_END - s) / (FLAP_END - FLAP_START)));
  return Math.PI / 2 - LACE_GAP - 0.04 - 0.62 * t;
}

export function buildFlaps() {
  const NS = 40;
  const NT = 14;
  const positions: number[] = [];
  const uvs: number[] = [];
  const buckets: number[][] = [[], [], []];
  for (const side of [0, 1]) {
    const offset = positions.length / 3;
    for (let i = 0; i < NS; i++) {
      const s = lerp(FLAP_START, FLAP_END, i / (NS - 1));
      const top = Math.PI / 2 - LACE_GAP;
      const bottom = flapBottom(s);
      for (let j = 0; j < NT; j++) {
        let theta = lerp(top, bottom, j / (NT - 1));
        if (side === 1) theta = Math.PI - theta;
        const p = surfaceOffset(s, theta, 0.012);
        positions.push(p.x, p.y, p.z);
        uvs.push(s * 9, (theta / Math.PI) * 3.2);
      }
    }
    const b = gridIndices(NS, NT, offset);
    buckets[0]!.push(...b[0]!);
  }
  return buildGrouped(positions, uvs, buckets);
}

// ---------- Tongue ----------

export function buildTongue() {
  const NU = 20;
  const NT = 16;
  const positions: number[] = [];
  const uvs: number[] = [];
  const f = frame(0.43);
  const tmp = new THREE.Vector3();
  for (let i = 0; i < NU; i++) {
    const u = i / (NU - 1);
    for (let j = 0; j < NT; j++) {
      const theta = lerp(Math.PI / 2 - 0.42, Math.PI / 2 + 0.42, j / (NT - 1));
      upperPoint(f, theta, false, tmp);
      const x = tmp.x - u * 0.26;
      const y = tmp.y + 0.07 * Math.pow(u, 1.3) - 0.004;
      const z = f.cz + (tmp.z - f.cz) * (1 - 0.15 * u);
      positions.push(x, y, z);
      uvs.push(u * 2, j / NT);
    }
  }
  return buildGrouped(positions, uvs, gridIndices(NU, NT, 0));
}

// ---------- Sole & heel ----------

function ringLoft(
  count: number,
  sAt: (i: number) => number,
  ring: (s: number, phi: number) => THREE.Vector3,
  segments = 56,
  capEnd = false,
) {
  const positions: number[] = [];
  const uvs: number[] = [];
  for (let i = 0; i < count; i++) {
    const s = sAt(i);
    for (let j = 0; j <= segments; j++) {
      const phi = (j / segments) * Math.PI * 2;
      const p = ring(s, phi);
      positions.push(p.x, p.y, p.z);
      uvs.push(s * 6, j / segments);
    }
  }
  const index = gridIndices(count, segments + 1, 0)[0]!;
  if (capEnd) {
    const last = (count - 1) * (segments + 1);
    let cx = 0;
    let cy = 0;
    let cz = 0;
    for (let j = 0; j <= segments; j++) {
      cx += positions[(last + j) * 3]!;
      cy += positions[(last + j) * 3 + 1]!;
      cz += positions[(last + j) * 3 + 2]!;
    }
    const centre = positions.length / 3;
    positions.push(cx / (segments + 1), cy / (segments + 1), cz / (segments + 1));
    uvs.push(0, 0);
    for (let j = 0; j < segments; j++) index.push(centre, last + j, last + j + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(index);
  geo.computeVertexNormals();
  return geo;
}

const SOLE_LENGTH = LENGTH + 0.07;
const superCos = (phi: number, p: number) => Math.sign(Math.cos(phi)) * Math.pow(Math.abs(Math.cos(phi)), p);
const superSin = (phi: number, p: number) => Math.sign(Math.sin(phi)) * Math.pow(Math.abs(Math.sin(phi)), p);

export const soleHalfWidth = (s: number) => halfWidth(s) * 1.1;

export function buildSole() {
  const count = 150;
  return ringLoft(
    count,
    (i) => 0.5 - 0.5 * Math.cos((Math.PI * i) / (count - 1)),
    (s, phi) => {
      const w = soleHalfWidth(s);
      const mid = rise(s) + SOLE_T / 2;
      return new THREE.Vector3(
        (s - 0.5) * SOLE_LENGTH,
        mid + (SOLE_T / 2) * superSin(phi, 0.22),
        centreZ(s) + w * superCos(phi, 0.22),
      );
    },
  );
}

export function buildHeel() {
  const count = 50;
  const end = 0.27;
  return ringLoft(
    count,
    (i) => end * (1 - Math.cos((Math.PI * i) / (2 * (count - 1)))),
    (s, phi) => {
      const topY = rise(s) + 0.002;
      const t = 0.5 + 0.5 * superSin(phi, 0.25);
      const w = halfWidth(s) * 1.04 * (0.9 + 0.1 * t);
      return new THREE.Vector3((s - 0.5) * SOLE_LENGTH, t * topY, centreZ(s) + w * superCos(phi, 0.25));
    },
    48,
    true,
  );
}

// ---------- Tubes: seams, collar, welt, laces ----------

function tube(points: THREE.Vector3[], radius: number, closed = false, segments = 200) {
  const curve = new THREE.CatmullRomCurve3(points, closed, "centripetal");
  return new THREE.TubeGeometry(curve, segments, radius, 8, closed);
}

export function buildCollar() {
  const outer: THREE.Vector3[] = [];
  const inner: THREE.Vector3[] = [];
  for (let i = 0; i <= 90; i++) {
    const s = lerp(0.004, 0.408, i / 90);
    const f = frame(s);
    outer.push(upperPoint(f, f.theta1, false));
    inner.push(upperPoint(f, Math.PI - f.theta1, false));
  }
  return tube([...outer, ...inner.reverse()], 0.016, true, 320);
}

export function buildSeams() {
  const geos: THREE.BufferGeometry[] = [];
  // Cap toe: double stitch across the vamp (Fermo line).
  for (const [s, r] of [
    [0.785, 0.0065],
    [0.8, 0.0032],
  ] as const) {
    const pts: THREE.Vector3[] = [];
    for (let j = 0; j <= 64; j++) pts.push(surfaceOffset(s, lerp(0.08, Math.PI - 0.08, j / 64), 0.0035));
    geos.push(tube(pts, r, false, 128));
  }
  // Quarter seams + flap edges.
  for (const side of [0, 1]) {
    const mirror = (t: number) => (side ? Math.PI - t : t);
    const seam: THREE.Vector3[] = [];
    for (let j = 0; j <= 32; j++) {
      const theta = lerp(0.86, 0.1, j / 32);
      seam.push(surfaceOffset(quarterEdge(theta) - 0.002, mirror(theta), 0.0035));
    }
    geos.push(tube(seam, 0.005, false, 80));

    const edge: THREE.Vector3[] = [];
    for (let i = 0; i <= 30; i++) {
      const s = lerp(FLAP_START, FLAP_END, i / 30);
      edge.push(surfaceOffset(s, mirror(Math.PI / 2 - LACE_GAP), 0.012));
    }
    for (let i = 30; i >= 0; i--) {
      const s = lerp(FLAP_START, FLAP_END, i / 30);
      edge.push(surfaceOffset(s, mirror(flapBottom(s)), 0.012));
    }
    geos.push(tube(edge, 0.006, false, 160));
  }
  return geos;
}

export function buildWelt() {
  const outer: THREE.Vector3[] = [];
  const inner: THREE.Vector3[] = [];
  for (let i = 0; i <= 120; i++) {
    const s = lerp(0.02, 0.985, i / 120);
    const x = (s - 0.5) * SOLE_LENGTH;
    const y = rise(s) + SOLE_T + 0.003;
    const w = soleHalfWidth(s) - 0.02;
    outer.push(new THREE.Vector3(x, y, centreZ(s) + w));
    inner.push(new THREE.Vector3(x, y, centreZ(s) - w));
  }
  return tube([...outer, ...inner.reverse()], 0.0045, true, 400);
}

export type LaceSet = {
  bars: THREE.BufferGeometry[];
  eyelets: { position: THREE.Vector3; normal: THREE.Vector3 }[];
};

export function buildLaces(): LaceSet {
  const bars: THREE.BufferGeometry[] = [];
  const eyelets: LaceSet["eyelets"] = [];
  // Fermo: four eyelet pairs.
  const rows = [0.43, 0.475, 0.52, 0.565];
  const eyeTheta = Math.PI / 2 - LACE_GAP - 0.075;

  rows.forEach((s) => {
    const left = surfaceOffset(s, eyeTheta, 0.018);
    const right = surfaceOffset(s, Math.PI - eyeTheta, 0.018);
    const mid = surfaceOffset(s, Math.PI / 2, 0.03);
    eyelets.push({ position: left, normal: surfaceNormal(s, eyeTheta) });
    eyelets.push({ position: right, normal: surfaceNormal(s, Math.PI - eyeTheta) });
    bars.push(tube([left, mid, right], 0.0075, false, 24));
  });

  const knot = surfaceOffset(rows[0]!, Math.PI / 2, 0.045);
  const loop = (dir: number) =>
    tube(
      [
        knot,
        knot.clone().add(new THREE.Vector3(-0.05, 0.03, 0.07 * dir)),
        knot.clone().add(new THREE.Vector3(-0.02, 0.05, 0.17 * dir)),
        knot.clone().add(new THREE.Vector3(0.05, 0.02, 0.14 * dir)),
        knot.clone().add(new THREE.Vector3(0.02, 0.0, 0.03 * dir)),
      ],
      0.0075,
      false,
      60,
    );
  const end = (dir: number, spread: number) =>
    tube(
      [
        knot,
        knot.clone().add(new THREE.Vector3(-0.02 + spread, 0.0, 0.1 * dir)),
        knot.clone().add(new THREE.Vector3(-0.05 + spread, -0.08, 0.28 * dir)),
        knot.clone().add(new THREE.Vector3(-0.07 + spread, -0.22, 0.36 * dir)),
        knot.clone().add(new THREE.Vector3(-0.08 + spread, -0.36, 0.38 * dir)),
      ],
      0.0075,
      false,
      60,
    );
  bars.push(loop(1), loop(-1), end(1, 0.04), end(-1, -0.03));
  return { bars, eyelets };
}

/** Small brand plaque on the outer quarter (as on Fermo). */
export function brandPlaquePlacement() {
  const s = 0.48;
  const theta = 0.55;
  const position = surfaceOffset(s, theta, 0.014);
  const normal = surfaceNormal(s, theta);
  const tangent = new THREE.Vector3(1, 0, 0).cross(normal).normalize();
  const bitangent = normal.clone().cross(tangent).normalize();
  const matrix = new THREE.Matrix4().makeBasis(tangent, bitangent, normal);
  const quaternion = new THREE.Quaternion().setFromRotationMatrix(matrix);
  return { position, quaternion };
}

/** Position and orientation of the branded insole plate at the bottom of the opening. */
export function insolePlacement() {
  const a = frame(0.1);
  const b = frame(0.32);
  const pa = new THREE.Vector3(a.x, a.base + INSOLE + 0.006, a.cz);
  const pb = new THREE.Vector3(b.x, b.base + INSOLE + 0.006, b.cz);
  const centre = pa.clone().add(pb).multiplyScalar(0.5);
  const tilt = Math.atan2(pb.y - pa.y, pb.x - pa.x);
  return { centre, tilt, length: pa.distanceTo(pb) };
}

// ---------- Textures ----------

/** Pebble-grain normal map — denser, closer to Fermo vamp. */
export function createGrainNormalMap(size = 512) {
  const h = new Float32Array(size * size);
  const rand = mulberry32(2016);
  for (let n = 0; n < 7800; n++) {
    const cx = rand() * size;
    const cy = rand() * size;
    const r = 2.2 + rand() * 5.5;
    const amp = 0.55 + rand() * 0.65;
    const r2 = r * r;
    for (let dy = -Math.ceil(r); dy <= Math.ceil(r); dy++) {
      for (let dx = -Math.ceil(r); dx <= Math.ceil(r); dx++) {
        const d2 = dx * dx + dy * dy;
        if (d2 > r2) continue;
        const x = (Math.floor(cx + dx) + size) % size;
        const y = (Math.floor(cy + dy) + size) % size;
        const v = amp * Math.sqrt(1 - d2 / r2);
        const idx = y * size + x;
        h[idx] = Math.max(h[idx]!, v);
      }
    }
  }
  const data = new Uint8Array(size * size * 4);
  const at = (x: number, y: number) => h[((y + size) % size) * size + ((x + size) % size)]!;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * 2.4;
      const dy = (at(x, y + 1) - at(x, y - 1)) * 2.4;
      const n = new THREE.Vector3(-dx, -dy, 1).normalize();
      const i = (y * size + x) * 4;
      data[i] = (n.x * 0.5 + 0.5) * 255;
      data[i + 1] = (n.y * 0.5 + 0.5) * 255;
      data[i + 2] = (n.z * 0.5 + 0.5) * 255;
      data[i + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.needsUpdate = true;
  return tex;
}

export function createInsoleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#2b2a28";
  ctx.fillRect(0, 0, 1024, 256);
  ctx.fillStyle = "#b08d57";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "500 92px Georgia, serif";
  ctx.fillText("ANDRIANO CHERINI", 512, 110);
  ctx.font = "italic 44px Georgia, serif";
  ctx.fillText("Forma e comfort · Fermo", 512, 196);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
