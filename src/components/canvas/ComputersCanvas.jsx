import { Suspense, useEffect, useEffectffect, useState, useMemo, } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF, Center, Environment } from "@react-three/drei"


import { ACESFilmicToneMapping } from "three";

import * as THREE from 'three';

import CameraRig from "./CameraRig"
import Light from "./Light";

import CanvasLoader from "../Loader"
import Model from "./Model"

const ComputersCanvas = () => {
  const images = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "disturb.jpg",

  ];

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  })
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        fov: 25,
        near: 0.1,
        far: 2000,
        position: [20, 3, 5]
      }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: THREE.GammaEncoding,
        preserveDrawingBuffer: true
      }}
      onCreated={(state) => {
      }}
      flat
      dpr={[1, 2]}
    >
      {/* <fog attach="fog" args={["#000000", 1, 50]} /> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          target={[0, 0.35, 0]}
          maxPolarAngle={1.45}
          // minPolarAngle={Math.PI / 4}
          // minAzimuthAngle={0}
          maxAzimuthAngle={0}
          minDistance={1}
          maxDistance={30}
        />

        {/* <Ground /> */}
        {/* <CameraRig> */}
        <Center>
          <Model images={images} isMobile={isMobile} />
        </Center>
        {/* </CameraRig> */}
        <Environment preset='sunset' />
        <Light />
        {/* <color args={["#000000"]} attach="background"></color> */}
      </Suspense>

      <Preload all />
    </Canvas >
  )
}
export default ComputersCanvas