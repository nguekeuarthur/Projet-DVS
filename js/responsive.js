

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    if (!mobileMenuToggle || !mainNav) return;

    // --- Toggle menu ---
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // --- Close menu when clicking a nav link (except dropdown toggles) ---
    mainNav.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (!this.classList.contains('dropdown-toggle')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // --- Mobile dropdown handling ---
    dropdowns.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                var parent = this.closest('.dropdown');
                document.querySelectorAll('.dropdown').forEach(function(d) {
                    if (d !== parent) d.classList.remove('active');
                });
                if (parent) parent.classList.toggle('active');
            }
        });
    });

    // --- Close on resize to desktop ---
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.querySelectorAll('.dropdown').forEach(function(d) {
                d.classList.remove('active');
            });
        }
    });
});
