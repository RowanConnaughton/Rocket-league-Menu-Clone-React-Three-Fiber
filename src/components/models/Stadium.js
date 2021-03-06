/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function StadiumModel(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./models/stadium/RLMap.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={materials['Material.003']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RoofRamp.geometry}
        material={materials['glass.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={materials.glass}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floorMarkings.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Goals.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FloorRamp.geometry}
        material={materials.FloorRamp}
        position={[-1.08, -0.03, 1.44]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
    </group>
  )
}

useGLTF.preload('/RLMap.glb')
