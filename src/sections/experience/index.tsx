function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="section-header">
                <h2>Professional Experience</h2>
                <div className="section-divider"></div>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2022 - Present</div>
                        <h3>Senior Systems Engineer</h3>
                        <h4>Tech Innovations Inc.</h4>
                        <p>
                            Leading development of cloud-native applications and microservices architecture.
                            Mentoring junior developers and establishing best practices for the engineering team.
                        </p>
                        <ul>
                            <li>Architected and deployed scalable microservices handling 1M+ daily requests</li>
                            <li>Reduced infrastructure costs by 40% through optimization and automation</li>
                            <li>Led team of 5 engineers in delivering critical business features</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2020 - 2022</div>
                        <h3>Full Stack Developer</h3>
                        <h4>Digital Solutions Co.</h4>
                        <p>
                            Developed and maintained full-stack web applications using modern JavaScript frameworks
                            and cloud technologies.
                        </p>
                        <ul>
                            <li>Built responsive web applications serving 100K+ users</li>
                            <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                            <li>Collaborated with cross-functional teams on product development</li>
                        </ul>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content card">
                        <div className="timeline-date">2018 - 2020</div>
                        <h3>Software Engineer</h3>
                        <h4>StartUp Ventures</h4>
                        <p>
                            Contributed to the development of innovative software solutions in a fast-paced startup environment.
                        </p>
                        <ul>
                            <li>Developed core features for the company's flagship product</li>
                            <li>Participated in agile development and sprint planning</li>
                            <li>Worked on both frontend and backend components</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience