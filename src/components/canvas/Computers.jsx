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
    // Only animate on desktop
    if (isMobile) return;

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
  }, [isMobile]);

  return (
    <mesh ref={meshRef} rotation={[0, isMobile ? 0 : rotationAngle, 0]}>
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

// Static image component for mobile
const ComputerImage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src="https://res.cloudinary.com/delz4didn/image/upload/v1743776565/coding_laptop_e82gil.gif"
        alt="Computer Model"
        className="w-full max-w-md object-contain"
      />
    </div>
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

  // Return static image for mobile
  if (isMobile) {
    return <ComputerImage />;
  }

  // Return 3D model for desktop
  return (
    <Canvas
      frameloop="always"
      shadows={true}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
