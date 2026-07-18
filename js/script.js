// Header scroll state + scroll progress bar
const header = document.getElementById('header');
const progressBar = document.getElementById('progressBar');

function onScroll() {
  const scrollTop = window.scrollY;
  header.classList.toggle('scrolled', scrollTop > 40);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Contact form — opens the visitor's email client with the message ready to send.
// No backend is configured yet; this is a zero-setup stopgap (see README for
// how to swap it for Formspree/Netlify Forms later).
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const CONTACT_EMAIL = 'lionheartcapital1303@gmail.com';

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const nombre = (data.get('nombre') || '').toString().trim();
    const correo = (data.get('correo') || '').toString().trim();
    const telefono = (data.get('telefono') || '').toString().trim();
    const servicio = (data.get('servicio') || '').toString().trim();
    const mensaje = (data.get('mensaje') || '').toString().trim();

    const subject = `Contacto web — ${servicio}`;
    const body =
      `Nombre: ${nombre}\n` +
      `Correo: ${correo}\n` +
      `Teléfono: ${telefono}\n` +
      `Servicio de interés: ${servicio}\n\n` +
      `Mensaje:\n${mensaje}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    formNote.textContent = 'Abriendo tu programa de correo para enviarnos el mensaje...';
    window.location.href = mailtoUrl;
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Animated network background in the hero (AI / data motif)
const netCanvas = document.getElementById('netCanvas');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (netCanvas && !prefersReducedMotion) {
  const ctx = netCanvas.getContext('2d');
  const heroSection = netCanvas.closest('.hero');
  const colors = ['rgba(217,178,106,0.8)', 'rgba(53,229,255,0.8)', 'rgba(143,107,255,0.8)'];
  let nodes = [];
  let width = 0, height = 0, rafId = null;

  function resize() {
    width = netCanvas.clientWidth;
    height = netCanvas.clientHeight;
    netCanvas.width = width * devicePixelRatio;
    netCanvas.height = height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const count = Math.min(60, Math.round((width * height) / 22000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(150, 180, 210, ${0.12 * (1 - dist / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach(n => {
      ctx.fillStyle = n.color;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
      ctx.fill();
    });

    rafId = requestAnimationFrame(step);
  }

  resize();
  step();
  window.addEventListener('resize', () => {
    cancelAnimationFrame(rafId);
    resize();
    step();
  });
}
