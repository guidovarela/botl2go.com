document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Data Source
    const lines = [
        {
            id: 'flowgo',
            title: 'FLOWgo',
            desc1: 'Diseño fluido para hidratarte todo el día.',
            desc2: 'Pensadas para acompañar tu rutina diaria, donde estés.',
            img: '../img/flowgo_01.png',
            logo: '../img/logo_flowgo_white.png',
            icon: 'fas fa-wind'
        },
        {
            id: 'minigo',
            title: 'MINIgo',
            desc1: 'Más capacidad para seguir tu ritmo.',
            desc2: 'Ideales para jornadas largas, entrenamiento y movimiento continuo',
            img: '../img/minigo_01.png', 
            logo: '../img/logo_minigo_white.png',
            icon: 'fas fa-compress'
        },
        {
            id: 'maggo',
            title: 'MAGgo',
            desc1: 'Momentos compartidos, sin descartables.',
            desc2: 'Vasos reutilizables para reuniones, encuentros y aire libre.',
            img: '../img/maggo_01.png',
            logo: '../img/logo_maggo_white.png', 
            icon: 'fas fa-magnet'
        }
    ];

    const track = document.getElementById('track');
    let currentIndex = 1; // Start with the second item active (FlowGo style)

    // 2. Initial Render
    function renderItems() {
        track.innerHTML = '';
        lines.forEach((item, index) => {
            const el = document.createElement('div');
            el.classList.add('carousel-item-custom');
            el.dataset.index = index;

            el.innerHTML = `
                <div class="slide-content row">
                    <div class="col-6 slide-image-box rounded">
                        <img src="${item.img}" alt="${item.title}" class="slide-img img-fluid">
                    </div>
                    <div class="col-6 slide-text-box">
                        <img src="${item.logo}" alt="${item.title}" class="slide-icon">
                            <h3 class="slide-title d-none">${item.title}</h3>
                        <p class="fs-4 fw-bold">${item.desc1}</p>
                        <p class="fs-4">${item.desc2}</p>
                    </div>
                </div>
            `;
            track.appendChild(el);
        });
        updateClasses();
    }

    // 3. Class Logic (Circular)
    function updateClasses() {
        const items = document.querySelectorAll('.carousel-item-custom');
        const total = lines.length;

        items.forEach((item, index) => {
            // Remove all state classes
            item.classList.remove('active', 'prev', 'next', 'hidden');

            // Calculate distance from current index
            // handling wrap-around logic
            let diff = (index - currentIndex + total) % total;

            if (diff === 0) {
                item.classList.add('active');
            } else if (diff === 1) {
                // The item immediately AFTER the current one (appears at bottom)
                item.classList.add('next');
            } else if (diff === total - 1) {
                // The item immediately BEFORE the current one (appears at top)
                item.classList.add('prev');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // 4. Events
    document.getElementById('btnUp').addEventListener('click', () => {
        // Moving "Up" visually means showing the previous item as active
        currentIndex = (currentIndex - 1 + lines.length) % lines.length;
        updateClasses();
    });

    document.getElementById('btnDown').addEventListener('click', () => {
        // Moving "Down" visually means showing the next item as active
        currentIndex = (currentIndex + 1) % lines.length;
        updateClasses();
    });

    // Initialize
    renderItems();
});
