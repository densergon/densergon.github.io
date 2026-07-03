import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next';

const Hero3DViewer = lazy(() => import('./Hero3DViewer'))

function HeroFallback() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="spinner" />
        </div>
    )
}

function Hero({ scrollToSection }: { scrollToSection: (section: string) => void }) {
    const { t } = useTranslation("hero");

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">{t("greeting")}</p>
                    <h1 className="hero-name">{t("name")}</h1>
                    <h2 className="hero-title">{t("title")}</h2>
                    <p className="hero-description">
                        {t("description")}
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('portfolio')}>
                            {t("view-work")}
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            {t("get-in-touch")}
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <Suspense fallback={<HeroFallback />}>
                        <Hero3DViewer />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default Hero
