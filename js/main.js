(function () {
  var t = document.getElementById('mob-toggle'), d = document.getElementById('mob-drawer'),
      o = document.getElementById('mob-overlay'), c = document.getElementById('drawer-close');
  if (!t || !d) return;
  function open() {
    d.hidden = false; o.classList.add('visible');
    t.setAttribute('aria-expanded', 'true'); t.setAttribute('aria-label', 'Close navigation menu');
    document.documentElement.style.overflow = 'hidden';
    var f = d.querySelector('a'); if (f) f.focus();
  }
  function close() {
    d.hidden = true; o.classList.remove('visible');
    t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-label', 'Open navigation menu');
    document.documentElement.style.overflow = '';
    t.focus();
  }
  t.addEventListener('click', function () { d.hidden ? open() : close(); });
  if (c) c.addEventListener('click', close);
  o.addEventListener('click', close);
  d.addEventListener('click', function (e) { if (e.target.closest('a')) { d.hidden = true; o.classList.remove('visible'); document.documentElement.style.overflow = ''; } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !d.hidden) close(); });
  window.addEventListener('resize', function () { if (window.innerWidth > 768 && !d.hidden) close(); });
})();
