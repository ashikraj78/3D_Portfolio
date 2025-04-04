/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

import * as THREE from "three"; // Ensure you have this import at the top

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [rotationAngle, setRotationAngle] = useState(0);
  const meshRef = useRef();
  const directionRef = useRef(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const rotationStep = 0.01;

    const maxRotation = THREE.MathUtils.degToRad(30);
    const minRotation = THREE.MathUtils.degToRad(-30);

    const interval = setInterval(() => {
      setRotationAngle((prev) => {
        let nextRotation = prev + directionRef.current * rotationStep;

        if (nextRotation > maxRotation || nextRotation < minRotation) {
          directionRef.current *= -1; // reverse direction
          nextRotation = prev + directionRef.current * rotationStep;
        }

        if (meshRef.current) {
          meshRef.current.rotation.y = nextRotation;
        }

        return nextRotation;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={meshRef} rotation={[0, rotationAngle, 0]}>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows={true}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          //  autoRotate
          //  autoRotateSpeed={0.3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
