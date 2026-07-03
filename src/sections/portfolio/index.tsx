import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

function Portfolio() {
    const { t } = useTranslation("portfolio");
    return (
        <section id="portfolio" className="portfolio">
            <div className="section-header">
                <h2>{t("title")}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="portfolio-grid">
                <div className="project-card card">
                    <div className="project-image">
                        <div className="project-overlay">
                            <a href="https://github.com/densergon/cryptovisual" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FaGithub /> View Project
                            </a>
                        </div>
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
                </div>
            </div>
        </section>
    )
}
export default Portfolio;
