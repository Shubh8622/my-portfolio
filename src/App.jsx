import React from 'react';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Education } from './components/Education.jsx';
import { Contact } from './components/Contact.jsx';
import { useTilt } from './hooks/useTilt.js';
import { useTabs } from './hooks/useTabs.js';

function Layout({ children }) {


  return (
    <>
      <div className="page-background" />

      <header className="nav">
        <div className="nav__logo">
          Shubh<span>Khare</span>
        </div>

        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/Shubh_Resume.pdf"
          download="Shubh_Khare_Resume.pdf"
          className="nav__download-btn"
        >
          Download CV
        </a>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Shubh Khare. All rights reserved.</p>
      </footer>
    </>
  );
}

export default function App() {
  const tiltRef = useTilt();
  const tabs = useTabs(['skills', 'interests', 'tools'], 'skills');

  return (
    <Layout>
      <Hero tiltRef={tiltRef} />
      <About />
      <Skills tabs={tabs} />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
}

