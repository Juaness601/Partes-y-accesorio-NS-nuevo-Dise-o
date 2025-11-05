// Menú móvil y Carrusel de imágenes
document.addEventListener('DOMContentLoaded', function() {
    // Código para el carrusel
    const images = document.querySelectorAll('.hero-image.centered');
    let currentImage = 0;

    function changeImage() {
        // Quitar la clase active de todas las imágenes
        images.forEach(img => img.classList.remove('active'));
        
        // Avanzar al siguiente índice
        currentImage = (currentImage + 1) % images.length;
        
        // Activar la siguiente imagen
        images[currentImage].classList.add('active');
    }

    // Cambiar la imagen cada 5 segundos
    setInterval(changeImage, 5000);

    // --- Comportamiento para miniaturas en la página de producto ---
    const mainProductImg = document.querySelector('.producto-img-principal');
    const thumbs = document.querySelectorAll('.producto-miniaturas .miniatura');
    if (mainProductImg && thumbs.length) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Cambiar imagen principal
                mainProductImg.src = thumb.src;
                mainProductImg.alt = thumb.alt || mainProductImg.alt;
                // estado activo
                thumbs.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Ajustar menú en cambio de tamaño de pantalla
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });
});