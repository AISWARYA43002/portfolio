import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars, OrbitControls, Text } from '@react-three/drei'
import { useRef } from 'react'

function Core() {
  const ref = useRef()
  useFrame((_, d) => { ref.current.rotation.y += d * 0.3 })
  return (
    <Float speed={2} floatIntensity={1.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 8]} />
        <MeshDistortMaterial color="#7c5cff" distort={0.45} speed={2} roughness={0.15} metalness={0.8} />
      </mesh>
    </Float>
  )
}

function Orbit({ label, radius, speed, color }) {
  const g = useRef()
  useFrame(({ clock }) => { g.current.rotation.y = clock.elapsedTime * speed })
  return (
    <group ref={g}>
      <group position={[radius, 0, 0]}>
        <mesh><sphereGeometry args={[0.18, 24, 24]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} /></mesh>
        <Text position={[0, 0.45, 0]} fontSize={0.28} color="white">{label}</Text>
      </group>
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={80} color="#22d3ee" />
      <pointLight position={[-5, -3, 3]} intensity={60} color="#7c5cff" />
      <Stars radius={80} depth={40} count={3000} factor={4} fade speed={1} />
      <Core />
      <Orbit label="React" radius={3} speed={0.6} color="#61dafb" />
      <Orbit label="Node" radius={3.8} speed={0.45} color="#68d391" />
      <Orbit label="MongoDB" radius={4.6} speed={0.35} color="#4ade80" />
      <Orbit label="Zoho" radius={5.4} speed={0.28} color="#f87171" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}