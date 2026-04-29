import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import Lightbox from './Lightbox';
import './PortfolioStyles.css';

const Portfolio = () => {
  const { t } = useTranslation('portfolio');
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'system', 'ai'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-header">
        <h2 className="gradient-text">{t('title')}</h2>
        <div className="section-divider"></div>
      </div>

      <div className="portfolio-filters">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {t(`filters.${cat}`)}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="portfolio-masonry">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <span className="view-btn">{t('view_project')}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">{t('no_projects')}</p>
      )}

      {selectedProject && (
        <Lightbox 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;
