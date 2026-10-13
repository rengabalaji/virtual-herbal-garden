import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { RotateCcw, Play, Pause, ZoomIn, ZoomOut, Info, Sparkles, Layers } from 'lucide-react';

/* --------------------------------------------------------------------------
   1. PROCEDURAL TULSI (Holy Basil - Ocimum sanctum)
   Characteristics: Branching quadrangular stem, opposite decussate leaves,
   purple terminal flower spikes (racemes/verticillasters), aromatic shrub form.
   -------------------------------------------------------------------------- */
function ProceduralTulsi({ activePart }) {
  const groupRef = useRef();

  // Create opposite pairs of leaves at distinct nodes
  const nodes = useMemo(() => {
    const list = [];
    const count = 7;
    for (let i = 0; i < count; i++) {
      const height = -0.4 + i * 0.35;
      const angle = (i * Math.PI) / 2; // Decussate: 90 deg rotation at each tier
      const scale = 0.55 + (1 - i / count) * 0.45;
      list.push({ height, angle, scale, id: i });
    }
    return list;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08;
    }
  });

  const highlightLeaves = !activePart || activePart === 'all' || activePart === 'leaves';
  const highlightStem = !activePart || activePart === 'all' || activePart === 'stem';
  const highlightFlowers = !activePart || activePart === 'all' || activePart === 'flowers';

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Central Herb Stem */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.045, 0.07, 2.3, 16]} />
        <meshStandardMaterial
          color={highlightStem ? '#2d5a3c' : '#4b5563'}
          roughness={0.65}
          metalness={0.1}
        />
      </mesh>

      {/* Opposite Decussate Leaves */}
      {nodes.map((node) => (
        <group key={node.id} position={[0, node.height, 0]} rotation={[0, node.angle, 0]}>
          {/* Pair Leaf 1 */}
          <group position={[0.32 * node.scale, 0, 0]} rotation={[0.1, 0, -0.3]}>
            <mesh scale={[node.scale * 0.8, node.scale * 0.15, node.scale * 0.5]}>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial
                color={highlightLeaves ? (node.id % 2 === 0 ? '#1f633d' : '#2d7a4f') : '#374151'}
                roughness={0.4}
                metalness={0.15}
              />
            </mesh>
            {/* Leaf Vein */}
            <mesh position={[0, 0.04, 0]} scale={[node.scale * 0.75, 0.02, 0.03]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#74c69d" />
            </mesh>
          </group>

          {/* Pair Leaf 2 (Opposite) */}
          <group position={[-0.32 * node.scale, 0, 0]} rotation={[-0.1, 0, 0.3]}>
            <mesh scale={[node.scale * 0.8, node.scale * 0.15, node.scale * 0.5]}>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial
                color={highlightLeaves ? (node.id % 2 === 0 ? '#1f633d' : '#2d7a4f') : '#374151'}
                roughness={0.4}
                metalness={0.15}
              />
            </mesh>
            <mesh position={[0, 0.04, 0]} scale={[node.scale * 0.75, 0.02, 0.03]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#74c69d" />
            </mesh>
          </group>
        </group>
      ))}

      {/* Terminal Flower Spikes (Manjari / Inflorescence) */}
      <group position={[0, 1.85, 0]}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.02, 0.035, 0.6, 12]} />
          <meshStandardMaterial color="#4a2e4b" />
        </mesh>
        {[0, 0.12, 0.24, 0.36, 0.48].map((y, idx) => (
          <group key={idx} position={[0, y, 0]}>
            <mesh>
              <torusGeometry args={[0.08 - idx * 0.01, 0.03, 8, 16]} />
              <meshStandardMaterial
                color={highlightFlowers ? '#6b3e6e' : '#4b5563'}
                roughness={0.5}
              />
            </mesh>
            {/* Small violet florets */}
            {[0, 1.57, 3.14, 4.71].map((rot, rIdx) => (
              <mesh key={rIdx} position={[Math.cos(rot) * 0.09, 0, Math.sin(rot) * 0.09]}>
                <sphereGeometry args={[0.025, 8, 8]} />
                <meshStandardMaterial
                  color={highlightFlowers ? '#c084fc' : '#6b7280'}
                  emissive={highlightFlowers ? '#7e22ce' : '#000000'}
                  emissiveIntensity={0.2}
                />
              </mesh>
            ))}
          </group>
        ))}
      </group>

      {/* Traditional Terracotta Cultivation Pot */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.85, 0.6, 0.65, 24]} />
        <meshStandardMaterial color="#a75d38" roughness={0.85} />
      </mesh>
      {/* Soil base */}
      <mesh position={[0, -0.57, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 24]} />
        <meshStandardMaterial color="#3b271d" roughness={0.95} />
      </mesh>
    </group>
  );
}

/* --------------------------------------------------------------------------
   2. PROCEDURAL NEEM (Azadirachta indica)
   Characteristics: Woody trunk, compound pinnate leaves with 7-11 asymmetric
   falcate serrated leaflets, cream axillary flower buds.
   -------------------------------------------------------------------------- */
function ProceduralNeem({ activePart }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.12) * 0.06;
    }
  });

  const highlightFoliage = !activePart || activePart === 'all' || activePart === 'leaves';
  const highlightBark = !activePart || activePart === 'all' || activePart === 'stem';

  // Compound pinnate branch structure
  const branches = [
    { pos: [-0.4, 0.4, 0.3], rot: [0.3, -0.4, -0.5] },
    { pos: [0.4, 0.6, -0.2], rot: [-0.2, 0.5, 0.6] },
    { pos: [-0.2, 0.9, -0.4], rot: [-0.4, -0.3, -0.4] },
    { pos: [0.3, 1.1, 0.3], rot: [0.4, 0.4, 0.5] },
    { pos: [0, 1.4, 0], rot: [0, 0, 0] }
  ];

  return (
    <group ref={groupRef} position={[0, -0.35, 0]}>
      {/* Woody Trunk with rough botanical bark */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.11, 0.19, 1.8, 16]} />
        <meshStandardMaterial
          color={highlightBark ? '#4a3728' : '#374151'}
          roughness={0.9}
        />
      </mesh>

      {/* Main Branches */}
      {branches.map((b, bIdx) => (
        <group key={bIdx} position={b.pos} rotation={b.rot}>
          {/* Branch Petiole */}
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.03, 0.05, 0.7, 10]} />
            <meshStandardMaterial
              color={highlightBark ? '#3e2c1e' : '#374151'}
              roughness={0.8}
            />
          </mesh>

          {/* Symmetrical pairs of falcate leaflets along petiole */}
          {[-0.1, 0.1, 0.3, 0.5].map((yOffset, lIdx) => (
            <group key={lIdx} position={[0, yOffset + 0.1, 0]}>
              {/* Left Leaflet */}
              <mesh
                position={[0.22, 0, 0.05]}
                rotation={[0.1, 0.2, -0.35]}
                scale={[0.28, 0.04, 0.11]}
              >
                <coneGeometry args={[0.5, 1.2, 10]} />
                <meshStandardMaterial
                  color={highlightFoliage ? '#2e6b3c' : '#374151'}
                  roughness={0.4}
                />
              </mesh>
              {/* Right Leaflet */}
              <mesh
                position={[-0.22, 0, 0.05]}
                rotation={[-0.1, -0.2, 0.35]}
                scale={[0.28, 0.04, 0.11]}
              >
                <coneGeometry args={[0.5, 1.2, 10]} />
                <meshStandardMaterial
                  color={highlightFoliage ? '#337a44' : '#374151'}
                  roughness={0.4}
                />
              </mesh>
            </group>
          ))}

          {/* Terminal Leaflet */}
          <mesh
            position={[0, 0.7, 0]}
            rotation={[0, 0, 0]}
            scale={[0.22, 0.04, 0.1]}
          >
            <coneGeometry args={[0.4, 1.1, 10]} />
            <meshStandardMaterial
              color={highlightFoliage ? '#3ea357' : '#374151'}
              roughness={0.35}
            />
          </mesh>

          {/* Delicate Neem Flowers / Small Cream Drupes */}
          <group position={[0.08, 0.15, 0.08]}>
            {[0, 1, 2].map((i) => (
              <mesh key={i} position={[i * 0.04, i * 0.03, 0]}>
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial color="#fef9c3" roughness={0.3} />
              </mesh>
            ))}
          </group>
        </group>
      ))}

      {/* Earthy Ground Mound */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.0, 1.1, 0.25, 24]} />
        <meshStandardMaterial color="#38291e" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* --------------------------------------------------------------------------
   3. PROCEDURAL ALOE VERA (Aloe barbadensis miller)
   Characteristics: Stemless radial rosette, 16+ thick succulent tapering
   mucilaginous leaves curving upwards, glaucous green, soft marginal spines.
   -------------------------------------------------------------------------- */
function ProceduralAloeVera({ activePart }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;
    }
  });

  const highlightLeaves = !activePart || activePart === 'all' || activePart === 'leaves';
  const highlightGel = activePart === 'gel';

  // 3 concentric layers of succulent rosette leaves
  const rosetteLeaves = useMemo(() => {
    const leaves = [];
    // Outer mature ring (large, sweeping out)
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      leaves.push({ angle, tier: 1, length: 1.5, radius: 0.35, incline: 0.65 });
    }
    // Middle ring
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI * 2) / 6 + 0.35;
      leaves.push({ angle, tier: 2, length: 1.3, radius: 0.22, incline: 0.45 });
    }
    // Inner youthful ring (upright shoots)
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI * 2) / 4 + 0.7;
      leaves.push({ angle, tier: 3, length: 0.95, radius: 0.1, incline: 0.2 });
    }
    return leaves;
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.45, 0]}>
      {/* Central Rosette Core */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 0.4, 16]} />
        <meshStandardMaterial color="#2d7a64" roughness={0.5} />
      </mesh>

      {/* Radial Fleshy Succulent Leaves */}
      {rosetteLeaves.map((leaf, idx) => {
        const x = Math.cos(leaf.angle) * leaf.radius;
        const z = Math.sin(leaf.angle) * leaf.radius;

        return (
          <group
            key={idx}
            position={[x, -0.05 + leaf.tier * 0.06, z]}
            rotation={[0, -leaf.angle + Math.PI / 2, 0]}
          >
            {/* Curved Succulent Blade */}
            <group rotation={[leaf.incline, 0, 0]}>
              <mesh position={[0, leaf.length * 0.45, 0]} scale={[0.18, leaf.length * 0.5, 0.08]}>
                <coneGeometry args={[0.7, 1.8, 16]} />
                <meshStandardMaterial
                  color={
                    highlightGel
                      ? '#a7f3d0'
                      : highlightLeaves
                      ? leaf.tier === 3
                        ? '#3cb371'
                        : '#276f57'
                      : '#374151'
                  }
                  roughness={0.3}
                  metalness={0.1}
                  transparent={highlightGel}
                  opacity={highlightGel ? 0.75 : 1.0}
                />
              </mesh>

              {/* White Fleck / Botanical Striae */}
              {leaf.tier <= 2 && (
                <mesh position={[0, leaf.length * 0.3, 0.045]} scale={[0.07, 0.02, 0.01]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color="#d1fae5" roughness={0.2} />
                </mesh>
              )}

              {/* Marginal Prickles / Soft Spines */}
              {[-0.2, 0.1, 0.4].map((spineOffset, sIdx) => (
                <group key={sIdx} position={[0, leaf.length * 0.4 + spineOffset, 0]}>
                  <mesh position={[0.09, 0, 0]} rotation={[0, 0, -0.5]}>
                    <coneGeometry args={[0.015, 0.04, 6]} />
                    <meshStandardMaterial color="#ecfdf5" />
                  </mesh>
                  <mesh position={[-0.09, 0, 0]} rotation={[0, 0, 0.5]}>
                    <coneGeometry args={[0.015, 0.04, 6]} />
                    <meshStandardMaterial color="#ecfdf5" />
                  </mesh>
                </group>
              ))}
            </group>
          </group>
        );
      })}

      {/* Ceramic Cultivation Bowl */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.95, 0.7, 0.5, 24]} />
        <meshStandardMaterial color="#e5ded2" roughness={0.7} />
      </mesh>
      {/* Sandy Succulent Grit Soil */}
      <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.9, 24]} />
        <meshStandardMaterial color="#6b5b4e" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* --------------------------------------------------------------------------
   4. PROCEDURAL TURMERIC (Curcuma longa)
   Characteristics: Segmented golden-orange underground rhizome tubers,
   fibrous rootlets, broad upright pseudostems with tropical lanceolate leaves.
   -------------------------------------------------------------------------- */
function ProceduralTurmeric({ activePart }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.12) * 0.06;
    }
  });

  const highlightRhizome = !activePart || activePart === 'all' || activePart === 'rhizome';
  const highlightLeaves = !activePart || activePart === 'all' || activePart === 'leaves';

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* 1. Curcumin-Rich Underground Rhizome Complex (Golden-Amber Tubers) */}
      <group position={[0, -0.3, 0]}>
        {/* Primary Mother Rhizome */}
        <mesh position={[0, 0, 0]} rotation={[0.2, 0.4, 1.4]} scale={[0.28, 0.45, 0.24]}>
          <capsuleGeometry args={[0.6, 0.9, 12, 16]} />
          <meshStandardMaterial
            color={highlightRhizome ? '#c97a14' : '#4b5563'}
            roughness={0.7}
            metalness={0.15}
          />
        </mesh>

        {/* Golden Rhizome Growth Rings */}
        {[-0.2, 0, 0.2].map((y, idx) => (
          <mesh key={idx} position={[0.02, y, 0]} rotation={[0.2, 0.4, 1.4]}>
            <torusGeometry args={[0.27, 0.02, 8, 16]} />
            <meshStandardMaterial
              color={highlightRhizome ? '#e09f3e' : '#374151'}
              roughness={0.8}
            />
          </mesh>
        ))}

        {/* Secondary Lateral Finger Rhizomes */}
        <mesh position={[-0.35, -0.08, 0.15]} rotation={[0.5, -0.6, -1.2]} scale={[0.16, 0.35, 0.15]}>
          <capsuleGeometry args={[0.5, 0.7, 10, 12]} />
          <meshStandardMaterial
            color={highlightRhizome ? '#d97706' : '#4b5563'}
            roughness={0.75}
          />
        </mesh>

        <mesh position={[0.38, -0.05, -0.1]} rotation={[-0.4, 0.5, 1.1]} scale={[0.15, 0.32, 0.14]}>
          <capsuleGeometry args={[0.5, 0.7, 10, 12]} />
          <meshStandardMaterial
            color={highlightRhizome ? '#b45309' : '#4b5563'}
            roughness={0.75}
          />
        </mesh>

        {/* Fibrous Rootlets */}
        {[-0.2, 0, 0.2, 0.4].map((x, idx) => (
          <mesh key={idx} position={[x * 0.7, -0.35, (idx % 2) * 0.15]} rotation={[0.2, 0, 0.3 * idx]}>
            <cylinderGeometry args={[0.012, 0.005, 0.45, 8]} />
            <meshStandardMaterial color="#854d0e" roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* 2. Upright Pseudostem Sheath */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.07, 0.11, 1.2, 16]} />
        <meshStandardMaterial
          color={highlightLeaves ? '#4ade80' : '#374151'}
          roughness={0.5}
        />
      </mesh>

      {/* 3. Lush Broad Lanceolate Tropical Foliage */}
      {[
        { pos: [0.35, 1.0, 0.1], rot: [0.2, 0.4, -0.45], scale: [0.75, 1.4, 0.1] },
        { pos: [-0.35, 1.15, -0.1], rot: [-0.2, -0.5, 0.45], scale: [0.7, 1.35, 0.1] },
        { pos: [0.05, 1.45, 0.2], rot: [0.3, 0.1, -0.15], scale: [0.65, 1.25, 0.1] },
        { pos: [-0.05, 1.6, -0.2], rot: [-0.3, -0.1, 0.15], scale: [0.55, 1.1, 0.1] }
      ].map((leaf, idx) => (
        <group key={idx} position={leaf.pos} rotation={leaf.rot}>
          <mesh scale={leaf.scale}>
            <sphereGeometry args={[0.45, 16, 16]} />
            <meshStandardMaterial
              color={highlightLeaves ? (idx % 2 === 0 ? '#15803d' : '#16a34a') : '#374151'}
              roughness={0.35}
              metalness={0.1}
            />
          </mesh>
          {/* Prominent leaf central midrib */}
          <mesh position={[0, 0, 0.03]} scale={[0.02, leaf.scale[1] * 0.8, 0.02]}>
            <cylinderGeometry args={[1, 1, 1, 8]} />
            <meshStandardMaterial color="#86efac" />
          </mesh>
        </group>
      ))}

      {/* Cultivation Basin Ground Plane */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[1.0, 0.85, 0.3, 24]} />
        <meshStandardMaterial color="#422006" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* --------------------------------------------------------------------------
   Interactive Canvas Ground Plane & Botanical Measurement Rings
   -------------------------------------------------------------------------- */
function BotanicalPedestal() {
  return (
    <group position={[0, -1.02, 0]}>
      {/* Pedestal Surface */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 36]} />
        <meshStandardMaterial
          color="#f4efe6"
          roughness={0.8}
        />
      </mesh>

      {/* Concentric Measurement Grid Rings */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[1.2, 1.22, 48]} />
        <meshBasicMaterial color="#b8d4c3" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[2.1, 2.12, 48]} />
        <meshBasicMaterial color="#d8f3dc" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

/* --------------------------------------------------------------------------
   Main PlantViewer3D Export
   -------------------------------------------------------------------------- */
export default function PlantViewer3D({ plant }) {
  const [autoRotate, setAutoRotate] = useState(true);
  const [activePart, setActivePart] = useState('all');
  const [webglError, setWebglError] = useState(false);
  const controlsRef = useRef();

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  // Plant-specific anatomical anatomy layers
  const anatomyLayers = useMemo(() => {
    if (!plant) return [];
    switch (plant.id) {
      case 'tulsi':
        return [
          { id: 'all', label: 'Complete Anatomy' },
          { id: 'leaves', label: 'Decussate Foliage' },
          { id: 'flowers', label: 'Inflorescence Spikes' },
          { id: 'stem', label: 'Aromatic Stem' }
        ];
      case 'neem':
        return [
          { id: 'all', label: 'Complete Anatomy' },
          { id: 'leaves', label: 'Compound Pinnate Leaves' },
          { id: 'stem', label: 'Medicinal Bark / Trunk' }
        ];
      case 'aloe-vera':
        return [
          { id: 'all', label: 'Complete Anatomy' },
          { id: 'leaves', label: 'Succulent Rosette' },
          { id: 'gel', label: 'Parenchyma Gel Layer' }
        ];
      case 'turmeric':
        return [
          { id: 'all', label: 'Complete Anatomy' },
          { id: 'rhizome', label: 'Curcumin Rhizome Tubers' },
          { id: 'leaves', label: 'Tropical Pseudostem' }
        ];
      default:
        return [{ id: 'all', label: 'Complete Specimen' }];
    }
  }, [plant]);

  // Select procedural model based on plant ID
  const renderPlantModel = () => {
    switch (plant?.id) {
      case 'tulsi':
        return <ProceduralTulsi activePart={activePart} />;
      case 'neem':
        return <ProceduralNeem activePart={activePart} />;
      case 'aloe-vera':
        return <ProceduralAloeVera activePart={activePart} />;
      case 'turmeric':
        return <ProceduralTurmeric activePart={activePart} />;
      default:
        return <ProceduralTulsi activePart={activePart} />;
    }
  };

  if (webglError) {
    return (
      <div
        style={{
          height: '420px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-cream-surface)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--color-forest)'
        }}
      >
        <Info size={36} color="var(--color-emerald)" style={{ marginBottom: '1rem' }} />
        <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          3D Hardware Acceleration Fallback
        </h4>
        <p style={{ maxWidth: '420px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Your browser is currently running without WebGL 3D context. The botanical photo and taxonomy dossier remain fully available.
        </p>
        <button onClick={() => setWebglError(false)} className="btn-secondary">
          Retry 3D Initialisation
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '460px',
        background: 'radial-gradient(circle at 50% 40%, #ffffff 0%, #f6f3eb 70%, #ece5d8 100%)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1.5px solid var(--color-cream-border)',
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      {/* Header Info Pill Bar */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        {/* Distinction Badge */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            borderRadius: 'var(--radius-full)',
            padding: '5px 14px',
            fontSize: '0.74rem',
            fontWeight: 700,
            color: 'var(--color-forest-deep)',
            border: '1px solid rgba(82, 140, 106, 0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Sparkles size={13} color="var(--color-emerald)" />
          <span>Procedural 3D Botanical Mesh Simulation</span>
        </div>

        {/* Live Interaction Badge */}
        <div
          style={{
            background: 'rgba(20, 53, 38, 0.88)',
            backdropFilter: 'blur(8px)',
            borderRadius: 'var(--radius-full)',
            padding: '4px 12px',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#d8f3dc',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          OrbitControls • Three.js R3F
        </div>
      </div>

      {/* Anatomy Layer Filter Tabs */}
      <div
        style={{
          position: 'absolute',
          top: '52px',
          left: '14px',
          zIndex: 10,
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap'
        }}
      >
        {anatomyLayers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActivePart(layer.id)}
            style={{
              padding: '4px 10px',
              borderRadius: '999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              background: activePart === layer.id ? 'var(--color-forest)' : 'rgba(255, 255, 255, 0.85)',
              color: activePart === layer.id ? '#ffffff' : 'var(--color-forest-deep)',
              border: '1px solid var(--color-cream-border)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {layer.label}
          </button>
        ))}
      </div>

      {/* React Three Fiber Canvas */}
      <Canvas
        camera={{ position: [0, 1.4, 3.8], fov: 46 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
        onError={() => setWebglError(true)}
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.85} color="#f0fdf4" />
        <directionalLight
          position={[6, 9, 5]}
          intensity={1.5}
          color="#fffdf0"
        />
        <directionalLight
          position={[-5, 4, -4]}
          intensity={0.65}
          color="#a7f3d0"
        />
        <pointLight position={[0, -2, 2]} intensity={0.4} color="#fef3c7" />

        {/* Interactive Suspense Plant Mesh */}
        <Suspense
          fallback={
            <Html center>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
              >
                Rendering 3D Specimen...
              </div>
            </Html>
          }
        >
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
            {renderPlantModel()}
          </Float>
        </Suspense>

        {/* Botanical Pedestal */}
        <BotanicalPedestal />

        {/* Orbit Controls */}
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={1.8}
          maxDistance={7.5}
          maxPolarAngle={Math.PI / 2 + 0.05}
          autoRotate={autoRotate}
          autoRotateSpeed={0.9}
        />
      </Canvas>

      {/* Floating Toolbar Controls */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          right: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(8px)',
          padding: '5px 8px',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          border: '1px solid var(--color-cream-border)',
          zIndex: 10
        }}
      >
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: autoRotate ? 'var(--color-sage-soft)' : 'transparent',
            color: 'var(--color-forest)',
            cursor: 'pointer'
          }}
          title={autoRotate ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
          aria-label="Toggle rotation"
        >
          {autoRotate ? <Pause size={15} /> : <Play size={15} />}
        </button>

        <button
          onClick={handleResetCamera}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            color: 'var(--color-forest)',
            cursor: 'pointer'
          }}
          title="Reset View"
          aria-label="Reset camera"
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Bottom Left Gesture Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '14px',
          fontSize: '0.72rem',
          color: 'var(--color-forest)',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(6px)',
          padding: '4px 10px',
          borderRadius: '999px',
          pointerEvents: 'none',
          border: '1px solid rgba(82, 140, 106, 0.2)'
        }}
      >
        Drag to Rotate • Scroll to Zoom • Right-click to Pan
      </div>
    </div>
  );
}
