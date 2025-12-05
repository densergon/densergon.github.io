
import { useTranslation } from "react-i18next";
function Navbar({ isScrolled, scrollToSection }: { isScrolled: boolean, scrollToSection: (section: string) => void }) {
    const { i18n, t } = useTranslation("navbar");

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="gradient-text">DS</span>
                </div>
                <ul className="nav-menu">
                    <li><a onClick={() => scrollToSection('home')}>{t('home')}</a></li>
                    <li><a onClick={() => scrollToSection('about')}>{t('about')}</a></li>
                    <li><a onClick={() => scrollToSection('skills')}>{t('skills')}</a></li>
                    <li><a onClick={() => scrollToSection('portfolio')}>{t('portfolio')}</a></li>
                    <li><a onClick={() => scrollToSection('experience')}>{t('experience')}</a></li>
                    <li><a onClick={() => scrollToSection('education')}>{t('education')}</a></li>
                    <li><a onClick={() => scrollToSection('contact')}>{t('contact')}</a></li>
                    <li>
                        <button
                            onClick={toggleLanguage}
                            aria-label="Cambiar idioma"
                        >
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
