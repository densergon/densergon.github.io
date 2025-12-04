function Navbar({ isScrolled, scrollToSection }: { isScrolled: boolean, scrollToSection: (section: string) => void }) {
    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="gradient-text">DS</span>
                </div>
                <ul className="nav-menu">
                    <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                    <li><a onClick={() => scrollToSection('education')}>Education</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
