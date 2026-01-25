import { useTranslation } from "react-i18next";
function Skills() {
    const { t } = useTranslation("skills");
    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2>{t('title')}</h2>
                <div className="section-divider"></div>
            </div>
            <div className="skills-grid">
                <div className="skill-category card">
                    <div className="skill-icon">💻</div>
                    <h3>{t('programming_languages')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">Swift</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">⚛️</div>
                    <h3>{t('frontend')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Vue.js</span>
                        <span className="skill-tag">Next.js</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">Tailwind</span>
                        <span className="skill-tag">React Native</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🔧</div>
                    <h3>{t('backend')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Express</span>
                        <span className="skill-tag">Flask</span>
                        <span className="skill-tag">FastAPI</span>
                        <span className="skill-tag">REST APIs</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🗄️</div>
                    <h3>{t('databases')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">Firebase</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">☁️</div>
                    <h3>{t('cloud')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">S3</span>
                        <span className="skill-tag">Linux</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🤖</div>
                    <h3>{t('emerging_tech')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">IoT</span>
                        <span className="skill-tag">Arduino</span>
                        <span className="skill-tag">Raspberry Pi</span>
                        <span className="skill-tag">ESP32</span>
                        <span className="skill-tag">ESP8266</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills