import React from 'react';

export function Education() {
  return (
    <section className="section" id="education">
      <div className="section__header">
        <p className="section__eyebrow">Education</p>
        <h2 className="section__title">Where I’m learning</h2>
        <p className="section__subtitle">
          A quick snapshot of my formal education and key highlights so far.
        </p>
      </div>

      <div className="grid grid--2">
        <article className="card card--glass">
          <h3>Bachelor in Computer Science and Engineering</h3>
          <p>
            <strong>Institution</strong>: School of Management and Technology
            <br />
            <strong>Location</strong>: Lucknow, India
            <br />
            <strong>Affiliation</strong>: AKTU Lucknow
            <br />
            <strong>Year</strong>: 2025 – Present
            <br />
            Focused on core programming, software development, databases, and modern web technologies.
          </p>
        </article>

        <article className="card card--glass">
          <h3>Diploma in Computer Science and Engineering</h3>
          <p>
            <strong>Institution</strong>: Mahamaya Polytechnic of Information &amp; Technology
            <br />
            <strong>Location</strong>: Varanasi, India
            <br />
            <strong>Affiliation</strong>: BTEUP Lucknow
            <br />
            <strong>Year</strong>: 2022 – 2025
            <br />
            Core programming | Software development | Databases | Modern web technologies
          </p>
        </article>
      </div>
    </section>
  );
}

