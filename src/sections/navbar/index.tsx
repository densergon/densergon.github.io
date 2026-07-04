import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'education', 'contact'] as const;

function Navbar({ isScrolled, activeSection, scrollToSection }: { isScrolled: boolean, activeSection: string, scrollToSection: (section: string) => void }) {
    const { i18n, t } = useTranslation("navbar");
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const toggleSidebar = () => setIsOpen(!isOpen);

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

                <ul className="nav-menu desktop-menu">
                    {sections.map(s => (
                        <li key={s}>
                            <a
                                className={activeSection === s ? 'active' : ''}
                                onClick={() => scrollToSection(s)}
                            >
                                {t(s)}
                                <AnimatePresence mode="popLayout">
                                    {activeSection === s && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="nav-underline"
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            exit={{ opacity: 0, scaleX: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </AnimatePresence>
                            </a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleLanguage} aria-label="Cambiar idioma">
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </button>
                    </li>
                </ul>

                <button
                    className={`hamburger-btn ${isOpen ? 'open' : ''}`}
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(false)}
                />

                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <ul className="sidebar-menu">
                        {sections.map(s => (
                            <li key={s}>
                                <a
                                    className={activeSection === s ? 'active' : ''}
                                    onClick={() => handleLinkClick(s)}
                                >
                                    {t(s)}
                                    <AnimatePresence mode="popLayout">
                                        {activeSection === s && (
                                            <motion.div
                                                layoutId="sidebar-underline"
                                                className="sidebar-underline"
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                exit={{ opacity: 0, scaleX: 0 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </a>
                            </li>
                        ))}
                        <li>
                            <button onClick={toggleLanguage} aria-label="Cambiar idioma">
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
