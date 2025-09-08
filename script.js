// Simple component include for header/footer (progressive enhancement-friendly)
(async () => {
  const slots = document.querySelectorAll('[data-include]');
  await Promise.all([...slots].map(async el => {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url, { credentials: 'same-origin' });
      if (!res.ok) throw new Error(`Failed to fetch ${url}`);
      el.outerHTML = await res.text();
    } catch (e) {
      console.warn(e);
    }
  }));

  // After header mounts, wire up nav & year
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Active link highlight
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.site-nav a, .footer-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.startsWith(href)) a.classList.add('active');
  });

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
