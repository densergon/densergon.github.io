import { useTranslation } from "react-i18next";
function Education() {
    const { t } = useTranslation("education");
    return (
        <section id="education" className="education">
            <div className="section-header">
                <h2>{t("title")}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="education-grid">
                <div className="education-card card">
                    <div className="education-icon">🎓</div>
                    <h3>{t("title")}</h3>
                    <h4>{t("university")}</h4>
                    <h5>{t("school")}</h5>
                    <p className="education-date">{t("year")}</p>
                    <p>
                        Specialized in multiplatform applications, web development.
                    </p>
                </div>

                <div className="education-card card">
                    <div className="education-icon">📜</div>
                    <h3>Certifications</h3>
                    <ul className="certification-list">
                        <li>AWS Certified Solutions Architect</li>
                        <li>Google Cloud Professional Developer</li>
                        <li>Certified Kubernetes Administrator (CKA)</li>
                        <li>MongoDB Certified Developer</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Education