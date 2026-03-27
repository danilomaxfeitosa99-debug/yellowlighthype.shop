document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Redirect all buttons and clickable images to google.com
    document.querySelectorAll("a.btn, a.btn-small, .clickable-image, .logo, .nav-links a, .footer-links a").forEach(element => {
        element.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href && (href.includes("privacy.html") || href.includes("terms.html"))) {
                return; // Allow legal pages
            }
            e.preventDefault();
            window.location.href = "https://google.com";
        });
    });

    // Form submission redirect
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Üzenet sikeresen elküldve! Átirányítás a Google-ra.");
            window.location.href = "https://google.com";
        });
    }
});
