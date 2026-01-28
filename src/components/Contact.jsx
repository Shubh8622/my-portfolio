import React from 'react';

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__header section__header--center">
        <p className="section__eyebrow">Contact</p>
        <h2 className="section__title">Let’s work together</h2>
        <p className="section__subtitle">
          Open to freelance projects, internships, full-time roles, and meaningful collaborations where I
          can learn, contribute, and build impactful products.
        </p>
      </div>

      <div className="contact-card card--glass">
        <div className="contact-card__row">
          <div>
            <h3>Start a conversation</h3>
            <p>
              I’m open to roles and collaborations that value curiosity, execution, and thoughtful product
              building.
            </p>
          </div>
          <div className="contact-card__actions">
            <a href="mailto:shubh8622@gmail.com" className="btn btn--primary">
              Email Me
            </a>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/shubh-khare-23721632b/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/shubhkhare" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

