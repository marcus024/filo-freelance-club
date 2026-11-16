/* Shared header, footer and small helpers used by every page. */
(function () {
  const F = window.FILO;
  const page = document.body.dataset.page || '';

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const nav = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'assessment.html', label: 'Self-Assessment', id: 'assessment' },
    { href: 'learn.html', label: 'Learn', id: 'learn' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];

  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `
      <div class="wrap">
        <a class="logo" href="index.html"><img src="assets/img/logo.png" alt="The Filo Freelance Club home" width="313" height="189"></a>
        <button class="menu-btn" aria-expanded="false" aria-controls="main-nav">Menu</button>
        <nav class="nav" id="main-nav" aria-label="Main">
          ${nav.map((n) => `<a href="${n.href}"${n.id === page ? ' aria-current="page"' : ''}>${n.label}</a>`).join('')}
          <a class="btn btn-primary" href="assessment.html">Find my starting point</a>
        </nav>
      </div>`;
    const btn = header.querySelector('.menu-btn');
    const menu = header.querySelector('.nav');
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Close' : 'Menu';
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('open')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = 'Menu'; btn.focus(); }
    });
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="wrap">
        <div>
          <img src="assets/img/logo.png" alt="The Filo Freelance Club" width="313" height="189">
          <p>${esc(F.brand.tagline)}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>${nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Follow us</h4>
          <ul>${F.socials.map((s) => `<li><a href="${s.href}">${s.label}</a></li>`).join('')}</ul>
        </div>
        <p class="copy">© ${new Date().getFullYear()} ${esc(F.brand.name)}. Draft website for review.</p>
      </div>`;
  }

  /* Card renderers shared by Home and Learn */
  window.FILO_UI = {
    esc,
    guideCard: (g) => `
      <a class="card" href="article.html?guide=${g.id}">
        <span class="tag">${esc(g.step)}</span>
        <h3>${esc(g.title)}</h3>
        <p>${esc(g.summary)}</p>
        <span class="meta">${g.minutes} min read →</span>
      </a>`,
    nicheCard: (n) => `
      <a class="niche" href="article.html?niche=${n.id}">
        <b>${esc(n.name)}</b>
        <span>${esc(n.line)}</span>
      </a>`,
    socialLinks: (cls) => `
      <ul class="socials ${cls || ''}">
        ${F.socials.map((s) => `<li><a href="${s.href}">${esc(s.label)}<small>${esc(s.handle)}</small></a></li>`).join('')}
      </ul>`,
  };
})();
