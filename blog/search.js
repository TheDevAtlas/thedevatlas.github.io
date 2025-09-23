/**
 * Robust client-side search that:
 * - Resolves posts.json relative to the current section directory (works on subpaths)
 * - Renders all posts initially, filters by title/tags/excerpt on input
 */
(async () => {
  const input = document.getElementById('q');
  const resultsEl = document.getElementById('results');
  if (!input || !resultsEl) return;

  // Resolve the section directory (e.g., /blog/ or /recipes/)
  // Works whether you're on /blog/ or /blog/index.html
  const here = new URL(location.href);
  const sectionRoot = here.pathname.endsWith('/') 
    ? here.href                             // .../blog/
    : new URL('./', here.href).href;        // .../blog/index.html -> .../blog/

  const postsJsonURL = new URL('posts.json', sectionRoot).href;

  let posts = [];
  try {
    const res = await fetch(postsJsonURL, { credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Failed to fetch ${postsJsonURL}: ${res.status}`);
    const data = await res.json();
    posts = Array.isArray(data.posts) ? data.posts : [];
  } catch (e) {
    console.warn('Could not load posts.json', e);
  }

  const render = (items) => {
    resultsEl.innerHTML = items.map(p => `
      <article class="post-card">
        <h2><a href="${p.url}">${p.title}</a></h2>
        <div class="meta">${p.date ? new Date(p.date).toLocaleDateString() : ''}</div>
        ${p.excerpt ? `<p>${p.excerpt}</p>` : ''}
        ${p.tags?.length ? `<div class="tags"># ${p.tags.join(' · ')}</div>` : ''}
      </article>
    `).join('') || `<p class="muted">No posts found.</p>`;
  };

  const norm = s => (s || '').toLowerCase();
  const search = (q) => {
    const s = norm(q);
    if (!s) return posts;
    return posts.filter(p =>
      norm(p.title).includes(s) ||
      norm(p.excerpt).includes(s) ||
      (p.tags || []).some(t => norm(t).includes(s))
    );
  };

  // Initial render
  render(posts);

  // Live filter
  input.addEventListener('input', () => render(search(input.value)));
})();
