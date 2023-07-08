/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/ring3.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ring3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Shank.geometry} material={materials['silver.002']} position={[0, 0, -12.59]} />
      <mesh geometry={nodes.Head.geometry} material={materials['silver.002']} position={[0, 0, 0.09]} />
      <mesh geometry={nodes.Bowl_Design_part.geometry} material={materials['rosegold.001']} position={[0, 0, -0.13]} />
      <mesh geometry={nodes.Gemstone.geometry} material={materials['material.001']} position={[0, 6.71, -0.06]} scale={[0.67, 0.65, 0.67]} />
      <mesh geometry={nodes.Gemstone001.geometry} material={materials['material.001']} position={[8.2, -0.05, 0.22]} rotation={[0, 0, -1.64]} scale={0.15} />
      <mesh geometry={nodes.Gemstone002.geometry} material={materials['material.001']} position={[-8.24, -0.09, 0.22]} rotation={[0, 0, 1.62]} scale={0.15} />
      <mesh geometry={nodes.Gemstone003.geometry} material={materials['material.001']} position={[0, 10.9, 1.38]} rotation={[1.7, 0, 0]} scale={[0.25, 0.24, 0.25]} />
      <mesh geometry={nodes.Gemstone004.geometry} material={materials['material.001']} position={[-0.01, 10.91, -1.6]} rotation={[1.44, 0, Math.PI]} scale={[0.25, 0.24, 0.25]} />
      <mesh geometry={nodes.Gemstone005.geometry} material={materials['material.001']} position={[-0.02, 14.98, 3.06]} rotation={[1.7, 0, 0]} scale={0.13} />
      <mesh geometry={nodes.Gemstone006.geometry} material={materials['material.001']} position={[-0.02, 14.98, -3.39]} rotation={[1.44, 0, Math.PI]} scale={0.13} />
    </group>
  )
}

useGLTF.preload('/ring3.glb')