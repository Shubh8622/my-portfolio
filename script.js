// Simple theme toggle (dark is default, but you can expand this later)
const body = document.body;
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('theme-alt');
  });
}

// Tabs component logic (skills / interests / tools)
document.querySelectorAll('[data-component="tabs"]').forEach((tabsRoot) => {
  const tabButtons = tabsRoot.querySelectorAll('.tabs__tab');
  const tabPanels = tabsRoot.querySelectorAll('.tabs__panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      if (!target) return;

      tabButtons.forEach((b) => b.classList.remove('tabs__tab--active'));
      btn.classList.add('tabs__tab--active');

      tabPanels.forEach((panel) => {
        panel.classList.toggle(
          'tabs__panel--active',
          panel.getAttribute('data-tab-panel') === target,
        );
      });
    });
  });
});

// Soft parallax "tilt" effect for cards
const tiltElements = document.querySelectorAll('.tilt');

tiltElements.forEach((el) => {
  const height = el.clientHeight;
  const width = el.clientWidth;

  const handleMove = (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - width / 2) / width) * 10;
    const rotateX = ((height / 2 - y) / height) * 10;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    el.classList.add('is-tilting');
  };

  const reset = () => {
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    el.classList.remove('is-tilting');
  };

  el.addEventListener('mousemove', handleMove);
  el.addEventListener('mouseleave', reset);
});

// Auto-update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

