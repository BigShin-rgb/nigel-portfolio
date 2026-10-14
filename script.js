
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');button.classList.add('active');const category=button.dataset.filter;document.querySelectorAll('.category-grid .project').forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category})}));

// Subtle pointer light
const glow = document.querySelector('.cursor-glow');
if (glow && !window.matchMedia('(pointer: coarse)').matches) {
  window.addEventListener('pointermove', event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

// Reveal page sections as they enter the viewport
const revealTargets = document.querySelectorAll('.hero, .section-head, .filters, .project, .about-grid, .contact-top');
revealTargets.forEach((element, index) => {
  element.dataset.reveal = '';
  if (element.classList.contains('project')) element.style.transitionDelay = `${(index % 4) * 70}ms`;
});
if ('IntersectionObserver' in window) {
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(element => revealObserver.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add('is-visible'));
}

