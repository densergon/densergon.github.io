import { useTranslation } from 'react-i18next';
import type { Project } from '../../data/projects';

interface LightboxProps {
  project: Project;
  onClose: () => void;
}

const Lightbox = ({ project, onClose }: LightboxProps) => {
  const { t } = useTranslation('portfolio');

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>✕</button>
        
        <div className="lightbox-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="lightbox-details">
          <h2>{project.title}</h2>
          <div className="lightbox-tags">
            {project.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
          <p>{project.description}</p>
          
          <div className="lightbox-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t('view_project')}
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                {t('view_code')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
