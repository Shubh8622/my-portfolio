import React from 'react';

export function Skills({ tabs }) {
  const { active, setActive } = tabs;

  return (
    <section className="section" id="skills">
      <div className="section__header">
        <p className="section__eyebrow">Skills &amp; Interests</p>
        <h2 className="section__title">What I work with</h2>
      </div>

      <div className="tabs" data-component="tabs">
        <div className="tabs__list" role="tablist" aria-label="Skills and interests">
          <button
            type="button"
            className={`tabs__tab ${active === 'skills' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActive('skills')}
            role="tab"
          >
            Skills
          </button>
          <button
            type="button"
            className={`tabs__tab ${active === 'interests' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActive('interests')}
            role="tab"
          >
            Interests
          </button>
          <button
            type="button"
            className={`tabs__tab ${active === 'tools' ? 'tabs__tab--active' : ''}`}
            onClick={() => setActive('tools')}
            role="tab"
          >
            Tools
          </button>
        </div>

        <div className="tabs__panels">
          <div
            className={`tabs__panel ${active === 'skills' ? 'tabs__panel--active' : ''}`}
            data-tab-panel="skills"
          >
            <div className="pill-grid">
              <div className="pill">JavaScript</div>
              <div className="pill">React / Next.js</div>
              <div className="pill">HTML &amp; Modern CSS</div>
              <div className="pill">Responsive Design</div>
              <div className="pill">Tailwind CSS</div>
              <div className="pill">MongoDB / MySQL</div>
              <div className="pill">UI / UX Collaboration</div>
              <div className="pill">Design Systems</div>
            </div>
          </div>

          <div
            className={`tabs__panel ${active === 'interests' ? 'tabs__panel--active' : ''}`}
            data-tab-panel="interests"
          >
            <div className="pill-grid">
              <div className="pill">Designing minimal interfaces</div>
              <div className="pill">Micro-interactions</div>
              <div className="pill">Creative coding</div>
              <div className="pill">Learning new frameworks</div>
              <div className="pill">Writing &amp; documentation</div>
              <div className="pill">Building small tools</div>
            </div>
          </div>

          <div
            className={`tabs__panel ${active === 'tools' ? 'tabs__panel--active' : ''}`}
            data-tab-panel="tools"
          >
            <div className="pill-grid">
              <div className="pill">VS Code / Cursor</div>
              <div className="pill">Git &amp; GitHub</div>
              <div className="pill">Figma</div>
              <div className="pill">Vite / Webpack</div>
              <div className="pill">REST / GraphQL</div>
              <div className="pill">Postman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

