// Subtle hero animations: particle field + mouse-parallax glow orb

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = document.querySelector('.hero');
  if (!hero) return;

  // ── Canvas ──────────────────────────────────────────────────────────
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  hero.prepend(canvas);
  const ctx = canvas.getContext('2d');

  const COUNT       = 52;
  const CONNECT_MAX = 130;   // px — max distance to draw a line
  const REPEL_R     = 100;   // px — mouse repel radius
  const REPEL_FORCE = 0.35;

  let W, H, mouse = { x: -9999, y: -9999 };
  let particles = [];
  let running = false;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function rand(a, b) { return a + Math.random() * (b - a); }

  function mkParticle() {
    return {
      x:  rand(0, W || 800),
      y:  rand(0, H || 600),
      r:  rand(0.7, 1.8),
      vx: rand(-0.08, 0.08),
      vy: rand(-0.22, -0.04),   // slow upward drift
      op: rand(0.07, 0.24),
      accent: Math.random() < 0.22,
    };
  }

  function resize() {
    W = hero.offsetWidth;
    H = hero.offsetHeight;
    canvas.width  = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    // Update positions
    for (const p of particles) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < REPEL_R * REPEL_R) {
        const d = Math.sqrt(d2) || 1;
        const f = (REPEL_R - d) / REPEL_R * REPEL_FORCE;
        p.x += dx / d * f;
        p.y += dy / d * f;
      }
      p.x += p.vx;
      p.y += p.vy;
      // wrap
      if (p.y < -4)      p.y = H + 4;
      if (p.x < -4)      p.x = W + 4;
      if (p.x > W + 4)   p.x = -4;
    }

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_MAX) {
          ctx.globalAlpha = (1 - dist / CONNECT_MAX) * 0.055;
          ctx.strokeStyle = '#f0ece8';
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    // Dots
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.accent
        ? `rgba(181,34,64,${p.op})`
        : `rgba(240,236,232,${p.op})`;
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  // ── Mouse tracking ───────────────────────────────────────────────────
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    const cx = ((mouse.x / W) - 0.5) * 70;
    const cy = ((mouse.y / H) - 0.5) * 50;
    hero.style.setProperty('--orb-x', cx + 'px');
    hero.style.setProperty('--orb-y', cy + 'px');
  }, { passive: true });

  hero.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
    hero.style.setProperty('--orb-x', '0px');
    hero.style.setProperty('--orb-y', '0px');
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });

  resize();
  particles = Array.from({ length: COUNT }, mkParticle);

  // Only animate while the hero is on screen
  new IntersectionObserver(([entry]) => {
    const shouldRun = entry.isIntersecting;
    if (shouldRun && !running) {
      running = true;
      tick();
    } else if (!shouldRun) {
      running = false;
    }
  }).observe(hero);
})();
