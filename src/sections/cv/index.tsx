import { motion } from "framer-motion";

function CV() {
    return (
        <section className="cv-section">
            <motion.div
                className="cv-card card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
            >
                <h2>Download My CV</h2>
                <p>Get a comprehensive overview of my experience, skills, and achievements.</p>
                <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>📄</span> Download CV (PDF)
                </motion.button>
            </motion.div>
        </section>
    )
}
export default CV
