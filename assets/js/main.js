// Mobile Nav
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Lightbox für Galerie
document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
  item.addEventListener('click', () => {
    const lb  = document.getElementById('lightbox');
    const img = lb.querySelector('img');
    if (lb && img) {
      img.src = item.dataset.src;
      img.alt = item.dataset.caption || '';
      lb.classList.add('open');
    }
  });
});

const lb = document.getElementById('lightbox');
if (lb) {
  lb.querySelector('.lightbox__close')?.addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
}
