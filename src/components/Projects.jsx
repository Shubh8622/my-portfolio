import React from 'react';
import { useTilt } from '../hooks/useTilt.js';

export function Projects() {
  const tiltOne = useTilt();
  const tiltTwo = useTilt();
  const tiltThree = useTilt();

  return (
    <section className="section" id="projects">
      <div className="section__header">
        <p className="section__eyebrow">Projects</p>
        <h2 className="section__title">Selected work</h2>
      </div>

      <div className="grid grid--3">
        <article className="project-card tilt" ref={tiltOne}>
          <div className="project-card__badge">Featured</div>
          <h3 className="project-card__title">ARYA</h3>
          <p className="project-card__description">
            A smart personal AI assistant built to automate tasks, answer queries, and assist in daily
            workflows. Focused on real-time interaction, efficiency, and intelligent responses.
          </p>
          <div className="project-card__tags">
            <span className="pill pill--subtle">Python</span>
            <span className="pill pill--subtle">UI Design</span>
            <span className="pill pill--subtle">Performance</span>
          </div>
          <div className="project-card__links">
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </article>

        <article className="project-card tilt" ref={tiltTwo}>
          <div className="project-card__badge">Concept Project</div>
          <h3 className="project-card__title">EduConnect</h3>
          <p className="project-card__description">
            A self-initiated idea aimed at connecting students, educators, and learning resources on a
            single platform. Designed to simplify communication, access to content, and the overall
            learning experience.
          </p>
          <div className="project-card__tags">
            <span className="pill pill--subtle">Next.js</span>
            <span className="pill pill--subtle">API</span>
            <span className="pill pill--subtle">Accessibility</span>
          </div>
          <div className="project-card__links">
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </article>

        <article className="project-card tilt" ref={tiltThree}>
          <h3 className="project-card__title">E-Shop</h3>
          <p className="project-card__description">
            A full-featured e-commerce platform designed for smooth browsing, product management, and
            user-friendly shopping experiences. Built with a focus on performance, usability, and clean UI.
          </p>
          <div className="project-card__tags">
            <span className="pill pill--subtle">JavaScript</span>
            <span className="pill pill--subtle">MongoDB</span>
            <span className="pill pill--subtle">Next.js</span>
          </div>
          <div className="project-card__links">
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

