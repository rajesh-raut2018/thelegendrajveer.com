// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  if (window.scrollY > 50) {
    nav.style.padding = '0.75rem 2.5rem';
    nav.style.boxShadow = '0 1px 0 rgba(212, 201, 181, 0.5)';
  } else {
    nav.style.padding = '1.25rem 2.5rem';
    nav.style.boxShadow = 'none';
  }
});

// Newsletter form (client-side demo — captures to localStorage)
function bindNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    const subs = JSON.parse(localStorage.getItem('rajveer_subs') || '[]');
    if (!subs.includes(email)) subs.push(email);
    localStorage.setItem('rajveer_subs', JSON.stringify(subs));
    form.style.display = 'none';
    document.querySelector('.newsletter-success').style.display = 'block';
  });
}
bindNewsletter();
