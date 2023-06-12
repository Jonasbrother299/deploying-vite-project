import React, { useRef, useState, useMemo, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'
import { TextureLoader, Vector3, MeshStandardMaterial, Vector2 } from "three"

const Model = ({ props, images }) => {
    const { nodes, materials } = useGLTF("/Kamera.glb");

    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index der aktuell angezeigten Textur

    const [textures, setTextures] = useState([]); // Array zum Speichern der geladenen Texturen
    const [smallerTextures, setSmallerTextures] = useState([]);

    useEffect(() => {
        const loadImages = async () => {


            const textureLoader = new TextureLoader();

            const loadedTextures = await Promise.all(
                images.map((path) => {
                    return new Promise((resolve) => {
                        textureLoader.load(path, (texture) => {
                            // Rotate texture by 180 degrees
                            texture.center = new Vector3(0.5, 0.5, 0);
                            texture.rotation = Math.PI;

                            resolve(texture); // Füge die geladene Textur zum Array hinzu
                        });
                    });
                })
            );

            setTextures(loadedTextures); // Speichere das Array der geladenen Texturen im State
        };

        loadImages();
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Funktion, um zum vorherigen Bild zu wechseln
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />

            <spotLight position={[-20, 50, 10]}
                penumbra={1}
                intensity={1}
                castShadow />
            <group {...props} dispose={null}>
                <group position={[9.0684681, 0, 1.3719821]} scale={35.8260002}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mic001.geometry}
                        material={materials["Black.001"]}
                        position={[-0.0152146, 0.0430727, -0.0700516]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mic.geometry}
                        material={materials["Black.001"]}
                        position={[-0.011714, 0.0416202, -0.0641577]}
                        rotation={[Math.PI / 2, -3e-7, Math.PI]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lens_Change_Btn.geometry}
                        material={materials.Buttons}
                        position={[-0.0010817, 0.0365079, -0.0559467]}
                        rotation={[0, 0, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.HDMI_Door.geometry}
                        material={materials["Black.001"]}
                        position={[-0.0154051, 0.0187304, -0.0720798]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.HDMI.geometry}
                        material={materials["Black.001"]}
                        position={[-0.0098714, 0.0105902, -0.0642474]}
                        rotation={[Math.PI / 2, 0, 3.1232367]}
                    />
                    <group position={[-0.0149875, 0.0412071, 0.0002346]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube016.geometry}
                            material={materials["Camera Body"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube016_1.geometry}
                            material={materials["Camera Body"]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Disp.geometry}
                        material={materials["White Test"]}
                        position={[-0.0294944, 0.0104556, 0.0242755]}
                        rotation={[Math.PI / 2, 0, Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Eye_Piece.geometry}
                        material={materials["Eye Piece.001"]}
                        position={[-0.036194, 0.0736139, -0.0159156]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={[0.8664529, 1, 1]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Flash_Attachment.geometry}
                        material={materials["Metal27.001"]}
                        position={[-0.0235751, 0.0879281, -0.0161343]}
                        rotation={[0, 0, 0.0271142]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Flash_Top.geometry}
                        material={materials["Camera Top"]}
                        position={[-0.0213176, 0.0853051, -0.0161343]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Lens_Housing.geometry}
                        material={materials.Buttons}
                        position={[-0.0000311, 0.0366849, -0.0166055]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mag_slash_Question.geometry}
                        material={materials["White Test"]}
                        position={[-0.0294944, 0.0311835, 0.028334]}
                        rotation={[0, 0, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.MagPlus.geometry}
                        material={materials["White Test"]}
                        position={[-0.0295241, 0.0485598, 0.0279645]}
                        rotation={[0, 0, -Math.PI / 2]}
                    />
                    <group position={[-0.0267719, 0.0307197, -0.0118785]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane003.geometry}
                            material={materials["Screen perimiter"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Plane003_1.geometry}
                            material={materials["Screen.002"]}
                        >
                            <meshLambertMaterial
                                map={textures[currentImageIndex]}
                            />
                        </mesh>
                    </group>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials["Camera Top"]}
                    position={[10.4826107, 1.3007816, 0.7830659]}
                    rotation={[0, -1.5705347, 0]}
                    scale={[1, 1, 1.1319706]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials["Material.002"]}
                    position={[10.4826107, 1.3007816, 0.7830659]}
                    rotation={[0, -1.5705347, 0]}
                    scale={[1, 1, 1.1319706]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials["Material.008"]}
                    position={[10.4826107, 1.3007816, 0.7830659]}
                    rotation={[0, -1.5705347, 0]}
                    scale={[1, 1, 1.1319706]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials["Material.003"]}
                    position={[10.4826107, 1.3007816, 0.7830659]}
                    rotation={[0, -1.5705347, 0]}
                    scale={[1, 1, 1.1319706]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube007.geometry}
                    material={materials["Material.009"]}
                    position={[10.4826107, 1.3007816, 0.7830659]}
                    rotation={[0, -1.5705347, 0]}
                    scale={[1, 1, 1.1319706]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials["Material.001"]}
                    position={[12.3052063, 1.2959971, 0.744214]}
                    rotation={[0, -1.5705347, 0]}
                    scale={[1.01062, 1.01062, 0.2031035]}
                >
                    <MeshReflectorMaterial
                        envMapIntensity={1}
                        dithering={true}
                        color={[0.015, 0.015, 0.020]}
                        roughness={0}
                        blur={[1000, 400]}
                        mixBlur={10}
                        mixStrength={80}
                        mixContrast={1}
                        resolution={2048}
                        mirror={0.5}
                        depthScale={0.01}
                        minDepthThreshold={0.9}
                        maxDepthThreshold={1}
                        depthToBlurRatioBias={0.25}
                        debug={0}
                        reflectorOffset={0.7}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials["Camera Body"]}
                    position={[8.3841076, 2.5992358, 3.2653112]}
                    scale={0.288249}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials["Material.014"]}
                    position={[8.7637177, 2.4360125, 2.1839192]}
                    rotation={[0, -1.5361036, 0]}
                    scale={0.094895}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text.geometry}
                    material={materials["Material.013"]}
                    position={[8.7412128, 2.4466269, 2.1261532]}
                    rotation={[0, -1.5361036, 0]}
                    scale={0.0547633}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube009.geometry}
                    material={nodes.Cube009.material}
                    position={[8.3436184, 2.4249752, 2.8725388]}
                    rotation={[0.0004966, Math.PI / 2, 0]}
                    scale={[0.0534381, 0.0266553, 0.0191974]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials["Camera Top"]}
                    position={[8.4339743, 2.520098, 0.7826434]}
                    scale={[0.5226168, 0.5226168, 0.4685972]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text001.geometry}
                    material={nodes.Text001.material}
                    position={[8.4499617, 2.5358047, 3.1338384]}
                    rotation={[0, -0.4578724, 0]}
                    scale={0.1072561}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text002.geometry}
                    material={nodes.Text002.material}
                    position={[8.627758, 2.5358047, 3.2525296]}
                    rotation={[-Math.PI, 0.119649, -Math.PI]}
                    scale={0.1072561}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text003.geometry}
                    material={nodes.Text003.material}
                    position={[8.4324722, 2.5358047, 3.5159554]}
                    rotation={[0, 1.5389743, 0]}
                    scale={0.1072561}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text004.geometry}
                    material={nodes.Text004.material}
                    position={[8.1664667, 2.5358047, 3.3449068]}
                    rotation={[0, 0.0323151, 0]}
                    scale={[0.107256, 0.1072561, 0.107256]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Text005.geometry}
                    material={nodes.Text005.material}
                    position={[8.2425127, 2.5358047, 3.0929568]}
                    rotation={[0, -0.8853773, 0]}
                    scale={0.0715638}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials["Material.001"]}
                    position={[8.4339743, 2.520098, 0.7826434]}
                    scale={[0.5226168, 0.5226168, 0.4685972]}
                >
                    <meshStandardMaterial
                        map={textures[currentImageIndex]}
                        repeat={[2, 2]}
                    />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials["Camera Body"]}
                    position={[7.8951669, 1.0962329, 3.0324657]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={0.3238771}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mic002.geometry}
                    material={materials["Black.001"]}
                    position={[-0.0152147, 0.0430727, -0.0700516]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mic003.geometry}
                    material={materials["Black.001"]}
                    position={[-0.011714, 0.0416202, -0.0641577]}
                    rotation={[Math.PI / 2, -3e-7, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lens_Change_Btn001.geometry}
                    material={materials.Buttons}
                    position={[-0.0010817, 0.0365079, -0.0559467]}
                    rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HDMI_Door001.geometry}
                    material={materials["Black.001"]}
                    position={[-0.0154051, 0.0187304, -0.0720798]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HDMI001.geometry}
                    material={materials["Black.001"]}
                    position={[-0.0098714, 0.0105902, -0.0642474]}
                    rotation={[Math.PI / 2, 0, 3.1232367]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Pfeillinks.geometry}
                    material={nodes.Pfeillinks.material}
                    position={[7.9664545, 1.0876436, 2.9273522]}
                    rotation={[Math.PI, -3e-7, Math.PI]}
                    scale={[-0.007055, -0.0184705, -0.11996]}
                    onClick={nextImage}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Pfeillrechts.geometry}
                    material={nodes.Pfeillrechts.material}
                    position={[7.9664545, 1.0876436, 3.1398697]}
                    scale={[-0.007055, -0.0184705, -0.11996]}
                    onClick={previousImage}
                />
            </group>
        </>
    )
}

export default Model