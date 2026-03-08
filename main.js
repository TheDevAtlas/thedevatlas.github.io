'use strict';

// ─── Dropdown click toggle (for mobile + accessibility) ──────────────────────
(function () {
  const wrapper = document.querySelector('.logo-wrapper');
  const btn     = document.querySelector('.logo-btn');
  if (!wrapper || !btn) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    wrapper.classList.toggle('is-open');
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove('is-open');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') wrapper.classList.remove('is-open');
  });

  // On desktop, clear is-open when mouse leaves (prevents stale state after hover)
  wrapper.addEventListener('mouseleave', () => {
    wrapper.classList.remove('is-open');
  });
})();

// ─── Sync BTA height → CSS var so hero content/controls avoid the BTA strip ──
(function () {
  const fold = document.querySelector('.fold');
  const bta  = document.querySelector('.bta');
  if (!fold || !bta) return;
  function syncBtaH() {
    fold.style.setProperty('--bta-h', bta.offsetHeight + 'px');
  }
  syncBtaH();
  window.addEventListener('resize', syncBtaH, { passive: true });
})();

// ─── Header scroll transparency ───────────────────────────────────────────────
const siteHeader = document.getElementById('site-header');

function updateHeader() {
  if (window.scrollY > 0) {
    siteHeader.classList.add('is-scrolled');
  } else {
    siteHeader.classList.remove('is-scrolled');
  }
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// ─── Hero Carousel ────────────────────────────────────────────────────────────
(function () {
  const slides   = Array.from(document.querySelectorAll('.hc-slide'));
  const dots     = Array.from(document.querySelectorAll('.hc-dot'));
  const fills    = dots.map(d => d.querySelector('.hc-dot-fill'));
  const pauseBtn = document.getElementById('hc-pause-btn');
  const DURATION = 8000; // ms per slide

  let current = 0;
  let paused  = false;
  let startTs = null;
  let elapsed = 0;
  let rafId   = null;

  // Restart the CSS zoom-in animation on the slide's bg image
  function triggerImageAnim(index) {
    const img = slides[index].querySelector('.hc-bg-img');
    img.classList.remove('is-animating');
    void img.offsetWidth; // force reflow so animation restarts
    img.classList.add('is-animating');
  }

  function goTo(index) {
    slides[current].classList.remove('hc-slide--active');
    dots[current].classList.remove('hc-dot--active');
    fills[current].style.width = '0%';

    current = index;
    slides[current].classList.add('hc-slide--active');
    dots[current].classList.add('hc-dot--active');
    triggerImageAnim(current);

    elapsed = 0;
    startTs = null;
  }

  function tick(ts) {
    if (paused) return;
    // Resume from wherever we left off by offsetting startTs by elapsed
    if (startTs === null) startTs = ts - elapsed;
    elapsed = ts - startTs;

    fills[current].style.width = Math.min(elapsed / DURATION, 1) * 100 + '%';

    if (elapsed >= DURATION) {
      goTo((current + 1) % slides.length);
    }

    rafId = requestAnimationFrame(tick);
  }

  // Pause / play toggle
  pauseBtn.addEventListener('click', () => {
    if (paused) {
      paused = false;
      pauseBtn.classList.remove('is-paused');
      pauseBtn.setAttribute('aria-label', 'Pause carousel');
      rafId = requestAnimationFrame(tick);
    } else {
      paused = true;
      pauseBtn.classList.add('is-paused');
      pauseBtn.setAttribute('aria-label', 'Play carousel');
      if (rafId) cancelAnimationFrame(rafId);
    }
  });

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (rafId) cancelAnimationFrame(rafId);
      goTo(i);
      if (!paused) rafId = requestAnimationFrame(tick);
    });
  });

  // Kick off
  triggerImageAnim(0);
  rafId = requestAnimationFrame(tick);
})();

// ─── By TheDevAtlas Carousel ──────────────────────────────────────────────────
(function () {
  const track   = document.getElementById('bta-track');
  const prevBtn = document.getElementById('bta-prev');
  const nextBtn = document.getElementById('bta-next');
  if (!track) return;

  const VIDEO_IDS = [
    'aNPiar2bCW4',
    'pVdY2veQoK4',
    'PwXL2unlPsQ',
    'XdJJt1hiJI8',
    'F9z24XEOPYU',
    'PXHKejwjrIw',
    'BKEaG7PdiaA',
    'XZ1t62T36xE',
    '2JJBUWjpU3U',
  ];

  const viewport = track.parentElement;

  function singleCardW() {
    const card = track.querySelector('.bta-card:not(.bta-card--more)');
    if (!card) return 220;
    return card.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 14);
  }

  function maxOffset() {
    return Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  }

  function updateButtons() {
    const sl = viewport.scrollLeft;
    prevBtn.disabled = sl <= 1;
    nextBtn.disabled = sl >= maxOffset() - 1;
  }

  function moveTo(target) {
    viewport.scrollTo({ left: Math.max(0, Math.min(target, maxOffset())), behavior: 'smooth' });
  }

  viewport.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons, { passive: true });

  prevBtn.addEventListener('click', () => {
    const cw = singleCardW();
    const visible = Math.max(1, Math.floor(viewport.clientWidth / cw));
    const step = Math.max(1, visible - 1) * cw;
    moveTo(Math.floor((viewport.scrollLeft - step) / cw) * cw);
  });

  nextBtn.addEventListener('click', () => {
    const cw = singleCardW();
    const viewportW = viewport.clientWidth;
    const visible = Math.max(1, Math.floor(viewportW / cw));
    const step = Math.max(1, visible - 1) * cw;
    const n = Math.ceil((viewport.scrollLeft + step + viewportW) / cw);
    moveTo(n * cw - viewportW);
  });

  // Prevent native image-drag from stealing the pointer mid-swipe
  viewport.addEventListener('dragstart', e => e.preventDefault());

  // ── Mouse drag (desktop swipe) ────────────────────────────────────────────
  let dragStartX    = null;
  let dragStartLeft = 0;
  let hasDragged    = false;

  viewport.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    dragStartX    = e.clientX;
    dragStartLeft = viewport.scrollLeft;
    hasDragged    = false;
    viewport.setPointerCapture(e.pointerId);
    viewport.classList.add('is-dragging');
  });

  viewport.addEventListener('pointermove', e => {
    if (dragStartX === null || e.pointerType !== 'mouse') return;
    const dx = dragStartX - e.clientX;
    if (Math.abs(dx) > 4) hasDragged = true;
    viewport.scrollLeft = dragStartLeft + dx;
  });

  function animateSnapTo(target) {
    const from     = viewport.scrollLeft;
    const distance = target - from;
    if (Math.abs(distance) < 1) { viewport.classList.remove('is-dragging'); return; }
    const duration = 600;
    const start    = performance.now();
    function step(now) {
      const t    = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
      viewport.scrollLeft = from + distance * ease;
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        viewport.scrollLeft = target;
        viewport.classList.remove('is-dragging'); // re-enable CSS snap only after we're done
      }
    }
    requestAnimationFrame(step);
  }

  viewport.addEventListener('pointerup', e => {
    if (e.pointerType !== 'mouse') return;
    dragStartX = null;
    if (hasDragged) {
      const cw     = singleCardW();
      const target = Math.round(viewport.scrollLeft / cw) * cw;
      animateSnapTo(target); // keeps is-dragging until animation completes
    } else {
      viewport.classList.remove('is-dragging');
    }
  });

  viewport.addEventListener('pointercancel', () => {
    dragStartX = null;
    viewport.classList.remove('is-dragging');
  });

  // Prevent card link navigation after a drag
  viewport.addEventListener('click', e => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildCard(id, title) {
    const a = document.createElement('a');
    a.className = 'bta-card';
    a.href = `https://www.youtube.com/watch?v=${id}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    const safeTitle = escapeHtml(title || 'Untitled');
    a.innerHTML =
      `<div class="bta-thumb"><img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="${safeTitle}" loading="lazy" draggable="false" /></div>` +
      `<p class="bta-vtitle">${safeTitle}</p>`;
    return a;
  }

  // Stash the "more" card, clear the track, then re-append it
  const moreCard = track.querySelector('.bta-card--more');
  track.innerHTML = '';
  if (moreCard) track.appendChild(moreCard);

  // Fetch all titles concurrently via oEmbed, then build cards
  Promise.all(
    VIDEO_IDS.map(id =>
      fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`)
        .then(r => r.ok ? r.json() : null)
        .then(d => ({ id, title: d ? d.title : null }))
        .catch(() => ({ id, title: null }))
    )
  ).then(videos => {
    videos.forEach(({ id, title }) => {
      track.insertBefore(buildCard(id, title), moreCard || null);
    });
    moveTo(0);
  });

  moveTo(0);
})();

