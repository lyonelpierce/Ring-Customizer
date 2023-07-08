import { PresentationControls, Environment } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

const Experience = () => {
  return (
    <PresentationControls
      speed={3}
      global
      zoom={0.7}
      polar={[0.3, Math.PI / 4]}
    >
      <Environment preset="dawn" />
      <Suspense>
        <Model scale={[0.11, 0.11, 0.11]} position={[0, -0.5, 0]} />
      </Suspense>
    </PresentationControls>
  );
};

export default Experience;
