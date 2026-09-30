"use client";

import { Suspense, useEffect, useRef, useState, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Shoe, { FERMO_HALF_HEIGHT } from "./Shoe";

export type SceneMode = "hero" | "anatomy" | "viewer";

type Pose = { rot: [number, number, number]; pos: [number, number, number]; scale: number };

/** Camera-facing poses for each anatomy chapter: cap toe, lining, last, heel. */
export const ANATOMY_POSES: Pose[] = [
  { rot: [0.28, -0.9, 0.05], pos: [-0.2, 0.18, 0.4], scale: 1.38 },
  { rot: [0.95, 2.35, 0], pos: [-0.25, 0.12, 0], scale: 1.32 },
  { rot: [0.05, 0.02, 0], pos: [0, 0.16, 0], scale: 1.32 },
  { rot: [0.12, 2.75, -0.05], pos: [-0.15, 0.14, 0.3], scale: 1.38 },
];

type RigProps = {
  mode: SceneMode;
  progress?: MutableRefObject<number>;
  pose?: number;
};

function Rig({ mode, progress, pose = 0 }: RigProps) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const { size, gl } = useThree();
  const fit = Math.min(1, (size.width / size.height) * 0.82);

  useEffect(() => {
    const el = gl.domElement;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pointer.current.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    };
    const leave = () => {
      pointer.current.x = 0;
      pointer.current.y = 0;
    };
    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [gl]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const d = Math.min(delta, 0.05);

    if (mode === "hero") {
      const p = progress?.current ?? 0;
      const targetY = -0.62 + Math.sin(t * 0.28) * 0.12 + pointer.current.x * 0.28 + p * 2.4;
      const targetX = 0.22 + pointer.current.y * 0.1 + p * 0.35;
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 2.6, d);
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 2.6, d);
      g.rotation.z = THREE.MathUtils.damp(g.rotation.z, -0.04, 2.6, d);
      g.position.y = 0.16 + Math.sin(t * 0.7) * 0.035 - p * 0.3;
      const s = fit * 1.22 * (1 - p * 0.15);
      g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 2.6, d));
    } else if (mode === "anatomy") {
      const target = ANATOMY_POSES[pose] ?? ANATOMY_POSES[0]!;
      const sway = Math.sin(t * 0.35) * 0.05;
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, target.rot[0], 2.2, d);
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, target.rot[1] + sway + pointer.current.x * 0.1, 2.2, d);
      g.rotation.z = THREE.MathUtils.damp(g.rotation.z, target.rot[2], 2.2, d);
      g.position.x = THREE.MathUtils.damp(g.position.x, target.pos[0] * fit, 2.2, d);
      g.position.y = THREE.MathUtils.damp(g.position.y, target.pos[1] + Math.sin(t * 0.65) * 0.02, 2.2, d);
      g.position.z = THREE.MathUtils.damp(g.position.z, target.pos[2], 2.2, d);
      g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, target.scale * fit * 1.08, 2.2, d));
    } else {
      g.position.y = 0.08;
      g.scale.setScalar(Math.min(1.45, (size.width / size.height) * 0.9));
    }
  });

  return (
    <group ref={group} rotation={mode === "viewer" ? [0.15, -0.6, 0] : [0.2, -0.6, 0]}>
      <Shoe />
    </group>
  );
}

function Lights({ quality }: { quality: "low" | "high" }) {
  return (
    <>
      <ambientLight intensity={0.28} />
      <spotLight position={[3, 6, 4]} angle={0.5} penumbra={1} intensity={quality === "high" ? 70 : 55} color="#fff4e2" />
      <directionalLight position={[-4, 2, -5]} intensity={2} color="#cfae7a" />
      <directionalLight position={[5, 1, -2]} intensity={1} color="#9fb2d6" />
      <Environment resolution={quality === "high" ? 256 : 128} frames={1}>
        <Lightformer form="rect" intensity={4} position={[0, 5, 0]} rotation-x={Math.PI / 2} scale={[8, 3, 1]} />
        <Lightformer form="rect" intensity={2.2} position={[-5, 1.2, 0]} rotation-y={Math.PI / 2} scale={[12, 0.6, 1]} />
        <Lightformer form="rect" intensity={2.2} position={[5, 1.6, 0]} rotation-y={-Math.PI / 2} scale={[12, 0.8, 1]} />
        {quality === "high" && (
          <>
            <Lightformer form="rect" intensity={1.5} position={[0, 1, 6]} scale={[10, 0.4, 1]} />
            <Lightformer form="ring" color="#cfae7a" intensity={2.2} position={[3, 3, -5]} scale={2.5} />
          </>
        )}
      </Environment>
    </>
  );
}

type SceneProps = RigProps & { className?: string; interactive?: boolean };

export default function ShoeScene({ mode, progress, pose, className, interactive }: SceneProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [quality, setQuality] = useState<"low" | "high">("high");

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const saveData = "connection" in navigator && (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const lowMem = "deviceMemory" in navigator && (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;
    if (coarse || saveData || lowMem || window.innerWidth < 900) setQuality("low");
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!!entry?.isIntersecting && (entry.intersectionRatio > 0.05 || !!entry.isIntersecting)),
      { rootMargin: "40px", threshold: [0, 0.05, 0.2] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dpr: [number, number] = quality === "low" ? [1, 1.1] : [1, 1.35];

  return (
    <div ref={wrap} className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        dpr={dpr}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 1.1, 5.6], fov: 30 }}
        gl={{
          antialias: quality === "high",
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        onCreated={({ camera, gl }) => {
          camera.lookAt(0, 0.1, 0);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, quality === "low" ? 1.1 : 1.35));
        }}
        style={{ touchAction: interactive ? "none" : "pan-y" }}
      >
        <Suspense fallback={null}>
          <Lights quality={quality} />
          <Rig mode={mode} progress={progress} pose={pose} />
          <ContactShadows
            position={[0, -FERMO_HALF_HEIGHT - 0.02, 0]}
            opacity={0.55}
            scale={9}
            blur={quality === "high" ? 2.2 : 1.6}
            far={2}
            resolution={quality === "high" ? 256 : 128}
            color="#000"
            frames={1}
          />
        </Suspense>
        {mode === "viewer" && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.65}
            minPolarAngle={Math.PI * 0.2}
            maxPolarAngle={Math.PI * 0.55}
            target={[0, 0.1, 0]}
          />
        )}
      </Canvas>
    </div>
  );
}
