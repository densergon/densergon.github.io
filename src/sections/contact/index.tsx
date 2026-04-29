import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
      const response = await fetch('https://formspree.io/f/xABCDEFG', { // Replace with actual ID
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="gradient-text">{t('title')}</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p>
            Feel free to reach out if you have any questions, want to collaborate, or just want to say hi!
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:daniel.serna@email.com">daniel.serna@email.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+521234567890">+52 1 234 567 890</a>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/densergon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit GitHub Profile">GitHub</a>
            <a href="https://linkedin.com/in/densergon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit LinkedIn Profile">LinkedIn</a>
            <a href="https://twitter.com/densergon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Visit Twitter Profile">Twitter</a>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t('name')}</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{t('message')}</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : t('send-message')}
            </button>
            
            {status === 'success' && <p className="text-center" style={{ color: 'var(--color-accent-primary)', marginTop: 'var(--spacing-md)' }}>{t('success')}</p>}
            {status === 'error' && <p className="text-center" style={{ color: 'var(--color-accent-tertiary)', marginTop: 'var(--spacing-md)' }}>{t('error')}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
