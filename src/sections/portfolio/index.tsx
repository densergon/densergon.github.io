import { useTranslation } from "react-i18next";
function Portfolio() {
    const { t } = useTranslation("portfolio");
    return (
        <section id="portfolio" className="portfolio">
            <div className="section-header">
                <h2>{t("title")}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="portfolio-grid">

                {/* <div className="project-card card">
                    <div className="project-image">
                        <div className="project-overlay">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>E-Commerce Platform</h3>
                        <p>Full-stack e-commerce solution with real-time inventory management and payment processing.</p>
                        <div className="project-tags">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

    )
}
export default Portfolio;