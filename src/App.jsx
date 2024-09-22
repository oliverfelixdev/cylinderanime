import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Scene from './Scene'

import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
function App() {
  return (
    <>
    <Canvas flat camera={{fov: 55}}>
      <OrbitControls />
      <ambientLight />
      <Scene />
      <EffectComposer>
      <Bloom
        mipmapBlur
        intensity={5}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.3}
      />
      <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
    </>
  );
}

export default App;