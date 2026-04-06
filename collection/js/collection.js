/* ========================================
   DÉJÀ VU COLLECTION - SCRIPTS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Hero Slider --- */
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots   = document.querySelectorAll('.slider-dots .dot');
    let current  = 0;
    let timer;

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function startAutoPlay() {
        timer = setInterval(() => goTo(current + 1), 6000);
    }

    function resetAutoPlay() {
        clearInterval(timer);
        startAutoPlay();
    }

    if (slides.length) {
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => { goTo(i); resetAutoPlay(); });
        });
        startAutoPlay();
    }

    /* --- Mobile Menu Toggle --- */
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav    = document.querySelector('nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});
