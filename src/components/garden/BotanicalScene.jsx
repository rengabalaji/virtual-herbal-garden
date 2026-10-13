import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Botanical Herb Specimen (Stem + Foliage leaves with gentle organic motion)
function HerbalPlantModel() {
  const groupRef = useRef();
  const leavesRef = useRef([]);

  // Generate stylized botanical leaves in a spiral phyllotaxis arrangement
  const leavesData = useMemo(() => {
    const items = [];
    const count = 10;
    for (let i = 0; i < count; i++) {
      const angle = i * 2.399; // Golden ratio angle in radians
      const height = (i / count) * 2.2 - 0.7;
      const length = 0.85 + (i % 3) * 0.15;
      const scale = 0.6 + (i / count) * 0.45;
      items.push({ angle, height, length, scale, id: i });
    }
    return items;
  }, []);

  // Animate natural leaf swaying in the breeze
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.15;
    }
    leavesRef.current.forEach((leaf, idx) => {
      if (leaf) {
        leaf.rotation.z = Math.sin(t * 1.5 + idx * 0.8) * 0.05 + 0.35;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Central Herbal Stem */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.04, 0.07, 2.4, 16]} />
        <meshStandardMaterial
          color="#336647"
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Decorative Ceramic Plant Base */}
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.9, 0.65, 0.6, 24]} />
        <meshStandardMaterial
          color="#ded3c1"
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>

      {/* Organic Soil Surface */}
      <mesh position={[0, -0.54, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.85, 24]} />
        <meshStandardMaterial
          color="#3e2e21"
          roughness={0.95}
        />
      </mesh>

      {/* Tender Top Bud */}
      <mesh position={[0, 1.65, 0]}>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial
          color="#74c69d"
          roughness={0.4}
        />
      </mesh>

      {/* Phyllotactic Herbal Leaves */}
      {leavesData.map((data, index) => {
        const x = Math.cos(data.angle) * 0.12;
        const z = Math.sin(data.angle) * 0.12;

        return (
          <group
            key={data.id}
            position={[x, data.height, z]}
            rotation={[0.2, data.angle, 0]}
          >
            <mesh
              ref={(el) => (leavesRef.current[index] = el)}
              position={[data.length * 0.45, 0, 0]}
              rotation={[0, 0, 0.35]}
              scale={[data.scale, data.scale * 0.4, data.scale]}
            >
              <coneGeometry args={[0.38, data.length, 16]} />
              <meshStandardMaterial
                color={index % 2 === 0 ? '#2d6a4f' : '#40916c'}
                roughness={0.35}
                metalness={0.15}
              />
            </mesh>

            {/* Dewdrop reflection on selected leaves */}
            {index % 3 === 0 && (
              <mesh position={[data.length * 0.55, 0.08, 0]}>
                <sphereGeometry args={[0.035, 12, 12]} />
                <meshStandardMaterial
                  color="#ffffff"
                  roughness={0.1}
                  metalness={0.9}
                />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

// Gentle Ambient Floating Pollen Particles
function FloatingBotanicalParticles() {
  const pointsRef = useRef();
  const particleCount = 45;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 1] = Math.random() * 4 - 1;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#a4c7b3"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export default function BotanicalScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 1.2, 3.8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Soft Botanical Lighting */}
        <ambientLight intensity={0.85} color="#eaf5ee" />
        <directionalLight
          position={[5, 8, 4]}
          intensity={1.4}
          color="#fffdf0"
        />
        <pointLight position={[-4, 2, -2]} intensity={0.5} color="#74c69d" />
        <directionalLight
          position={[-3, -2, -2]}
          intensity={0.3}
          color="#2d6a4f"
        />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <HerbalPlantModel />
        </Float>

        <FloatingBotanicalParticles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>

      {/* Floating 3D Interaction Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(82, 140, 106, 0.25)',
          borderRadius: '9999px',
          padding: '5px 12px',
          fontSize: '0.72rem',
          fontWeight: 600,
          color: '#1b4733',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#245e43',
            display: 'inline-block'
          }}
        />
        3D Interactive • Drag to Inspect
      </div>
    </div>
  );
}
