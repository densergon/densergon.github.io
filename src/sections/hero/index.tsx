import Hero3DViewer from './Hero3DViewer'

function Hero({ scrollToSection }: { scrollToSection: (section: string) => void }) {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Daniel Serna</h1>
                    <h2 className="hero-title">Computing Systems Engineer</h2>
                    <p className="hero-description">
                        Passionate about building innovative solutions and transforming ideas into reality
                        through cutting-edge technology and creative problem-solving.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('portfolio')}>
                            View My Work
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className="hero-visual" style={{ width: '100%', height: '500px' }}>
                    <Hero3DViewer />
                </div>
            </div>
        </section>
    )
}
export default Hero