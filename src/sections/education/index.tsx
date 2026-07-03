import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.15 },
    }),
}

const certVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut", delay: i * 0.05 },
    }),
}

const certifications = [
    "Google Cloud Essentials",
    "Implementing Cloud Load Balancing for Compute Engine",
    "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    "Set Up an App Dev Environment on Google Cloud",
    "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
    "Build a Secure Google Cloud Network",
    "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
    "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
];

function Education() {
    const { t } = useTranslation("education");
    return (
        <section id="education" className="education">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2>{t("title")}</h2>
                <motion.div
                    className="section-divider"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                />
            </motion.div>
            <div className="education-grid">
                <motion.div
                    className="education-card card"
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="education-icon">🎓</div>
                    <h3>{t("degree")}</h3>
                    <h4>{t("university")}</h4>
                    <h5>{t("school")}</h5>
                    <p className="education-date">{t("year")}</p>
                    <p>{t("capstone")}</p>
                </motion.div>

                <motion.div
                    className="education-card card"
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="education-icon">📜</div>
                    <h3>{t("cecyt_degree")}</h3>
                    <h4>{t("university")}</h4>
                    <h5>{t("cecyt")}</h5>
                    <p className="education-date">{t("cecyt_year")}</p>
                </motion.div>
            </div>

            <motion.div
                style={{ marginTop: 'var(--spacing-3xl)' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
                <div className="section-header">
                    <h3>Certifications</h3>
                    <motion.div
                        className="section-divider"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    />
                </div>
                <ul className="certification-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {certifications.map((cert, i) => (
                        <motion.li
                            key={cert}
                            custom={i}
                            variants={certVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                x: 5,
                            }}
                        >
                            {cert} <span style={{ color: 'var(--color-text-muted)', float: 'right' }}>Google — Aug. 2021</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    )
}
export default Education
