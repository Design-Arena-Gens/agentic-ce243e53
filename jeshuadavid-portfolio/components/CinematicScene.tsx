"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type FilmShard = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
};

function FloatingShards() {
  const group = useRef<THREE.Group>(null);
  const pseudoRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  const shards = useMemo<FilmShard[]>(() => {
    const instances: FilmShard[] = [];
    for (let i = 0; i < 24; i += 1) {
      const radius = 2.4 + pseudoRandom(i * 21.37) * 1.6;
      const angle = (i / 24) * Math.PI * 2;
      const height = (pseudoRandom(i * 13.7) - 0.5) * 2.4;
      instances.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius,
        ],
        rotation: [
          pseudoRandom(i * 3.11) * Math.PI,
          pseudoRandom(i * 4.73) * Math.PI,
          pseudoRandom(i * 5.89) * Math.PI,
        ],
        scale: 0.4 + pseudoRandom(i * 7.21) * 0.8,
      });
    }
    return instances;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.12;
    group.current.children.forEach((child, index) => {
      child.position.y =
        (Math.sin(t * 0.6 + index) + Math.cos(t * 0.4 + index * 0.5)) * 0.35;
    });
  });

  return (
    <group ref={group}>
      {shards.map((shard, index) => (
        <mesh
          key={index}
          position={shard.position}
          rotation={shard.rotation}
          scale={[shard.scale * 0.9, shard.scale, shard.scale * 0.05]}
        >
          <boxGeometry args={[1, 0.2, 0.04]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? "#00D1FF" : "#0b1116"}
            emissive={index % 4 === 0 ? "#00D1FF" : "#0b1116"}
            emissiveIntensity={index % 4 === 0 ? 1.2 : 0.2}
            metalness={0.9}
            roughness={0.2}
            transparent
            opacity={0.92}
          />
        </mesh>
      ))}
    </group>
  );
}

function EditorialHalo() {
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!haloRef.current) return;
    const t = state.clock.getElapsedTime();
    haloRef.current.rotation.z = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <mesh ref={haloRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[2.5, 3.2, 128]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          color: { value: new THREE.Color("#00D1FF") },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform vec3 color;
          void main() {
            float alpha = smoothstep(1.0, 0.8, length(vUv - 0.5));
            gl_FragColor = vec4(color, alpha * 0.35);
          }
        `}
      />
    </mesh>
  );
}

function CinematicCore() {
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!coreRef.current) return;
    const t = state.clock.getElapsedTime();
    coreRef.current.rotation.x = t * 0.2;
    coreRef.current.rotation.y = t * 0.32;
  });

  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#11141a"
        metalness={0.6}
        roughness={0.15}
        emissive="#00D1FF"
        emissiveIntensity={0.75}
      />
    </mesh>
  );
}

export function CinematicScene() {
  return (
    <div className="h-[420px] w-full min-w-[320px] max-w-[520px] overflow-hidden rounded-[32px] border border-white/10 bg-black/30 shadow-[0_0_40px_rgba(0,209,255,0.25)]">
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
        <color attach="background" args={["#020406"]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[4, 6, 8]}
          intensity={1.2}
          color={"#00d1ff"}
        />
        <directionalLight position={[-5, -3, -2]} intensity={0.6} />
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <CinematicCore />
            <EditorialHalo />
            <FloatingShards />
          </group>
          <Environment preset="night" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
