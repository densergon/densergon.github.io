import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.2 },
    }),
}

function Experience() {
    const { t } = useTranslation("experience");
    return (
        <section id="experience" className="experience">
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
            <div className="timeline">
                <motion.div
                    className="timeline-item"
                    custom={0}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2024 — Present</div>
                        <h3>{t("developer")}</h3>
                        <h4>{t("penteon.company")}</h4>
                        <p>{t("penteon.short")}</p>
                        <ul>
                            <li>{t("penteon.developed1")}</li>
                            <li>{t("penteon.developed2")}</li>
                            <li>{t("penteon.developed3")}</li>
                            <li>{t("penteon.developed4")}</li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    className="timeline-item"
                    custom={1}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2021 — 2024</div>
                        <h3>{t("web_developer")}</h3>
                        <h4>{t("soltec.company")}</h4>
                        <p>{t("soltec.short")}</p>
                        <ul>
                            <li>{t("soltec.developed1")}</li>
                            <li>{t("soltec.developed2")}</li>
                            <li>{t("soltec.developed3")}</li>
                            <li>{t("soltec.developed4")}</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Experience
