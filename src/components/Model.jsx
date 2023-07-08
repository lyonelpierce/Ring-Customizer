import React, { useRef, useEffect, useState } from "react";

import * as THREE from "three";
import { easing } from "maath";

import {
  useGLTF,
  MeshRefractionMaterial,
  RenderTexture,
  PerspectiveCamera,
  Text,
  Decal,
} from "@react-three/drei";
import { useLoader, extend, useFrame } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import { Geometry, Base } from "@react-three/csg";
import { useCustomization } from "../contexts/Customization";

const Model = (props) => {
  const { gem, materialType, engraveInputValue } = useCustomization();
  const { nodes, materials } = useGLTF("./models/ring3.glb");

  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/syferfontein_1d_clear_puresky_4k.hdr"
  );

  // Material Type
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0.5, 0.5, 0.5),
    roughness: 0,
    metalness: 1,
  });

  // Modify the RGB properties
  goldMaterial.color.r = 1;
  goldMaterial.color.g = 0.734;
  goldMaterial.color.b = 0.255;

  // Gem Type
  function CreateGem(color) {
    useFrame((state, delta) =>
      easing.dampC(materials["material.001"].color, color.color, 0.5, delta)
    );
    // console.log(color.color);
    return (
      <MeshRefractionMaterial
        envMap={texture}
        color={color.color}
        toneMapped={false}
        fastChroma={true}
        fresnel={5}
        aberrationStrength={0.3}
        bounces={5}
        ior={3}
      />
    );
  }

  return (
    <group {...props} dispose={null}>
      <mesh scale={8} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial transparent opacity={0} />
        <Decal position={[0, -0.3, 0]} rotation={0} scale={1.5}>
          <meshBasicMaterial
            transparent
            opacity={1}
            polygonOffset
            polygonOffsetFactor={-100}
            side={THREE.BackSide}
            toneMapped={false}
          >
            <TickerTexture inputValue={engraveInputValue} />
          </meshBasicMaterial>
        </Decal>
      </mesh>
      <mesh material={materials["silver.002"]} position={[0, 0, -12.59]}>
        <Geometry>
          <Base geometry={nodes.Shank.geometry} />
        </Geometry>
      </mesh>
      <mesh
        geometry={nodes.Head.geometry}
        material={materials["silver.002"]}
        position={[0, 0, 0.09]}
      />
      <mesh
        geometry={nodes.Bowl_Design_part.geometry}
        material={
          materialType === "gold" ? goldMaterial : materials["rosegold.001"]
        }
        position={[0, 0, -0.13]}
      />
      {/* Main Diamond */}
      <mesh
        geometry={nodes.Gemstone.geometry}
        position={[0, 6.71, -0.06]}
        // material={materials["material.001"]}
        scale={[0.67, 0.65, 0.67]}
      >
        <CreateGem color={gem} />
      </mesh>
      <mesh
        geometry={nodes.Gemstone001.geometry}
        material={materials["material.001"]}
        position={[8.2, -0.05, 0.22]}
        rotation={[0, 0, -1.64]}
        scale={0.15}
      >
        <CreateGem color={gem} />
      </mesh>
      <mesh
        geometry={nodes.Gemstone002.geometry}
        material={materials["material.001"]}
        position={[-8.24, -0.09, 0.22]}
        rotation={[0, 0, 1.62]}
        scale={0.15}
      >
        <CreateGem color={gem} />
      </mesh>
      <mesh
        geometry={nodes.Gemstone003.geometry}
        material={materials["material.001"]}
        position={[0, 10.9, 1.38]}
        rotation={[1.7, 0, 0]}
        scale={[0.25, 0.24, 0.25]}
      >
        <CreateGem color={gem} />
      </mesh>
      <mesh
        geometry={nodes.Gemstone004.geometry}
        material={materials["material.001"]}
        position={[-0.01, 10.91, -1.6]}
        rotation={[1.44, 0, Math.PI]}
        scale={[0.25, 0.24, 0.25]}
      >
        <CreateGem color={gem} />
      </mesh>
      <mesh
        geometry={nodes.Gemstone005.geometry}
        material={materials["material.001"]}
        position={[-0.02, 14.98, 3.06]}
        rotation={[1.7, 0, 0]}
        scale={0.13}
      >
        <CreateGem color={gem} />
      </mesh>
      <mesh
        geometry={nodes.Gemstone006.geometry}
        material={materials["material.001"]}
        position={[-0.02, 14.98, -3.39]}
        rotation={[1.44, 0, Math.PI]}
        scale={0.13}
      >
        <CreateGem color={gem} />
      </mesh>
    </group>
  );
};

function TickerTexture(props) {
  const { inputValue } = props;
  // console.log(inputValue);

  const textRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      textRef.current.text = inputValue;
      textRef.current.sync();
    }, 100);
    return () => clearInterval(interval);
  });
  return (
    <RenderTexture attach="map" anisotropy={16}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 5]}
      />
      <Text
        anchorX="center"
        font="./fonts/script.ttf"
        rotation={[0, 0, 0]}
        ref={textRef}
        fontSize={0.4}
        color="#666"
      />
    </RenderTexture>
  );
}

useGLTF.preload("./models/ring3.glb");
export default Model;
