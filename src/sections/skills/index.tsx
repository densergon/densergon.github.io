function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2>Skills & Expertise</h2>
                <div className="section-divider"></div>
            </div>
            <div className="skills-grid">
                <div className="skill-category card">
                    <div className="skill-icon">💻</div>
                    <h3>Programming Languages</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">TypeScript</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">C++</span>
                        <span className="skill-tag">Go</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">⚛️</div>
                    <h3>Frontend Development</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Vue.js</span>
                        <span className="skill-tag">Next.js</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">Tailwind</span>
                        <span className="skill-tag">Redux</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🔧</div>
                    <h3>Backend Development</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Express</span>
                        <span className="skill-tag">Django</span>
                        <span className="skill-tag">FastAPI</span>
                        <span className="skill-tag">GraphQL</span>
                        <span className="skill-tag">REST APIs</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🗄️</div>
                    <h3>Databases</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">PostgreSQL</span>
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">Redis</span>
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">Firebase</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">☁️</div>
                    <h3>Cloud & DevOps</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">AWS</span>
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">Kubernetes</span>
                        <span className="skill-tag">CI/CD</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">Linux</span>
                    </div>
                </div>

                <div className="skill-category card">
                    <div className="skill-icon">🤖</div>
                    <h3>Emerging Tech</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Machine Learning</span>
                        <span className="skill-tag">AI</span>
                        <span className="skill-tag">Blockchain</span>
                        <span className="skill-tag">IoT</span>
                        <span className="skill-tag">WebAssembly</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills