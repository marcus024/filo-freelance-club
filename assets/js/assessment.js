/* Self-assessment: step-by-step form that produces an instant result.
   DRAFT: in production, submit() should POST the answers + files to the backend,
   which emails the result to Miggy and stores it in the admin dashboard. */
(function () {
  const F = window.FILO, A = F.assessment, esc = window.FILO_UI.esc;
  const form = document.getElementById('assessment');
  const panels = [...form.querySelectorAll('.step-panel')];
  const progress = document.getElementById('progress');
  const bar = document.getElementById('bar');
  const back = document.getElementById('back');
  const next = document.getElementById('next');
  const actions = document.getElementById('actions');
  let step = 0;

  const groups = {
    situation: ['Student or fresh graduate', 'Employed, exploring a side hustle', 'Between jobs', 'Stay-at-home parent', 'Career shifter', 'Already freelancing'].map((l) => ({ id: l, label: l })),
    skills: A.skills,
    industries: A.industries,
    freelance: ['None yet', 'A few small projects', 'Active freelancer'].map((l) => ({ id: l, label: l })),
    hobbies: A.hobbies,
    goals: A.goals,
    barriers: A.barriers,
  };

  // Build the choice chips
  form.querySelectorAll('.choices').forEach((box) => {
    const g = box.dataset.group, type = box.dataset.type;
    box.innerHTML = groups[g].map((o) => `
      <label class="choice"><input type="${type}" name="${g}" value="${esc(o.id)}"><span>${esc(o.label)}</span></label>`).join('');
  });

  progress.innerHTML = panels.map((p, i) => `<li><span>${i + 1}</span>${esc(p.dataset.step)}</li>`).join('');

  function show(i) {
    step = i;
    panels.forEach((p, j) => (p.hidden = j !== i));
    [...progress.children].forEach((li, j) => {
      li.classList.toggle('done', j < i);
      if (j === i) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
    });
    bar.style.width = `${(i / (panels.length - 1)) * 100}%`;
    back.hidden = i === 0 || i === panels.length - 1;
    actions.hidden = i === panels.length - 1;
    next.textContent = i === 0 ? "Let's start →" : i === panels.length - 2 ? 'See my result →' : 'Next →';
    const focusEl = panels[i].querySelector('h2[tabindex], #result');
    if (focusEl) focusEl.focus({ preventScroll: true });
    form.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }

  function setError(input, msg) {
    const id = input.id + '-error';
    let el = document.getElementById(id);
    if (msg) {
      if (!el) { el = document.createElement('p'); el.className = 'error'; el.id = id; input.after(el); }
      el.textContent = msg;
      input.setAttribute('aria-invalid', 'true');
      const ids = (input.getAttribute('aria-describedby') || '').split(' ').filter(Boolean);
      if (!ids.includes(id)) input.setAttribute('aria-describedby', [...ids, id].join(' '));
    } else if (el) {
      el.remove();
      input.removeAttribute('aria-invalid');
    }
    return !msg;
  }

  function valid() {
    const panel = panels[step];
    let ok = true, first = null;
    if (panel.dataset.step === 'About you') {
      const name = form.name, email = form.email;
      if (!setError(name, name.value.trim() ? '' : 'Please enter your name.')) { ok = false; first = first || name; }
      const e = email.value.trim();
      if (!setError(email, !e ? 'Please enter your email.' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? '' : 'Please enter a valid email, like juan@gmail.com.')) { ok = false; first = first || email; }
    }
    if (panel.dataset.step === 'Skills') {
      const any = form.querySelectorAll('input[name="skills"]:checked').length > 0;
      document.getElementById('skills-error').hidden = any;
      if (!any) { ok = false; first = first || form.querySelector('input[name="skills"]'); }
    }
    if (panel.dataset.step === 'Your profile') {
      ['portfolio', 'linkedin', 'profiles'].forEach((n) => {
        const el = form[n], v = el.value.trim();
        if (!setError(el, !v || /^https?:\/\/\S+\.\S+/.test(v) ? '' : 'Please enter a full link starting with https://')) { ok = false; first = first || el; }
      });
      const f = form.cv.files[0];
      if (!setError(form.cv, f && f.size > 5 * 1024 * 1024 ? 'That file is over 5 MB. Please upload a smaller file.' : '')) { ok = false; first = first || form.cv; }
    }
    if (first) first.focus();
    return ok;
  }

  const picked = (name) => [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((i) => i.value);

  function score() {
    const totals = Object.fromEntries(F.niches.map((n) => [n.id, 0]));
    const reasons = Object.fromEntries(F.niches.map((n) => [n.id, []]));
    [['skills', A.skills], ['industries', A.industries], ['hobbies', A.hobbies]].forEach(([name, opts]) => {
      picked(name).forEach((id) => {
        const o = opts.find((x) => x.id === id);
        if (!o) return;
        Object.entries(o.niches).forEach(([n, pts]) => { totals[n] += pts; reasons[n].push(o.label.toLowerCase()); });
      });
    });
    const max = Math.max(1, ...Object.values(totals));
    return F.niches
      .map((n) => ({ niche: n, pts: totals[n.id], fit: Math.round((totals[n.id] / max) * 100), why: [...new Set(reasons[n.id])].slice(0, 3) }))
      .sort((a, b) => b.pts - a.pts)
      .slice(0, 3);
  }

  function result() {
    const name = form.name.value.trim().split(' ')[0] || 'there';
    const top = score();
    const barrierIds = picked('barriers');
    const guides = barrierIds.map((b) => A.barriers.find((x) => x.id === b)).map((b) => F.guides.find((g) => g.id === b.guide)).filter(Boolean);
    if (!guides.length) guides.push(F.guides[0], F.guides[2]);
    const goal = (A.goals.find((g) => g.id === picked('goals')[0]) || {}).label;
    const hasAssets = form.cv.files.length || form.portfolio.value || form.linkedin.value || form.profiles.value;

    const steps = [
      `Read the <a href="article.html?niche=${top[0].niche.id}">${esc(top[0].niche.name)} career path</a> to see the day-to-day work.`,
      hasAssets ? 'Update your CV and profiles so they name one service clearly.' : 'Create two sample pieces of work for your top path. <a href="article.html?guide=build-a-portfolio">Here is how.</a>',
      `Start with the guide${guides.length > 1 ? 's' : ''} below that match${guides.length > 1 ? '' : 'es'} what is holding you back.`,
    ];

    document.getElementById('result').innerHTML = `
      <div class="result-top on-blue">
        <span class="eyebrow">Your starting point</span>
        <h2>${esc(name)}, your best fit is <span class="hl">${esc(top[0].niche.name)}</span></h2>
        <p class="lead" style="margin:0">${goal ? `Goal: ${esc(goal.toLowerCase())}. ` : ''}Based on your skills, experience and interests, these paths suit you best.</p>
      </div>

      <h3>Your top 3 VA paths</h3>
      <div class="matches">
        ${top.map((m, i) => `
          <div class="match">
            <span class="match-rank" aria-hidden="true">${i + 1}</span>
            <div>
              <h3><a href="article.html?niche=${m.niche.id}">${esc(m.niche.name)}</a></h3>
              <p>${m.why.length ? `Because of your ${esc(m.why.join(', '))}.` : esc(m.niche.line)}</p>
            </div>
            <div class="meter"><b>${m.fit}%</b><i style="--w:${m.fit}%" role="img" aria-label="${m.fit} percent fit"></i></div>
          </div>`).join('')}
      </div>

      <h3>Your next steps</h3>
      <ol class="next-steps">${steps.map((s) => `<li><span>${s}</span></li>`).join('')}</ol>

      <h3 style="margin-top:28px">Guides picked for you</h3>
      <div class="cards cards-3" style="margin-top:14px">${guides.slice(0, 3).map(window.FILO_UI.guideCard).join('')}</div>

      <div class="result-top on-blue" style="margin-top:32px">
        <h2 style="font-size:clamp(24px,3vw,32px)">What happens now</h2>
        <ol class="timeline">
          <li><b>Sent to Miggy</b>Your result, answers and files go to Miggy automatically.</li>
          <li><b>Miggy reviews</b>Miggy reads everything and notes what to discuss with you.</li>
          <li><b>Personal email</b>Expect observations and next steps at ${esc(form.email.value.trim())}.</li>
        </ol>
        <p style="margin:18px 0 0;font-size:14px;color:#dfe5fb">Draft preview: sending to Miggy will be connected when the website backend is built.</p>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:24px">
        <a class="btn btn-primary" href="learn.html">Go to the Learning Hub</a>
        <button type="button" class="btn btn-ghost" onclick="window.print()">Print my result</button>
      </div>`;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!valid()) return;
    if (step === panels.length - 2) result();
    show(step + 1);
  });
  back.addEventListener('click', () => show(step - 1));
  form.addEventListener('input', (e) => { if (e.target.getAttribute('aria-invalid')) setError(e.target, ''); if (e.target.name === 'skills') document.getElementById('skills-error').hidden = true; });

  show(0);
  window.scrollTo(0, 0);
})();
