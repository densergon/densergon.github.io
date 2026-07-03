import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
    }),
}

function Contact() {
    const { t } = useTranslation("contact");
    return (
        <section id="contact" className="contact">
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
            <div className="contact-content">
                <motion.div
                    className="contact-info"
                    variants={itemVariants}
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3>{t('title')}</h3>
                    <p>{t('content')}</p>
                    <div className="contact-methods">
                        <div className="contact-method">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h4>{t('email')}</h4>
                                <a href="mailto:dan.ser-gon@outlook.com">dan.ser-gon@outlook.com</a>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="contact-icon">📱</div>
                            <div>
                                <h4>{t('phone')}</h4>
                                <a href="tel:+525564228771">+52 55 6422 8771</a>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h4>{t('location')}</h4>
                                <p>{t('location-description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-links">
                        <motion.a
                            href="https://github.com/densergon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            whileHover={{ y: -2, borderColor: 'var(--color-accent-primary)' }}
                        >
                            <FaGithub /> GitHub
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/daniel-serna-64a550205"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            whileHover={{ y: -2, borderColor: 'var(--color-accent-primary)' }}
                        >
                            <FaLinkedin /> LinkedIn
                        </motion.a>
                        <motion.a
                            href="https://twitter.com/densergon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                            whileHover={{ y: -2, borderColor: 'var(--color-accent-primary)' }}
                        >
                            <FaTwitter /> Twitter
                        </motion.a>
                    </div>
                </motion.div>

                <motion.form
                    className="contact-form card"
                    variants={itemVariants}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="form-group">
                        <label htmlFor="name">{t('name')}</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t('email')}</label>
                        <input type="email" id="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="What's this about?" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('message')}</label>
                        <textarea id="message" rows={5} placeholder="Your message..." required></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t('send-message')}
                    </motion.button>
                </motion.form>
            </div>
        </section>
    )
}
export default Contact
