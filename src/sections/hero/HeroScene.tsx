import { useState, useRef, useMemo, useEffect, useCallback, Suspense, memo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Particles({ count = 120 }) {
    const meshRef = useRef<THREE.Points>(null)

    const geometry = useMemo(() => {
        const positions = new Float32Array(count * 3)
        // eslint-disable-next-line react-hooks/purity -- particles need random init, intentional
        const rand = (a = 1, b = 0) => b + a * (Math.random() - 0.5)
        for (let i = 0; i < count; i++) {
            positions[i * 3] = rand(12)
            positions[i * 3 + 1] = rand(8)
            positions[i * 3 + 2] = rand(6)
        }
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        return geo
    }, [count])

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.03
        }
    })

    return (
        <points ref={meshRef} geometry={geometry}>
            <pointsMaterial
                size={0.04}
                color="#6366f1"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    )
}

const SHAPE_CONFIGS = [
    { ctor: THREE.IcosahedronGeometry, args: [1.1, 0] as const, color: '#6366f1', position: [-1.8, 0.6, 0] as const, scale: 1 },
    { ctor: THREE.TorusKnotGeometry, args: [0.8, 0.3, 100, 16] as const, color: '#8b5cf6', position: [1.6, -0.4, 0.5] as const, scale: 1 },
    { ctor: THREE.OctahedronGeometry, args: [0.9, 0] as const, color: '#ec4899', position: [2.4, 1.2, -0.8] as const, scale: 0.8 },
    { ctor: THREE.TetrahedronGeometry, args: [1, 0] as const, color: '#10b981', position: [-2.2, -0.8, -0.5] as const, scale: 0.7 },
    { ctor: THREE.DodecahedronGeometry, args: [0.7, 0] as const, color: '#f59e0b', position: [0, 1.8, -1] as const, scale: 0.6 },
]

function FloatMesh({ config, index }: { config: typeof SHAPE_CONFIGS[number]; index: number }) {
    const geometry = useMemo(() => new config.ctor(...config.args), [config.ctor, config.args])

    return (
        <Float speed={1.5 + index * 0.3} rotationIntensity={0.6 + index * 0.1} floatIntensity={0.8 + index * 0.2}>
            <mesh geometry={geometry} position={config.position} scale={config.scale}>
                <MeshDistortMaterial
                    color={config.color}
                    emissive={config.color}
                    emissiveIntensity={0.15}
                    roughness={0.3}
                    metalness={0.7}
                    distort={0.2 + index * 0.05}
                    speed={1.5 + index * 0.3}
                />
            </mesh>
        </Float>
    )
}

function Shapes() {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15
        }
    })

    return (
        <group ref={groupRef}>
            {SHAPE_CONFIGS.map((config, i) => (
                <FloatMesh key={i} config={config} index={i} />
            ))}
        </group>
    )
}

function ReadySignal({ onReady }: { onReady: () => void }) {
    useEffect(() => { onReady() }, [onReady])
    return null
}

function SceneInner({ onReady }: { onReady: () => void }) {
    return (
        <>
            <Shapes />
            <Particles count={150} />
            <Environment preset="city" />
            <ReadySignal onReady={onReady} />
        </>
    )
}

const HeroScene = memo(function HeroScene() {
    const [ready, setReady] = useState(false)
    const handleReady = useCallback(() => setReady(true), [])

    return (
        <div style={{
            width: '100%',
            height: '100%',
            minHeight: '250px',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.8s ease',
            willChange: 'opacity',
        }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                style={{ background: 'transparent' }}
                gl={{ alpha: true }}
            >
                <ambientLight intensity={0.4} />
                <spotLight position={[8, 8, 8]} angle={0.2} penumbra={1} intensity={0.8} />
                <pointLight position={[-6, -4, -6]} intensity={0.4} color="#8b5cf6" />

                <Suspense fallback={null}>
                    <SceneInner onReady={handleReady} />
                </Suspense>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
})

export default HeroScene
