// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================================
// CURRENT YEAR
// ================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8, 8, 18, 0.92)";

    } else {

        navbar.style.background =
            "rgba(8, 8, 18, 0.75)";

    }

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .certificate-card, .cv-box"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// ================================
// CURSOR GLOW
// ================================

const glowOne = document.querySelector(".glow-one");
const glowTwo = document.querySelector(".glow-two");

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    glowOne.style.transform =
        `translate(${x * 0.03}px, ${y * 0.03}px)`;

    glowTwo.style.transform =
        `translate(${-x * 0.02}px, ${-y * 0.02}px)`;

});