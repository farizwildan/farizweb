"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const LuminaCrystal = () => {
    return (
        <div className="h-[300px] w-full md:h-[500px]">
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial
                        color="#8B5CF6"
                        attach="material"
                        distort={0.5}
                        speed={2}
                    />
                </Sphere>
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        </div>
    );
};

export default LuminaCrystal;
