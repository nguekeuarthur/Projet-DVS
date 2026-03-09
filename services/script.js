// ============================================================================
// DÉJÀ VU SERVICES - SLIDER LUXE - CORRIGÉ
// Fichier : script.js (à placer dans le dossier services/ ou js/)
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Déjà Vu Services - script.js chargé');
    
    // ============================================================================
    // 1. SLIDER AUTOMATIQUE - VERSION CORRIGÉE
    // ============================================================================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length > 0 && dots.length > 0) {
        console.log(`✅ ${slides.length} slides et ${dots.length} dots trouvés`);
        
        let currentSlide = 0;
        let slideInterval;
        
        // Fonction DEBUG pour vérifier l'état
        function debugSliderState() {
            console.log('=== DEBUG SLIDER ===');
            slides.forEach((slide, i) => {
                const img = slide.querySelector('img');
                console.log(`Slide ${i}:`, {
                    active: slide.classList.contains('active'),
                    opacity: window.getComputedStyle(slide).opacity,
                    imgFilter: img ? window.getComputedStyle(img).filter : 'no img',
                    zIndex: window.getComputedStyle(slide).zIndex
                });
            });
            console.log('====================');
        }
        
        // Fonction pour changer de slide - CORRIGÉE
        function goToSlide(n) {
            console.log(`🔄 Changement vers slide ${n}`);
            
            // Masquer tous les slides d'abord
            slides.forEach(slide => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            });
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Calculer le nouvel index
            currentSlide = (n + slides.length) % slides.length;
            
            // Afficher et activer le slide courant
            slides[currentSlide].style.display = 'block';
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            // Forcer un reflow pour s'assurer que les transitions CSS fonctionnent
            void slides[currentSlide].offsetWidth;
            
            debugSliderState();
        }
        
        // Fonction pour passer au slide suivant
        function nextSlide() {
            goToSlide(currentSlide + 1);
        }
        
        // Fonction pour démarrer le slider automatique
        function startSlider() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000); // 5 secondes
            console.log('▶️ Slider automatique démarré');
        }
        
        // Fonction pour arrêter le slider
        function stopSlider() {
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
                console.log('⏸️ Slider automatique arrêté');
            }
        }
        
        // Initialiser le slider - CORRIGÉ
        function initSlider() {
            console.log('🔄 Initialisation du slider...');
            
            // Cacher tous les slides sauf le premier
            slides.forEach((slide, index) => {
                if (index === 0) {
                    slide.style.display = 'block';
                    slide.classList.add('active');
                } else {
                    slide.style.display = 'none';
                    slide.classList.remove('active');
                }
            });
            
            // Activer seulement le premier dot
            dots.forEach((dot, index) => {
                if (index === 0) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Forcer l'application des styles CSS
            setTimeout(() => {
                slides[0].style.opacity = '1';
            }, 100);
            
            // Démarrer le slider automatique
            startSlider();
            
            // Événements pour les dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log(`🎯 Dot ${index} cliqué`);
                    goToSlide(index);
                    stopSlider();
                    setTimeout(startSlider, 3000); // Redémarre après 3 secondes
                });
            });
            
            // Pause au survol du slider
            const heroSlider = document.querySelector('.hero-slider');
            if (heroSlider) {
                heroSlider.addEventListener('mouseenter', stopSlider);
                heroSlider.addEventListener('mouseleave', startSlider);
            }
            
            // Debug initial
            setTimeout(debugSliderState, 500);
        }
        
        // Initialiser le slider
        initSlider();
        
        // FORCER l'application des filtres CSS (solution de secours)
        setTimeout(() => {
            console.log('🎨 Application forcée des filtres CSS...');
            slides.forEach(slide => {
                const img = slide.querySelector('img');
                if (img && slide.classList.contains('active')) {
                    img.style.filter = 'blur(0) brightness(1)';
                } else if (img) {
                    img.style.filter = 'blur(3px) brightness(0.9)';
                }
            });
        }, 1000);
    } else {
        console.error('❌ Aucun slide ou dot trouvé !');
    }
    
    // ============================================================================
    // 2. MENU MOBILE (corrigé et amélioré)
    // ============================================================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Animation des barres du burger
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Fermer le menu quand on clique sur un lien de navigation (mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
    
    // ============================================================================
    // 3. CHANGEMENT DE LANGUE (simulé)
    // ============================================================================
    const langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const currentLang = langSwitcher.textContent;
            if (currentLang.includes('FR')) {
                langSwitcher.textContent = 'EN ▼';
            } else {
                langSwitcher.textContent = 'FR ▼';
            }
        });
    }
    
    // ============================================================================
    // 4. FORMULAIRE NEWSLETTER (simulé)
    // ============================================================================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            
            if (emailInput && emailInput.value) {
                // Sauvegarder l'icône originale
                const originalIcon = submitButton.innerHTML;
                
                // Afficher l'icône de succès
                submitButton.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                `;
                submitButton.style.background = '#4CAF50';
                
                // Reset après 2 secondes
                setTimeout(() => {
                    emailInput.value = '';
                    submitButton.innerHTML = originalIcon;
                    submitButton.style.background = '';
                }, 2000);
            }
        });
    }
    
    // ============================================================================
    // 5. EFFETS DE HOVER SUR LES CARDS (optionnel, car géré en CSS)
    // ============================================================================
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    console.log('✅ Tous les scripts sont initialisés');
});

// Solution alternative si les filtres CSS ne fonctionnent toujours pas
function forceSliderFilters() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        if (img) {
            if (slide.classList.contains('active')) {
                // Slide active: pas de flou, légère teinte rouge
                img.style.filter = 'blur(0px) brightness(1)';
                slide.style.backgroundColor = 'rgba(196, 30, 58, 0.05)';
            } else {
                // Slides inactives: flou + teinte rouge
                img.style.filter = 'blur(3px) brightness(0.9)';
                slide.style.backgroundColor = 'rgba(196, 30, 58, 0.15)';
            }
        }
    });
}

// Appeler cette fonction si besoin
setTimeout(forceSliderFilters, 2000);

/* ── MODALE SERVICES ───────────────────────────── */
(function () {

    const overlay = document.createElement("div");
    overlay.className = "service-modal-overlay";
    overlay.innerHTML = `
        <div class="service-modal" role="dialog" aria-modal="true">

            <!-- Header sticky : titre + croix -->
            <div class="service-modal-header">
                <span class="service-modal-eyebrow">Nos services</span>
                <h3 class="service-modal-title"></h3>
                <button class="service-modal-close" aria-label="Fermer">✕</button>
            </div>

            <!-- Corps scrollable -->
            <div class="service-modal-body">
                <div class="service-modal-divider">
                    <div class="service-modal-divider-diamond"></div>
                </div>
                <p class="service-modal-text"></p>
                <div class="service-modal-footer">
                    <a href="#" class="service-modal-cta"><span>Prendre RDV →</span></a>
                    <span class="service-modal-badge">Déjà Vu Services</span>
                </div>
            </div>

        </div>
    `;
    document.body.appendChild(overlay);

    const modalTitle  = overlay.querySelector(".service-modal-title");
    const modalText   = overlay.querySelector(".service-modal-text");
    const modalCtaEl  = overlay.querySelector(".service-modal-cta");
    const modalCtaTxt = overlay.querySelector(".service-modal-cta span");
    const closeBtn    = overlay.querySelector(".service-modal-close");
    const modalBody   = overlay.querySelector(".service-modal-body");
    const modalHeader = overlay.querySelector(".service-modal-header");

    let hoverTimer = null;

    // Ombre sur le header quand on scroll
    modalBody.addEventListener("scroll", () => {
        modalHeader.classList.toggle("is-scrolled", modalBody.scrollTop > 0);
    });

    function openModal(card) {
        const back = card.querySelector(".service-card-back");
        if (!back) return;

        modalTitle.textContent  = back.querySelector("h3")?.textContent.trim() || "";
        modalText.textContent   = back.querySelector("p")?.textContent.trim()  || "";
        const link = back.querySelector(".service-link");
        modalCtaEl.href         = link?.href        || "#";
        modalCtaTxt.textContent = link?.textContent || "Prendre RDV →";

        // Reset scroll a chaque ouverture
        modalBody.scrollTop = 0;
        modalHeader.classList.remove("is-scrolled");

        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        overlay.classList.remove("is-open");
        document.body.style.overflow = "";
        clearTimeout(hoverTimer);
    }

    // Ouverture apres 750ms (fin animation vague rouge)
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            hoverTimer = setTimeout(() => openModal(card), 750);
        });
        card.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimer);
        });
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", e => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeModal();
    });

})();