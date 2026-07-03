import { useTranslation } from "react-i18next";
function Education() {
    const { t } = useTranslation("education");
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

    return (
        <section id="education" className="education">
            <div className="section-header">
                <h2>{t("title")}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="education-grid">
                <div className="education-card card">
                    <div className="education-icon">🎓</div>
                    <h3>{t("degree")}</h3>
                    <h4>{t("university")}</h4>
                    <h5>{t("school")}</h5>
                    <p className="education-date">{t("year")}</p>
                    <p>{t("capstone")}</p>
                </div>

                <div className="education-card card">
                    <div className="education-icon">📜</div>
                    <h3>{t("cecyt_degree")}</h3>
                    <h4>{t("university")}</h4>
                    <h5>{t("cecyt")}</h5>
                    <p className="education-date">{t("cecyt_year")}</p>
                </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-3xl)' }}>
                <div className="section-header">
                    <h3>Certifications</h3>
                    <div className="section-divider"></div>
                </div>
                <ul className="certification-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {certifications.map((cert, i) => (
                        <li key={i}>{cert} <span style={{ color: 'var(--color-text-muted)', float: 'right' }}>Google — Aug. 2021</span></li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Education
