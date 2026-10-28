
/* =================================
   TYPING EFFECT
================================= */

const typingElement = document.getElementById("typing");

const words = [
    "Java Developer",
    "Problem Solver",
    "C Programmer",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();


/* =================================
   MOUSE 3D EFFECT
================================= */

const developerCard =
    document.querySelector(".developer-card");

document.addEventListener("mousemove", function (event) {

    const x =
        (window.innerWidth / 2 - event.clientX) / 40;

    const y =
        (window.innerHeight / 2 - event.clientY) / 40;

    if (developerCard) {

        developerCard.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

    }

});


/* =================================
   SCROLL REVEAL
================================= */

/*const revealElements1 =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .personality-grid > div"
    );


const revealObserver1 =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
*/

/* =================================
   NAVBAR ACTIVE LINK
================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   FLOATING BACKGROUND PARALLAX
================================= */

const cubes =
    document.querySelectorAll(".cube");

const orbs =
    document.querySelectorAll(".orb");


document.addEventListener("mousemove", function (event) {

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    cubes.forEach(function (cube, index) {

        const strength =
            (index + 1) * 15;

        cube.style.marginLeft =
            `${x * strength}px`;

        cube.style.marginTop =
            `${y * strength}px`;

    });


    orbs.forEach(function (orb, index) {

        const strength =
            (index + 1) * 25;

        orb.style.marginLeft =
            `${x * strength}px`;

        orb.style.marginTop =
            `${y * strength}px`;

    });

});


/* =================================
   MOBILE MENU
================================= */

const menuButton =
    document.querySelector(".menu-btn");

const navigation =
    document.querySelector(".navbar nav");


if (menuButton) {

    menuButton.addEventListener("click", function () {

        if (navigation.style.display === "flex") {

            navigation.style.display = "none";

        } else {

            navigation.style.display = "flex";

            navigation.style.flexDirection = "column";

            navigation.style.position = "absolute";

            navigation.style.top = "75px";

            navigation.style.right = "5%";

            navigation.style.padding = "20px";

            navigation.style.background =
                "rgba(5,5,5,0.95)";

            navigation.style.border =
                "1px solid #222";

        }

    });

}


/* =================================
   EMAIL BUTTON
================================= */

const emailButton =
    document.querySelector(".email-button");


if (emailButton) {

    emailButton.addEventListener("click", function () {

        console.log(
            "Opening email client..."
        );

    });

}
/*// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    '.section-title, .about-text, .about-card, .skill-card, .learning, .project-card, .personality-grid > div, .timeline-item, .contact-section'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});*/

/*
// =========================
// PREMIUM SCROLL ANIMATION
// =========================

const scrollElements = document.querySelectorAll(
    '.section-title, .about-text, .about-card, .skill-card, .learning, .project-card, .personality-grid > div, .timeline-item, .contact-section'
);

const scrollObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);

        }

    });

}, {
    threshold: 0.15
});

scrollElements.forEach(element => {

    element.classList.add('reveal');

    scrollObserver.observe(element);

});
*/
// =========================
// PREMIUM SCROLL ANIMATION
// REPEAT EVERY TIME
// =========================

const scrollElements = document.querySelectorAll(
    '.section-title, .about-text, .about-card, .skill-card, .learning, .project-card, .personality-grid > div, .timeline-item, .contact-section'
);

const scrollObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            // Animation start
            entry.target.classList.add('visible');

        } else {

            // Animation reset
            entry.target.classList.remove('visible');

        }

    });

}, {
    threshold: 0.15
});

scrollElements.forEach(element => {

    element.classList.add('reveal');

    scrollObserver.observe(element);

});

