import { useRef, useEffect } from 'react'

const COLORS = [
    { r: 0.39, g: 0.40, b: 0.95 },
    { r: 0.55, g: 0.36, b: 0.96 },
    { r: 0.93, g: 0.28, b: 0.60 },
    { r: 0.06, g: 0.73, b: 0.51 },
]

interface Blob {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    color: { r: number; g: number; b: number }
    alpha: number
}

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            }
        }
        window.addEventListener('mousemove', handleMouse, { passive: true })
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const blobs: Blob[] = COLORS.map((color) => ({
            x: 0.2 + Math.random() * 0.6,
            y: 0.2 + Math.random() * 0.6,
            vx: (Math.random() - 0.5) * 0.001,
            vy: (Math.random() - 0.5) * 0.001,
            radius: 0.25 + Math.random() * 0.15,
            color,
            alpha: 0.12 + Math.random() * 0.08,
        }))

        const time = { value: 0 }

        const draw = () => {
            time.value += 0.003
            const w = canvas.width
            const h = canvas.height
            const mouse = mouseRef.current

            ctx.clearRect(0, 0, w, h)

            blobs.forEach((blob) => {
                blob.x += blob.vx + Math.sin(time.value + blob.radius) * 0.0005
                blob.y += blob.vy + Math.cos(time.value + blob.radius) * 0.0005

                blob.x += mouse.x * 0.002
                blob.y += mouse.y * 0.002

                if (blob.x < 0 || blob.x > 1) blob.vx *= -1
                if (blob.y < 0 || blob.y > 1) blob.vy *= -1

                const cx = w * blob.x
                const cy = h * blob.y
                const r = Math.min(w, h) * blob.radius

                const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
                const { r: red, g, b } = blob.color
                gradient.addColorStop(0, `rgba(${red * 255}, ${g * 255}, ${b * 255}, ${blob.alpha})`)
                gradient.addColorStop(0.5, `rgba(${red * 255}, ${g * 255}, ${b * 255}, ${blob.alpha * 0.6})`)
                gradient.addColorStop(1, `rgba(${red * 255}, ${g * 255}, ${b * 255}, 0)`)

                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, w, h)
            })

            animationId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )
}
