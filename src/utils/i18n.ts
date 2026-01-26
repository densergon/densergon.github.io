import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import es from "../locales/es.json";

const resources = {
  en: {
    navbar: en.navbar,
    hero: en.hero,
    about: en.about,
    skills: en.skills,
    portfolio: en.portfolio,
    experience: en.experience,
    education: en.education,
    contact: en.contact,
  },
  es: {
    navbar: es.navbar,
    hero: es.hero,
    about: es.about,
    skills: es.skills,
    portfolio: es.portfolio,
    experience: es.experience,
    education: es.education,
    contact: es.contact,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;