import { useTranslation } from "react-i18next";
function Experience() {
    const { t } = useTranslation("experience");
    return (
        <section id="experience" className="experience">
            <div className="section-header">
                <h2>{t("title")}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2024 - Present</div>
                        <h3>{t("developer")}</h3>
                        <h4>Penteon</h4>
                        <p>
                            {t("penteon.short")}
                        </p>
                        <ul>
                            <li>{t("penteon.developed1")}</li>
                            <li>{t("penteon.developed2")}</li>
                            <li>{t("penteon.developed3")}</li>
                            <li>{t("penteon.developed4")}</li>
                            <li>{t("penteon.developed5")}</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2021 - 2024</div>
                        <h3>{t("web_developer")}</h3>
                        <h4>SOLTEC</h4>
                        <p>
                            {t("soltec.short")}
                        </p>
                        <ul>
                            <li>{t("soltec.developed1")}</li>
                            <li>{t("soltec.developed2")}</li>
                            <li>{t("soltec.developed3")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience