import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import truckImage from '@/assets/truck-3d.png';

interface TruckMeshProps {
  scrollProgress: number;
  isAnimating: boolean;
}

function TruckMesh({ scrollProgress, isAnimating }: TruckMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(truckImage);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.15;
      
      // Slight rotation for dynamic feel
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.03;
      
      // When animating to top, add bounce effect
      if (isAnimating) {
        meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 10) * 0.3;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 5) * 0.2;
      } else {
        meshRef.current.rotation.y = 0;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0.3, 0]}>
      <planeGeometry args={[5, 3.5]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        opacity={1}
        side={THREE.DoubleSide}
        alphaTest={0.1}
      />
    </mesh>
  );
}

interface Truck3DProps {
  scrollProgress: number;
  isAnimating: boolean;
}

export default function Truck3D({ scrollProgress, isAnimating }: Truck3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <TruckMesh scrollProgress={scrollProgress} isAnimating={isAnimating} />
    </Canvas>
  );
}
