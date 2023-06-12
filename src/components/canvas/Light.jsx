// React Three.js
import { useHelper, useTexture } from "@react-three/drei";

//Three.js
import { DirectionalLightHelper, Color, SpotLightHelper } from "three";

// React
import { useRef } from "react";

import { useFrame } from "@react-three/fiber";
// Debug UI
import { useControls } from "leva";

export default function Light(props) {

    const directionalRef = useRef()

    const ambientRef = useRef()

    const spotlightRef2 = useRef()
    // const [colorMapLight] = useTexture([
    //     '/Spotlight.jpeg',


    // ])

    // useHelper(directionalRef, DirectionalLightHelper, 2);
    // useHelper(directionalRef, SpotLightHelper, "cyan");

    const spotlightRef = useRef()
    // useHelper(spotlightRef, SpotLightHelper, 'cyan')
    // useFrame(x => {
    //     // console.log(spotlightRef.current.target)
    //     spotlightRef.current.target.position.set(-60, 80, -100)
    //     spotlightRef.current.target.updateMatrixWorld()
    // })

    // useControls('Ambient Light', {
    //     visible: {
    //         value: false,
    //         onChange: (v) => {
    //             ambientRef.current.visible = v
    //         },
    //     },
    //     color: {
    //         value: 'white',
    //         onChange: (v) => {
    //             ambientRef.current.color = new Color(v)
    //         },
    //     },
    // })

    // useControls('Directional Light', {
    //     visible: {
    //         value: true,
    //         onChange: (v) => {
    //             directionalRef.current.visible = v
    //         },
    //     },
    //     position: {
    //         value: {
    //             x: -975,
    //             y: 707,
    //             z: -510,
    //         },
    //         step: 1,

    //         onChange: (v) => {
    //             directionalRef.current.position.copy(v)
    //         },
    //     },
    //     color: {
    //         value: '#a6560b',
    //         onChange: (v) => {
    //             directionalRef.current.color = new Color(v)
    //         },
    //     },
    // })

    // useControls('Spotlight ', {
    //     visible: {
    //         value: true,
    //         onChange: (v) => {
    //             spotlightRef.current.visible = v
    //         },
    //     },
    //     position: {
    //         value: {

    //             x: 18,
    //             y: 25,
    //             z: -3,
    //         },
    //         step: 1,

    //         onChange: (v) => {
    //             spotlightRef.current.position.copy(v)
    //         },
    //     },
    //     color: {
    //         value: '#ffc996',
    //         onChange: (v) => {
    //             spotlightRef.current.color = new Color(v)
    //         },
    //     },
    // })
    // useControls('Spotlight2 ', {
    //     visible: {
    //         value: true,
    //         onChange: (v) => {
    //             spotlightRef2.current.visible = v
    //         },
    //     },
    //     position: {
    //         value: {

    //             x: 33,
    //             y: -1,
    //             z: 0,
    //         },
    //         step: 1,

    //         onChange: (v) => {
    //             spotlightRef2.current.position.copy(v)
    //         },
    //     },
    //     color: {
    //         value: '#ffc996',
    //         onChange: (v) => {
    //             spotlightRef2.current.color = new Color(v)
    //         },
    //     },
    // })

    return (
        <>

            {/* <spotLight
                color={[1, 0.25, 0.7]}
                intensity={0.1}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            /> */}
            {/* <spotLight
                color={[1, 1, 1]}
                intensity={3}
                angle={0.6}
                penumbra={0.5}
                position={[15, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            /> */}
            {/* <spotLight
                color={[0.14, 0.5, 1]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            /> */}
            <directionalLight
                ref={directionalRef}
                castShadow
                // shadow for directionalLight
                shadow-mapSize={[1024 * 10, 1024 * 10]}
                shadow-camera-near={1}
                shadow-camera-far={150}
                shadow-camera-top={10}
                shadow-camera-right={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
                // position={[position.x, position.y, 16.5]}
                position={[-975, 707, -510]}
                intensity={1}
                shadow-normalBias={0.04}
            />
            <ambientLight ref={ambientRef} intensity={2} />

            {/* <spotLight
                ref={spotlightRef}
                intensity={10}
                position={[15, 15, 10]}

                castShadow
                shadow-bias={-0.001}
                // map={colorMapLight}
                map-size={[100, 100, 100]}
                shadow-mapSize-width={500}
                shadow-mapSize-height={500}
                angle={0.4}
                penumbra={0.5}
                distance={800}
                color="white" /> */}
            {/* 
            <spotLight
                ref={spotlightRef2}
                intensity={10}
                position={[15, 15, 10]}

                castShadow
                shadow-bias={-0.001}
                // map={colorMapLight}
                map-size={[100, 100, 100]}
                shadow-mapSize-width={300}
                shadow-mapSize-height={200}
                angle={0.4}
                penumbra={0.5}
                distance={800}
                color="white" /> */}
        </>
    );
}