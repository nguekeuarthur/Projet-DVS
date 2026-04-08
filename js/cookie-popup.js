/* ========================================
   COOKIE CONSENT - Logic
   Accepted  → reappears after 2 weeks
   Refused   → reappears after 1 hour
   ======================================== */
(function () {
    'use strict';

    var COOKIE_KEY = 'dejavu_cookie_consent';
    var TWO_WEEKS_MS  = 14 * 24 * 60 * 60 * 1000; // 2 semaines
    var ONE_HOUR_MS   = 1 * 60 * 60 * 1000;        // 1 heure

    // Check if a previous choice is still valid
    var stored = localStorage.getItem(COOKIE_KEY);
    if (stored) {
        try {
            var data = JSON.parse(stored);
            var now = Date.now();
            if (data.expiry && now < data.expiry) {
                // Not expired yet — don't show
                return;
            }
            // Expired — remove and show again
            localStorage.removeItem(COOKIE_KEY);
        } catch (e) {
            // Corrupted data — remove
            localStorage.removeItem(COOKIE_KEY);
        }
    }

    // Wait for DOM
    document.addEventListener('DOMContentLoaded', function () {
        var popup = document.querySelector('.cookie-popup');
        if (!popup) return;

        // Show popup after a short delay
        setTimeout(function () {
            popup.classList.add('active');
        }, 1200);

        // Accept → store with 2-week expiry
        var btnAccept = popup.querySelector('.cookie-btn-accept');
        if (btnAccept) {
            btnAccept.addEventListener('click', function () {
                saveChoice('accepted', TWO_WEEKS_MS);
                closePopup(popup);
            });
        }

        // Refuse → store with 1-hour expiry
        var btnRefuse = popup.querySelector('.cookie-btn-refuse');
        if (btnRefuse) {
            btnRefuse.addEventListener('click', function () {
                saveChoice('refused', ONE_HOUR_MS);
                closePopup(popup);
            });
        }
    });

    function saveChoice(choice, duration) {
        var payload = JSON.stringify({
            choice: choice,
            expiry: Date.now() + duration
        });
        localStorage.setItem(COOKIE_KEY, payload);
    }

    function closePopup(popup) {
        popup.classList.remove('active');
        setTimeout(function () {
            if (popup.parentNode) popup.parentNode.removeChild(popup);
        }, 500);
    }
})();
