import "./App.css";

import { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Experience from "./components/Experience";
import Configurator from "./components/Configurator";

import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas className="column">
          <color alpha={true} clearColor={0x000000} />
          <Experience />
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={7}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
          <EffectComposer>
            <Bloom
              luminanceThreshold={1}
              intensity={2}
              levels={1.5}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
