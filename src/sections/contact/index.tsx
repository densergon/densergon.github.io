import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
    const { t } = useTranslation("contact");
    return (
        <section id="contact" className="contact">
            <div className="section-header">
                <h2>{t('title')}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>{t('title')}</h3>
                    <p>
                        {t('content')}
                    </p>
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
                        <a href="https://github.com/densergon" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/daniel-serna-64a550205" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://twitter.com/densergon" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <FaTwitter /> Twitter
                        </a>
                    </div>
                </div>

                <form className="contact-form card">
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
                    <button type="submit" className="btn btn-primary">{t('send-message')}</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
