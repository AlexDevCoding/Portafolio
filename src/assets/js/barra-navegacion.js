    // Agregar antes de cerrar el body
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
  
        const observerOptions = {
          threshold: 0.5
        };
  
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                  link.classList.add('border-blue-700', 'text-[#f2f4fc]');
                  link.classList.remove('border-transparent', 'text-[#222449]');
                } else {
                  link.classList.remove('border-blue-700', 'text-[#f2f4fc]');
                  link.classList.add('border-transparent', 'text-[#222449]');
                }
              });
            }
          });
        }, observerOptions);
  
        sections.forEach(section => {
          observer.observe(section);
        });
  
        // Manejar el clic en los enlaces de navegación
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
          });
        });
      });