function Education() {
    return (
        <section id="education" className="education">
            <div className="section-header">
                <h2>Education</h2>
                <div className="section-divider"></div>
            </div>
            <div className="education-grid">
                <div className="education-card card">
                    <div className="education-icon">🎓</div>
                    <h3>Bachelor of Science in Computing Systems Engineering</h3>
                    <h4>University of Technology</h4>
                    <p className="education-date">2014 - 2018</p>
                    <p>
                        Graduated with honors. Specialized in software engineering, distributed systems,
                        and artificial intelligence. Completed capstone project on machine learning applications.
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