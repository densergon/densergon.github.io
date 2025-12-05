import { useTranslation } from "react-i18next";
function About() {
    const { t } = useTranslation("about");
    return (
        <section id="about" className="about">
            <div className="section-header">
                <h2>{t('title')}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        {t('content')}
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3 className="gradient-text">5+</h3>
                            <p>{t('experience')}</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="gradient-text">30+</h3>
                            <p>{t('projects')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
