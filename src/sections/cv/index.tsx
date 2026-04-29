import { useTranslation } from 'react-i18next';

const CV = () => {
  const { t } = useTranslation('cv');

  return (
    <section id="cv" className="cv-section">
      <div className="cv-card">
        <h2 className="gradient-text">{t('title')}</h2>
        <p>{t('description')}</p>
        <a 
          href="/cv/Daniel_Serna_CV.pdf" 
          download 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
          aria-label="Download Professional CV PDF"
        >
          <span>{t('download_button')}</span>
        </a>
      </div>
    </section>
  );
};

export default CV;
