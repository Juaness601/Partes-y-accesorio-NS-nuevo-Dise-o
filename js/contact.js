document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validación básica
            if (!name || !email || !subject || !message) {
                showAlert('Por favor completa todos los campos', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showAlert('Por favor ingresa un email válido', 'error');
                return;
            }
            
            // Simular envío (en producción aquí iría tu petición AJAX)
            showAlert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.', 'success');
            
            // Resetear formulario
            contactForm.reset();
        });
    }
    
    // Función para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Función para mostrar alertas
    function showAlert(message, type) {
        // Eliminar alertas anteriores
        const oldAlert = document.querySelector('.form-alert');
        if (oldAlert) {
            oldAlert.remove();
        }
        
        // Crear elemento de alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = `form-alert ${type}`;
        alertDiv.textContent = message;
        
        // Insertar antes del formulario
        contactForm.parentNode.insertBefore(alertDiv, contactForm);
        
        // Eliminar después de 5 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
});