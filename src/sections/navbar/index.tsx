import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar({ isScrolled, scrollToSection }: { isScrolled: boolean, scrollToSection: (section: string) => void }) {
    const { i18n, t } = useTranslation("navbar");
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (section: string) => {
        scrollToSection(section);
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="gradient-text">DS</span>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-menu desktop-menu">
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')} onClick={() => scrollToSection('home')}>{t('home')}</a></li>
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('about')} onClick={() => scrollToSection('about')}>{t('about')}</a></li>
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('skills')} onClick={() => scrollToSection('skills')}>{t('skills')}</a></li>
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('portfolio')} onClick={() => scrollToSection('portfolio')}>{t('portfolio')}</a></li>
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('experience')} onClick={() => scrollToSection('experience')}>{t('experience')}</a></li>
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('education')} onClick={() => scrollToSection('education')}>{t('education')}</a></li>
                        <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('contact')} onClick={() => scrollToSection('contact')}>{t('contact')}</a></li>

                    <li>
                                <button
                                    onClick={toggleLanguage}
                                    aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                                >
                                    {i18n.language === 'es' ? 'EN' : 'ES'}
                                </button>

                    </li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className={`hamburger-btn ${isOpen ? 'open' : ''}`}
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Sidebar Overlay */}
                <div
                    className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Mobile Sidebar */}
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <ul className="sidebar-menu">
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('home')} onClick={() => handleLinkClick('home')}>{t('home')}</a></li>
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('about')} onClick={() => handleLinkClick('about')}>{t('about')}</a></li>
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('skills')} onClick={() => handleLinkClick('skills')}>{t('skills')}</a></li>
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('portfolio')} onClick={() => handleLinkClick('portfolio')}>{t('portfolio')}</a></li>
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('experience')} onClick={() => handleLinkClick('experience')}>{t('experience')}</a></li>
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('education')} onClick={() => handleLinkClick('education')}>{t('education')}</a></li>
                            <li><a tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleLinkClick('contact')} onClick={() => handleLinkClick('contact')}>{t('contact')}</a></li>

                        <li>
                                <button
                                    onClick={toggleLanguage}
                                    aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                                >
                                    {i18n.language === 'es' ? 'EN' : 'ES'}
                                </button>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
