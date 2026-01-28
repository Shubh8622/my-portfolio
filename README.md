# Portfolio One-Page Site

This is a simple, modern, dark-themed one-page portfolio now built with **Vite + React**. It started as a static HTML/CSS page and has been migrated into a component-based React app so you can extend it and wire it to a backend easily.

## Structure

- `index.html` – Vite entry HTML with a `#root` div
- `package.json` – scripts and dependencies (Vite + React)
- `vite.config.js` – Vite config with React plugin
- `src/main.jsx` – React entry mounting the app
- `src/App.jsx` – top-level layout and section composition
- `src/styles.css` – colors, layout, animations, and responsiveness
- `src/components/*` – individual sections as React components
- `src/hooks/*` – small hooks for tilt and tabs behavior

## Main Sections (easily changeable)

- **Hero** – your name, role, short introduction, and call-to-action buttons.
- **About** – who you are and what you enjoy.
- **Skills & Interests** – tabbed component where you can edit:
  - Skills
  - Interests
  - Tools
- **Projects** – three project cards (you can duplicate or remove cards as needed).
- **Contact** – email button and social links.

Each card, pill, and section is a reusable component: to change content, just edit the JSX in the corresponding component under `src/components`.

## Customization Guide

- **Name / Role / City**  
  Search in `index.html` for placeholders like `Your Name`, `Your Role`, and `Your City` and replace them with your details.

- **Avatar Initials**  
  In `index.html`, change the text inside the `avatar-circle` element (default `YN`) to your initials.

- **Skills / Interests / Tools**  
  In the `Skills & Interests` section, edit the lists of `<div class="pill">...</div>` elements inside each tab panel.

- **Projects**  
  In the `Projects` section, update:
  - Project titles
  - Descriptions
  - Tags inside `.project-card__tags`
  - `href` values for "Live" and "Code" links

- **Contact Details**  
  - Change the `mailto:you@example.com` link to your email.
  - Update LinkedIn, GitHub, Twitter URLs in the `contact-links` section.

## Running the Site (Vite + React)

From the project root (`d:\Serious Projects\New folder`):

```bash
npm install
npm run dev
```

Then open the printed `http://localhost:5173` URL in your browser.

## Colors & Theme

All core colors and radii are defined as CSS variables at the top of `styles.css`. You can tweak:

- Backgrounds (`--bg-*`)
- Accent colors (`--accent`, `--accent-strong`, `--accent-gradient`)
- Text colors (`--text-*`)

This lets you quickly experiment with different modern color combinations while keeping the layout and components the same.

