import React, { useRef } from "react"
import { useFrame } from '@react-three/fiber'

import { easing } from 'maath'
// import { useSnapshot } from 'valtio'

// import state from '../store'

const CameraRig = ({ children }) => {

    const group = useRef()
    // const snap = useSnapshot(state)

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260
        const isMobile = window.innerWidth <= 600
        const isBreakpoint2 = window.innerWidth >= 1260
        let targetPosition = [20, 0, 10]
        // easing.damp3(state.camera.position, targetPosition, 0.35, delta)
        // if (isBreakpoint2) targetPosition = [18, 4, 12]
        // if (isBreakpoint) targetPosition = [28, 7, 12]
        // if (isMobile) targetPosition = [18, 4, 12]
        // else {
        //     if (isMobile) {
        //         targetPosition = [-30, 2, 1]
        //     }
        //     else {
        //         targetPosition = [-14, 2, 0]
        //         setTimeout(() => {
        //             targetPosition = [-9, 2, 0]
        //         }, "1000")
        //     }
        // }

        easing.damp3(state.camera.position, targetPosition, 0.75, delta)


        // easing.dampE(
        //     group.current.rotation,
        //     [state.pointer.y / 10, -state.pointer.x / 5, 0],
        //     0.25,
        //     delta
        // )
    })

    return (
        <group ref={group}>{children}</group>
    )
}

export default CameraRig