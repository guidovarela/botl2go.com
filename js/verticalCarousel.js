document.addEventListener('DOMContentLoaded', function() {
    // --- Vertical Carousel Logic ---
    const linesData = [
        {
            id: 'maggo',
            title: 'MAGgo',
            desc: 'Conexión magnética para tu vida en movimiento. Rápida, segura y siempre a mano.',
            img: 'https://images.unsplash.com/photo-1602143407151-011141951f7a?auto=format&fit=crop&w=800&q=80',
            icon: 'fas fa-magnet'
        },
        {
            id: 'flowgo',
            title: 'FLOWgo',
            desc: 'Diseño fluido para hidratarte todo el día. Botellas térmicas livianas, ergonómicas y pensadas para acompañar tu rutina diaria.',
            img: 'https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?auto=format&fit=crop&w=800&q=80',
            icon: 'fas fa-wind'
        },
        {
            id: 'minigo',
            title: 'MINIgo',
            desc: 'Pequeña pero poderosa. La dosis justa de hidratación para llevar en cualquier bolso.',
            img: 'https://images.unsplash.com/photo-1544003484-3cd181d17917?auto=format&fit=crop&w=800&q=80',
            icon: 'fas fa-compress-arrows-alt'
        },
        {
            id: 'motto',
            title: 'Motto',
            desc: 'Estilo y sustancia. La botella que define tu personalidad con acabados premium.',
            img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
            icon: 'fas fa-gem'
        }
    ];

    let currentIndex = 1; // Start with FlowGo (index 1) as active
    const track = document.getElementById('linesCarouselTrack');
    
    if(track) {
        // Initial Render
        linesData.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'line-item';
            el.dataset.index = index;
            el.innerHTML = `
                <div class="card-container w-75 mx-auto shadow-lg position-relative rounded-0 overflow-hidden" style="max-width: 300px;">
                    <img src="${item.img}" class="img-fluid w-100" style="height: 250px; object-fit: cover;">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark-overlay-soft">
                        <i class="${item.icon} fa-3x text-white"></i>
                    </div>
                </div>
                <h3 class="font-handwritten text-white fs-1 mt-3 mb-1 line-title">${item.title}</h3>
                <div class="line-desc">
                    <p class="text-white small mb-1 lh-sm">${item.desc}</p>
                </div>
            `;
            track.appendChild(el);
        });

        const items = document.querySelectorAll('.line-item');

        function updateCarousel() {
            items.forEach((item, i) => {
                // Reset classes
                item.className = 'line-item';
                
                // Calculate distance logic for circular buffer
                const len = linesData.length;
                // We want to find the position relative to currentIndex
                // 0 = active, 1 = next, -1 (or len-1) = prev
                
                // Diff calculation handling negative modulo correctly in JS
                let diff = (i - currentIndex + len) % len;
                
                if (diff === 0) {
                    item.classList.add('active');
                } else if (diff === 1) {
                    item.classList.add('next');
                } else if (diff === len - 1) {
                    item.classList.add('prev');
                } else {
                    // Hidden items (if array is larger than 3)
                    // They stay with base class .line-item which has opacity 0
                }
            });
        }

        // Setup Buttons
        document.getElementById('btnUp').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + linesData.length) % linesData.length;
            updateCarousel();
        });

        document.getElementById('btnDown').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % linesData.length;
            updateCarousel();
        });

        // Initialize positions
        updateCarousel();
    }
});