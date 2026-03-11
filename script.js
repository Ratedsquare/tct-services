const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    function animateRing() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    document.querySelectorAll('a, button, .service-card, .why-card, .diagnostic-mockup').forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.width = '60px';
        ring.style.height = '60px';
        ring.style.borderColor = 'var(--orange)';
        ring.style.background = 'rgba(255, 107, 43, 0.05)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'var(--orange-glow)';
        ring.style.background = 'transparent';
      });
    });

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(r => observer.observe(r));