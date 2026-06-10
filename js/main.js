/* ── NAV HAMBURGER ── */
const hamburger = document.querySelector('.nav-hamburger');
const navMenu   = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) navMenu.classList.remove('open');
});

/* ── PROJECT FILTERS ── */
function initProjectFilter() {
  const filters = document.querySelectorAll('.proj-filter');
  const cards   = document.querySelectorAll('.proj-card');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initProjectFilter();
});
