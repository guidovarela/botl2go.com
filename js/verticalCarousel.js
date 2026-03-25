document.addEventListener('DOMContentLoaded', function() {
    
    // --- Vertical Carousel Logic ---
    const linesData = [
                {
            id: 'minigo',
            title: 'MINIgo',
            desc1: 'Más capacidad para seguir tu ritmo.',
            desc2: 'Ideales para jornadas largas, entrenamiento y movimiento continuo',
            images: [
                'img/minigo_01.png',
                'img/minigo_02.png',
                'img/minigo_03.png'
            ],
            logo: 'img/logo_minigo_white.png',
            icon: 'fas fa-compress'
        },
        {
            id: 'maggo',
            title: 'MAGgo',
            desc1: 'Momentos compartidos, sin descartables.',
            desc2: 'Vasos reutilizables para reuniones, encuentros y aire libre.',
            images: [
                'img/maggo_01.jpg',
                'img/maggo_02.png',
                'img/maggo_03.png',
                'img/maggo_04.png',
                'img/maggo_05.png',
                'img/maggo_06.png',
            ],
            logo: 'img/logo_maggo_white.png', 
            icon: 'fas fa-magnet'
        },
        {
            id: 'flowgo',
            title: 'FLOWgo',
            desc1: 'Diseño fluido para hidratarte todo el día.',
            desc2: 'Pensadas para acompañar tu rutina diaria, donde estés.',
            images: [
                'img/flowgo_01.png',
                'img/flowgo_02.png',
                'img/flowgo_03.png',
                'img/flowgo_04.png',
                'img/flowgo_05.png',
                'img/flowgo_06.png',
                'img/flowgo_07.png',
                'img/flowgo_08.png',
            ], 
            logo: 'img/logo_flowgo_white.png',
            icon: 'fas fa-wind'
        },

    ];

    let currentIndex = 1; // Start with FlowGo (index 1) as active
    let imageIndices = linesData.map(() => 0); // Track current image index for each line
    const track = document.getElementById('track');
    
    if(track) {
        // Initial Render
        linesData.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'carousel-item-custom';
            el.dataset.index = index;
            el.innerHTML = `
            <div class="slide-content row">

                    <div class="col-md-8 slide-image-box ">
                        <img src="${item.images[0]}" alt="${item.title}" class="slide-img img-fluid rounded" style="transition: opacity 0.5s ease;" >
                    </div>
                    <div class="col-md-4 slide-text-box">
                        <img src="${item.logo}" alt="${item.title}" class="slide-icon">
                            <h3 class="slide-title d-none">${item.title}</h3>
                        <p class="fs-4 fw-bold">${item.desc1}</p>
                        <p class="fs-5">${item.desc2}</p>
                    </div>
                </div>
            `;
            track.appendChild(el);
        });

        const items = document.querySelectorAll('.carousel-item-custom');

        function updateCarousel() {
            items.forEach((item, i) => {
                // Reset classes
                item.className = 'carousel-item-custom';
                
                const len = linesData.length;
                let diff = (i - currentIndex + len) % len;
                
                if (diff === 0) {
                    item.classList.add('active');
                } else if (diff === 1) {
                    item.classList.add('next');
                } else if (diff === len - 1) {
                    item.classList.add('prev');
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        // Function to rotate images within the active slide
        function rotateActiveImages() {
            const activeItem = document.querySelector('.carousel-item-custom.active');
            if (activeItem) {
                const index = parseInt(activeItem.dataset.index);
                const line = linesData[index];
                if (line.images.length > 1) {
                    imageIndices[index] = (imageIndices[index] + 1) % line.images.length;
                    const img = activeItem.querySelector('.slide-img');
                    img.style.opacity = 0;
                    setTimeout(() => {
                        img.src = line.images[imageIndices[index]];
                        img.style.opacity = 1;
                    }, 500);
                }
            }
        }

        // Setup Buttons
        document.getElementById('btnUp').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + linesData.length) % linesData.length;
            updateCarousel();
            resetAutoplay();
        });

        document.getElementById('btnDown').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % linesData.length;
            updateCarousel();
            resetAutoplay();
        });

        // Autoplay logic
        let mainAutoplay = setInterval(() => {
            currentIndex = (currentIndex + 1) % linesData.length;
            updateCarousel();
        }, 60000);

        let imageAutoplay = setInterval(() => {
            rotateActiveImages();
        }, 3000);

        function resetAutoplay() {
            clearInterval(mainAutoplay);
            mainAutoplay = setInterval(() => {
                currentIndex = (currentIndex + 1) % linesData.length;
                updateCarousel();
            }, 60000);
        }

        // Initialize positions
        updateCarousel();
    }
});