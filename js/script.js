document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Product Lines Selector Logic
    const lineButtons = document.querySelectorAll('#productLineSelector button');
    const contentItems = document.querySelectorAll('.content-item');

    lineButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            lineButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            btn.classList.add('active');

            // Hide all content
            contentItems.forEach(item => {
                item.classList.add('d-none');
                item.classList.remove('active');
            });

            // Show target content
            const targetId = `content-${btn.getAttribute('data-target')}`;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('d-none');
                // Small timeout to allow d-none removal to process before animation triggers if we added CSS transitions
                setTimeout(() => targetContent.classList.add('active'), 10);
            }
        });
    });

    // 2. Contact Form Validation and Simulation
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (contactForm.checkValidity()) {
                // Simulate AJAX request
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';

                setTimeout(() => {
                    contactForm.classList.add('d-none');
                    successMessage.classList.remove('d-none');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }

            contactForm.classList.add('was-validated');
        });
    }

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

});

// Global function to reset form (called from HTML button)
function resetForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.reset();
    contactForm.classList.remove('was-validated');
    contactForm.classList.remove('d-none');
    successMessage.classList.add('d-none');
}