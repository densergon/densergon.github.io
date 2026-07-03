import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

function Portfolio() {
    const { t } = useTranslation("portfolio");
    return (
        <section id="portfolio" className="portfolio">
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
            <div className="portfolio-grid">
                <motion.div
                    className="project-card card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="project-image">
                        <motion.div
                            className="project-overlay"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        >
                            <a
                                href="https://github.com/densergon/cryptovisual"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <FaGithub /> View Project
                            </a>
                        </motion.div>
                    </div>
                    <div className="project-info">
                        <h3>CryptoVisual</h3>
                        <p>Interactive cryptographic education platform demonstrating hybrid encryption (RSA + AES + TLS handshake) through animated visualizations and a 6-step wizard.</p>
                        <div className="project-tags">
                            <span>React 19</span>
                            <span>TanStack Start</span>
                            <span>PixiJS</span>
                            <span>XState</span>
                            <span>NestJS</span>
                            <span>Prisma</span>
                            <span>WebSockets</span>
                            <span>PWA</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Portfolio;
