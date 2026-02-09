/* ========================================
   DÉJÀ VU - JAVASCRIPT INTERACTIONS
   Modern, Smooth, Accessible
   ======================================== */

(function() {
    'use strict';

    // === UTILITY FUNCTIONS ===
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    // === MOBILE MENU ===
    const initMobileMenu = () => {
        const toggle = $('.mobile-menu-toggle');
        const nav = $('.main-nav ul');
        
        if (!toggle || !nav) return;
        
        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            toggle.classList.toggle('active');
            
            if (nav.style.display === 'flex') {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'var(--color-dark)';
                nav.style.padding = '1rem';
                nav.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                    toggle.classList.remove('active');
                }
            }
        });
    };

    // === SMOOTH SCROLLING ===
    const initSmoothScroll = () => {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#menu') return;
                
                const target = $(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 150;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // === HERO SLIDER ===
    const initSlider = () => {
        // Hero slider (page d'accueil)
        const heroSlider = $('.hero-slider');
        if (heroSlider && heroSlider.querySelectorAll('.hero-slide').length > 0) {
            const slides = $$('.hero-slide', heroSlider);
            const dots = $$('.hero-slider-dots .dot');
            let currentSlide = 0;
            let autoPlayInterval;

            const showSlide = (n) => {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                if (dots[currentSlide]) {
                    dots[currentSlide].classList.add('active');
                }
            };

            // Dots navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetAutoPlay();
                });
            });

            // Auto-play
            const startAutoPlay = () => {
                autoPlayInterval = setInterval(() => {
                    showSlide(currentSlide + 1);
                }, 6000);
            };

            const resetAutoPlay = () => {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            };

            // Initialize
            if (slides.length > 0) {
                slides[0].classList.add('active');
                if (dots[0]) dots[0].classList.add('active');
                startAutoPlay();
            }
        }

        // Page hero sliders (autres pages)
        const pageHeroSliders = $$('.page-hero .hero-slider');
        pageHeroSliders.forEach(slider => {
            const slides = $$('.slide', slider);
            const prevBtn = $('.prev', slider.parentElement);
            const nextBtn = $('.next', slider.parentElement);
            const dots = $$('.slider-dots .dot', slider.parentElement);
            let currentSlide = 0;
            let autoPlayInterval;

            const showSlide = (n) => {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                if (dots[currentSlide]) {
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
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetAutoPlay();
                });
            });

            // Auto-play
            const startAutoPlay = () => {
                autoPlayInterval = setInterval(() => {
                    showSlide(currentSlide + 1);
                }, 6000);
            };

            const resetAutoPlay = () => {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            };

            // Initialize
            if (slides.length > 0) {
                slides[0].classList.add('active');
                if (dots[0]) dots[0].classList.add('active');
                startAutoPlay();
            }
        });

        // Gallery slider (collection page)
        const gallerySliders = $$('.gallery-slider');
        gallerySliders.forEach(slider => {
            const slides = $$('.slide', slider);
            const prevBtn = $('.prev', slider.parentElement);
            const nextBtn = $('.next', slider.parentElement);
            const dots = $$('.slider-dots .dot', slider.parentElement);
            let currentSlide = 0;
            let autoPlayInterval;

            const showSlide = (n) => {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                if (dots[currentSlide]) {
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
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                    resetAutoPlay();
                });
            });

            // Auto-play
            const startAutoPlay = () => {
                autoPlayInterval = setInterval(() => {
                    showSlide(currentSlide + 1);
                }, 7000); // Slightly slower for gallery
            };

            const resetAutoPlay = () => {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            };

            // Initialize
            if (slides.length > 0) {
                slides[0].classList.add('active');
                if (dots[0]) dots[0].classList.add('active');
                startAutoPlay();
            }
        });
    };

    // === ACTIVE NAVIGATION ===
    const initActiveNav = () => {
        const currentPath = window.location.pathname;
        const navLinks = $$('.main-nav a, .footer-col a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    };

    // === SCROLL REVEAL ANIMATIONS ===
    const initScrollReveal = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        $$('.nav-card, .offer-card, .service-card, .collection-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    // === LAZY LOADING IMAGES ===
    const initLazyLoad = () => {
        const images = $$('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    };

    // === HEADER SCROLL EFFECT ===
    const initHeaderScroll = () => {
        const header = $('.main-header');
        if (!header) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
            
            lastScroll = currentScroll;
        });
    };

    // === GALLERY LIGHTBOX ===
    const initGalleryLightbox = () => {
        const galleryItems = $$('.gallery-item, .collection-item, .offer-card');
        
        galleryItems.forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function() {
                const img = $('img', this);
                if (!img) return;
                
                // Create lightbox
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <span class="lightbox-close">&times;</span>
                        <img src="${img.src}" alt="${img.alt}">
                    </div>
                `;
                
                // Styles
                Object.assign(lightbox.style, {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.9)',
                    zIndex: '9999',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '0',
                    transition: 'opacity 0.3s ease'
                });
                
                document.body.appendChild(lightbox);
                
                // Animate in
                setTimeout(() => lightbox.style.opacity = '1', 10);
                
                // Close handlers
                const close = () => {
                    lightbox.style.opacity = '0';
                    setTimeout(() => lightbox.remove(), 300);
                };
                
                $('.lightbox-close', lightbox).addEventListener('click', close);
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) close();
                });
                
                document.addEventListener('keydown', function escHandler(e) {
                    if (e.key === 'Escape') {
                        close();
                        document.removeEventListener('keydown', escHandler);
                    }
                });
            });
        });
    };

    // === FORM VALIDATION (if forms exist) ===
    const initFormValidation = () => {
        const forms = $$('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const inputs = $$('input[required], textarea[required]', this);
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = 'red';
                        
                        setTimeout(() => {
                            input.style.borderColor = '';
                        }, 2000);
                    }
                });
                
                if (isValid) {
                    // Submit form or show success message
                    alert('Formulaire soumis avec succès!');
                    form.reset();
                }
            });
        });
    };

    // === NAVIGATION BUTTONS ===
    const initNavigationButtons = () => {
        const servicesBtn = $('.btn-services');
        const collectionBtn = $('.btn-collection');
        
        if (servicesBtn) {
            servicesBtn.addEventListener('click', () => {
                window.location.href = 'services.html';
            });
        }
        
        if (collectionBtn) {
            collectionBtn.addEventListener('click', () => {
                window.location.href = 'collection.html';
            });
        }
    };

    // === PERFORMANCE OPTIMIZATION ===
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // === ACCESSIBILITY IMPROVEMENTS ===
    const initAccessibility = () => {
        // Add keyboard navigation for cards
        $$('.nav-card, .offer-card, .service-card, .collection-item').forEach(card => {
            card.setAttribute('tabindex', '0');
            
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    const link = $('a', card);
                    if (link) link.click();
                }
            });
        });
        
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Aller au contenu principal';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: #fff;
            padding: 8px;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Set main content ID
        const mainContent = $('.main-content');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    };

    // === ANALYTICS (placeholder) ===
    const initAnalytics = () => {
        // Track page views
        console.log('Page viewed:', window.location.pathname);
        
        // Track clicks on navigation
        $$('.nav-card a, .btn-outline').forEach(link => {
            link.addEventListener('click', function() {
                console.log('Navigation clicked:', this.textContent);
            });
        });
    };

    // === INITIALIZE ALL ===
    const init = () => {
        // Core functionality
        initMobileMenu();
        initSmoothScroll();
        initSlider();
        initActiveNav();
        initNavigationButtons();
        
        // Enhancements
        initScrollReveal();
        initLazyLoad();
        initHeaderScroll();
        initGalleryLightbox();
        initFormValidation();
        initAccessibility();
        
        // Analytics
        initAnalytics();
        
        console.log('✨ Déjà Vu website initialized successfully');
    };

    // === DOM READY ===
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // === HANDLE RESPONSIVE RESIZE ===
    const handleResize = debounce(() => {
        const nav = $('.main-nav ul');
        if (!nav) return;
        
        if (window.innerWidth > 768) {
            nav.style.display = 'flex';
            nav.style.position = 'static';
            nav.style.flexDirection = 'row';
        } else {
            nav.style.display = 'none';
        }
    }, 250);

    window.addEventListener('resize', handleResize);

    // === SERVICE WORKER (for PWA) ===
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // navigator.registerServiceWorker('/sw.js')
            //     .then(reg => console.log('Service Worker registered'))
            //     .catch(err => console.log('Service Worker registration failed'));
        });
    }

})();
