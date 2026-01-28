import React from 'react';

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__header">
        <p className="section__eyebrow">About</p>
        <h2 className="section__title">A quick intro</h2>
      </div>
      <div className="grid grid--2">
        <article className="card card--glass">
          <h3>Who I am</h3>
          <p>
            I’m a developer who enjoys building real-world digital products across web, mobile apps, and
            UI/UX. I’m driven by curiosity, clean design, and the challenge of turning ideas into smooth,
            usable experiences. I believe good code should not just work — it should feel right.
          </p>
        </article>
        <article className="card card--glass">
          <h3>What I enjoy</h3>
          <p>
            Creating things from scratch, experimenting with ideas, refining UI/UX, and shipping projects
            that actually feel good to use.
          </p>
        </article>
      </div>
    </section>
  );
}

