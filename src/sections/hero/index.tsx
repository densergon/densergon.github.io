import { lazy, Suspense } from "react";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroScene = lazy(() => import("./HeroScene"));

function SceneFallback() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner" />
    </div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

function Hero({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  const { t } = useTranslation("hero");

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            {t("greeting")}
          </motion.p>
          <motion.h1 className="hero-name" variants={itemVariants}>
            {t("name")}
          </motion.h1>
          <motion.h2 className="hero-title" variants={itemVariants}>
            {t("titlea")} <br />
            <span className="hero-title-sub border-t my-1">{t("titleb")}</span>
          </motion.h2>
          <motion.p className="hero-description" variants={itemVariants}>
            {t("description")}
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("portfolio")}
            >
              {t("view-work")}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              {t("get-in-touch")}
            </button>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <Suspense fallback={<SceneFallback />}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Hero;
