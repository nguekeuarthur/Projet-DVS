/* ========================================
   DÉJÀ VU COLLECTION - SCRIPTS SPÉCIFIQUES
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // === GALLERY SLIDER (Collection Page) ===
    const initGallerySlider = () => {
        const gallerySliders = document.querySelectorAll('.gallery-slider');
        
        gallerySliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slide');
            const prevBtn = slider.parentElement?.querySelector('.prev');
            const nextBtn = slider.parentElement?.querySelector('.next');
            const dots = slider.parentElement?.querySelectorAll('.slider-dots .dot');
            
            if (slides.length === 0) return;
            
            let currentSlide = 0;
            let autoPlayInterval;

            const showSlide = (n) => {
                slides.forEach(slide => slide.classList.remove('active'));
                if (dots && dots.length > 0) {
                    dots.forEach(dot => dot.classList.remove('active'));
                }
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                if (dots && dots.length > 0 && dots[currentSlide]) {
                    dots[currentSlide].classList.add('active');
                }
            };

            // Navigation buttons
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    showSlide(currentSlide - 1);
                    resetAutoPlay();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    showSlide(currentSlide + 1);
                    resetAutoPlay();
                });
            }

            // Dots navigation
            if (dots && dots.length > 0) {
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        showSlide(index);
                        resetAutoPlay();
                    });
                });
            }

            // Auto-play
            const startAutoPlay = () => {
                autoPlayInterval = setInterval(() => {
                    showSlide(currentSlide + 1);
                }, 7000);
            };

            const resetAutoPlay = () => {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            };

            // Initialize
            if (slides.length > 0) {
                slides[0].classList.add('active');
                if (dots && dots.length > 0 && dots[0]) {
                    dots[0].classList.add('active');
                }
                startAutoPlay();
            }
        });
    };

    // === COLLECTION ITEMS ANIMATION ===
    const initCollectionItems = () => {
        const collectionItems = document.querySelectorAll('.collection-item');
        
        collectionItems.forEach(item => {
            // Intersection Observer for lazy loading animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            observer.observe(item);
        });
    };

    // Initialize all features
    initGallerySlider();
    initCollectionItems();
});
