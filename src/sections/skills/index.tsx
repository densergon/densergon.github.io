import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
    }),
}

const tagVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 + i * 0.04 },
    }),
}

const categories = [
    {
        icon: '💻', key: 'programming_languages',
        tags: ['TypeScript', 'JavaScript', 'Python', 'Java'],
    },
    {
        icon: '⚛️', key: 'frontend',
        tags: ['React', 'Next.js', 'Vue 3', 'React Native', 'Framer Motion', 'PixiJS'],
    },
    {
        icon: '🔧', key: 'backend',
        tags: ['Node.js', 'NestJS', 'FastAPI', 'REST APIs', 'WebSockets'],
    },
    {
        icon: '🗄️', key: 'databases',
        tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Prisma ORM'],
    },
    {
        icon: '☁️', key: 'cloud',
        tags: ['Docker', 'Linux', 'AWS S3', 'Google Cloud', 'CI/CD'],
    },
    {
        icon: '🤖', key: 'emerging_tech',
        tags: ['IoT / MQTT', 'Web Workers', 'PWA', 'Biometric Auth', 'AI / LLM'],
    },
]

function Skills() {
    const { t } = useTranslation("skills");
    return (
        <section id="skills" className="skills">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2>{t('title')}</h2>
                <motion.div
                    className="section-divider"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                />
            </motion.div>
            <div className="skills-grid">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.key}
                        className="skill-category card"
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="skill-icon">{cat.icon}</div>
                        <h3>{t(cat.key)}</h3>
                        <div className="skill-tags">
                            {cat.tags.map((tag, j) => (
                                <motion.span
                                    key={tag}
                                    className="skill-tag"
                                    custom={j}
                                    variants={tagVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -2,
                                        borderColor: 'var(--color-accent-primary)',
                                        backgroundColor: 'rgba(99, 102, 241, 0.2)',
                                    }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
export default Skills
