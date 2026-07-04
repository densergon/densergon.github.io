import { useState, useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

function AnimatedNumber({ to, suffix }: { to: number; suffix?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return
        const duration = 2000
        const start = performance.now()
        let frameId: number
        const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            setCount(Math.floor(progress * to))
            if (progress < 1) frameId = requestAnimationFrame(animate)
        }
        frameId = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(frameId)
    }, [isInView, to])

    return <span ref={ref}>{count}{suffix}</span>
}

const revealVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

function About() {
    const { t } = useTranslation("about");

    const headerRef = useRef<HTMLDivElement>(null)
    const headerInView = useInView(headerRef, { once: true, amount: 0.3 })

    const contentRef = useRef<HTMLDivElement>(null)
    const contentInView = useInView(contentRef, { once: true, amount: 0.3 })

    const dividerInView = useInView(headerRef, { once: true })

    return (
        <section id="about" className="about">
            <motion.div
                ref={headerRef}
                className="section-header"
                variants={revealVariants}
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
            >
                <h2>{t('title')}</h2>
                <motion.div
                    className="section-divider"
                    initial={{ width: 0 }}
                    animate={dividerInView ? { width: 80 } : { width: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            </motion.div>
            <motion.div
                ref={contentRef}
                className="about-content"
                variants={revealVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
            >
                <div className="about-text">
                    <p>{t('content')}</p>
                    <div className="about-stats">
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                        >
                            <h3 className="gradient-text">
                                <AnimatedNumber to={4} suffix="+" />
                            </h3>
                            <p>{t('experience')}</p>
                        </motion.div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                        >
                            <h3 className="gradient-text">
                                <AnimatedNumber to={30} suffix="+" />
                            </h3>
                            <p>{t('projects')}</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
export default About
