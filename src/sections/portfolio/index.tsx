function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="section-header">
                <h2>Featured Projects</h2>
                <div className="section-divider"></div>
            </div>
            <div className="portfolio-grid">
                <div className="project-card card">
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
                </div>

                <div className="project-card card">
                    <div className="project-image">
                        <div className="project-overlay">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>AI Analytics Dashboard</h3>
                        <p>Machine learning powered analytics platform for business intelligence and data visualization.</p>
                        <div className="project-tags">
                            <span>Python</span>
                            <span>TensorFlow</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>

                <div className="project-card card">
                    <div className="project-image">
                        <div className="project-overlay">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Cloud Infrastructure Manager</h3>
                        <p>DevOps tool for managing multi-cloud infrastructure with automated deployment pipelines.</p>
                        <div className="project-tags">
                            <span>Go</span>
                            <span>Kubernetes</span>
                            <span>AWS</span>
                        </div>
                    </div>
                </div>

                <div className="project-card card">
                    <div className="project-image">
                        <div className="project-overlay">
                            <button className="btn btn-primary">View Project</button>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Real-Time Collaboration Tool</h3>
                        <p>WebSocket-based collaboration platform with live editing and video conferencing capabilities.</p>
                        <div className="project-tags">
                            <span>TypeScript</span>
                            <span>WebRTC</span>
                            <span>Redis</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Portfolio;