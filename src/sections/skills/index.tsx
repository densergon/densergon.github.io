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
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Java</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">⚛️</div>
                    <h3>{t('frontend')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Next.js</span>
                        <span className="skill-tag">Vue 3</span>
                        <span className="skill-tag">React Native</span>
                        <span className="skill-tag">Framer Motion</span>
                        <span className="skill-tag">PixiJS</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🔧</div>
                    <h3>{t('backend')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">NestJS</span>
                        <span className="skill-tag">FastAPI</span>
                        <span className="skill-tag">REST APIs</span>
                        <span className="skill-tag">WebSockets</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🗄️</div>
                    <h3>{t('databases')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">Firebase</span>
                        <span className="skill-tag">Prisma ORM</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">☁️</div>
                    <h3>{t('cloud')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">Linux</span>
                        <span className="skill-tag">AWS S3</span>
                        <span className="skill-tag">Google Cloud</span>
                        <span className="skill-tag">CI/CD</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🤖</div>
                    <h3>{t('emerging_tech')}</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">IoT / MQTT</span>
                        <span className="skill-tag">Web Workers</span>
                        <span className="skill-tag">PWA</span>
                        <span className="skill-tag">Biometric Auth</span>
                        <span className="skill-tag">AI / LLM</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills
