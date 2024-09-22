import React, { useEffect, useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { damp } from "three/src/math/MathUtils.js";
import gsap from 'gsap'

function Scene() {
  let tex = useTexture("./track.png");
  tex.needsUpdate = true;
  let urf = useRef(null);
  useFrame((state, delta) => {
    // urf.current.rotation.y += delta * .4;
    urf.current.rotation.y = damp(urf.current.rotation.y, urf.current.rotation.y + delta * 0.9, 8, delta)
  });

return (  
    <group>
      <mesh ref={urf} rotation={[0, 0.1, -0.08]}>
        <cylinderGeometry args={[1.1, 1.1, 2.4, 100, 60, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Scene;
