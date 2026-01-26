import { useTranslation } from "react-i18next";

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
                                <a href="mailto:daniel.serna@email.com">daniel.serna@email.com</a>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="contact-icon">📱</div>
                            <div>
                                <h4>{t('phone')}</h4>
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
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
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            Twitter
                        </a>
                    </div>
                </div>

                <form className="contact-form card">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="What's this about?" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={5} placeholder="Your message..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
