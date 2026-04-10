import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Torus, Stars } from '@react-three/drei'
import styles from './Avatar3D.module.css'

function CoreSphere() {
  const outerRef = useRef()
  const innerRef = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    outerRef.current.rotation.y = t * 0.12
    outerRef.current.rotation.z = Math.sin(t * 0.4) * 0.08
    innerRef.current.rotation.y = -t * 0.2
  })
  return (
    <group>
      <Sphere ref={outerRef} args={[1.1, 64, 64]}>
        <MeshDistortMaterial color="#C4A8FF" distort={0.38} speed={1.8} roughness={0.12} metalness={0.4} transparent opacity={0.88} emissive="#7040FF" emissiveIntensity={0.35} />
      </Sphere>
      <Sphere ref={innerRef} args={[0.75, 32, 32]}>
        <meshStandardMaterial color="#FFB09A" roughness={0.2} metalness={0.6} emissive="#FF6840" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  )
}

function OrbitalRings() {
  const r1 = useRef(), r2 = useRef(), r3 = useRef()
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    r1.current.rotation.x = t * 0.4
    r1.current.rotation.y = t * 0.2
    r2.current.rotation.z = t * 0.3
    r2.current.rotation.x = Math.PI / 3 + t * 0.15
    r3.current.rotation.y = t * 0.5
    r3.current.rotation.z = Math.PI / 4
  })
  return (
    <group>
      <Torus ref={r1} args={[1.8, 0.025, 16, 100]}>
        <meshStandardMaterial color="#C4A8FF" roughness={0.1} metalness={0.8} transparent opacity={0.55} emissive="#9060FF" emissiveIntensity={0.3} />
      </Torus>
      <Torus ref={r2} args={[2.2, 0.018, 16, 100]}>
        <meshStandardMaterial color="#FFB09A" roughness={0.1} metalness={0.8} transparent opacity={0.4} emissive="#FF7050" emissiveIntensity={0.2} />
      </Torus>
      <Torus ref={r3} args={[2.6, 0.012, 16, 100]}>
        <meshStandardMaterial color="#7EDDFF" roughness={0.1} metalness={0.8} transparent opacity={0.3} emissive="#40B0FF" emissiveIntensity={0.2} />
      </Torus>
    </group>
  )
}

function OrbitingDots() {
  const dotsData = [
    { radius: 1.85, angle: 0, color: '#72FFCB', size: 0.07, speed: 0.9 },
    { radius: 2.2, angle: 2.1, color: '#FF7EB3', size: 0.055, speed: -0.6 },
    { radius: 1.65, angle: 4.2, color: '#FFD580', size: 0.065, speed: 1.2 },
    { radius: 2.5, angle: 1.0, color: '#C4A8FF', size: 0.05, speed: 0.7 },
    { radius: 1.9, angle: 3.5, color: '#7EDDFF', size: 0.06, speed: -0.85 },
  ]
  const refs = dotsData.map(() => useRef())
  useFrame((s) => {
    const t = s.clock.getElapsedTime()
    dotsData.forEach((d, i) => {
      const angle = d.angle + t * d.speed * 0.5
      const tiltY = i % 2 === 0 ? 0.4 : -0.3
      if (refs[i].current) {
        refs[i].current.position.set(
          Math.cos(angle) * d.radius,
          Math.sin(angle * 0.7) * tiltY,
          Math.sin(angle) * d.radius
        )
      }
    })
  })
  return (
    <group>
      {dotsData.map((d, i) => (
        <Sphere key={i} ref={refs[i]} args={[d.size, 16, 16]}>
          <meshStandardMaterial color={d.color} emissive={d.color} emissiveIntensity={0.8} roughness={0.1} metalness={0.5} />
        </Sphere>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} color="#C4A8FF" />
      <pointLight position={[4, 4, 4]} intensity={2} color="#C4A8FF" />
      <pointLight position={[-4, -2, -4]} intensity={1.5} color="#FFB09A" />
      <pointLight position={[0, 4, -4]} intensity={1} color="#7EDDFF" />
      <Stars radius={40} depth={30} count={500} factor={2} saturation={0.5} fade speed={0.5} />
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <CoreSphere />
        <OrbitalRings />
        <OrbitingDots />
      </Float>
    </>
  )
}

export default function Avatar3D({ photoUrl, hasPhoto }) {
  return (
    <div className={styles.avatarWrap}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className={styles.photoOverlay}>
        {hasPhoto && photoUrl ? (
          <img src={photoUrl} alt="Shristi Choudhary" className={styles.photo} />
        ) : (
          <div className={styles.monogram}>SC</div>
        )}
      </div>
      <div className={styles.glowBackdrop} />
    </div>
  )
}
