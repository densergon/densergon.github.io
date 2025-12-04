import { useRef, Suspense, Component, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

class ErrorBoundary extends Component<{ children: ReactNode, fallback: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode, fallback: ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error("3D Viewer Error:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }

        return this.props.children
    }
}

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} scale={4} />
}

function FallbackBox() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#6366f1" wireframe />
        </mesh>
    )
}

export default function Hero3DViewer() {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <ErrorBoundary fallback={<FallbackBox />}>
                    <Suspense fallback={<FallbackBox />}>
                        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                            <Model url="/retro-computer.glb" />
                        </Float>
                    </Suspense>
                </ErrorBoundary>

                <Environment preset="city" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    )
}
