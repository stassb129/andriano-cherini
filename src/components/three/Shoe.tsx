"use client";

import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

/** Public path for the Meshy Fermo GLB. */
export const FERMO_MODEL = "/models/fermo.glb";

/** Target longest horizontal span — matches the old procedural shoe’s visual weight. */
const TARGET_LENGTH = 1.55;

/** Half-height after normalisation — used by the scene for shadows / floor. */
export const FERMO_HALF_HEIGHT = (() => {
  const rawY = 0.6658;
  const rawLongest = 1.8988;
  return (rawY * (TARGET_LENGTH / rawLongest)) / 2;
})();

export default function Shoe() {
  const { scene } = useGLTF(FERMO_MODEL, true, true);

  const prepared = useMemo(() => {
    const model = scene.clone(true);
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = TARGET_LENGTH / (Math.max(size.x, size.z) || 1);

    model.position.set(-center.x, -center.y, -center.z);
    const wrap = new THREE.Group();
    wrap.add(model);
    wrap.scale.setScalar(scale);

    wrap.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      obj.castShadow = true;
      obj.receiveShadow = true;

      const source = Array.isArray(obj.material) ? obj.material : [obj.material];
      const cloned = source.map((mat) => {
        const m = mat.clone();
        if (m instanceof THREE.MeshStandardMaterial || m instanceof THREE.MeshPhysicalMaterial) {
          // Export baked metallicFactor=1; clamp so leather reads under HDRI.
          m.metalness = Math.min(m.metalness, 0.12);
          m.envMapIntensity = 0.9;
        }
        return m;
      });
      obj.material = cloned.length === 1 ? cloned[0]! : cloned;
    });

    return wrap;
  }, [scene]);

  useEffect(
    () => () => {
      prepared.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) return;
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((m) => m.dispose());
      });
    },
    [prepared],
  );

  return <primitive object={prepared} />;
}

useGLTF.preload(FERMO_MODEL, true, true);
