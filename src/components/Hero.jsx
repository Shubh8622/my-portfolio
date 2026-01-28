import React from 'react';

export function Hero({ tiltRef }) {
  return (
    <section className="section section--hero" id="home">
      <div className="hero__content">
        <p className="hero__tag">Portfolio • 2026</p>
        <h1 className="hero__title">
          Hi, I'm <span className="accent">Shubh Khare</span>.
          <br />
          I build modern digital experiences.
        </h1>
        <p className="hero__subtitle">
          I build ideas into real products — from web and mobile apps to clean UI/UX, with a vibe-driven
          coding mindset.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
        </div>
        <div className="hero__meta">
          <div className="meta-card">
            <span className="meta-card__label">Experience</span>
            <span className="meta-card__value">Fresher</span>
          </div>
          <div className="meta-card">
            <span className="meta-card__label">Speciality</span>
            <span className="meta-card__value">Web &amp; App Development</span>
          </div>
          <div className="meta-card">
            <span className="meta-card__label">Location</span>
            <span className="meta-card__value">Lucknow</span>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero-card tilt" ref={tiltRef}>
          <div className="hero-card__avatar">
            <div className="avatar-circle">SK</div>
          </div>
          <div className="hero-card__content">
            <p className="hero-card__role">Your Role</p>
            <p className="hero-card__headline">Designing calm, vibe-coded, focused interfaces.</p>
            <div className="hero-card__stats">
              <div>
                <span className="stat__label">Projects</span>
                <span className="stat__value">10+</span>
              </div>
              <div>
                <span className="stat__label">Clients</span>
                <span className="stat__value">4+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

