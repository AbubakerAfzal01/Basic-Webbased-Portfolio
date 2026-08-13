
console.log("page loaded");


const navLinks = document.querySelectorAll(".navbar a");


const sections = document.querySelectorAll("main section");

window.onscroll = function () {
    let current = "";

    for (let i = 0; i < sections.length; i++) {
        let sectionTop = sections[i].offsetTop - 120; 
        if (window.scrollY >= sectionTop) {
            current = sections[i].getAttribute("id");
        }
    }

    for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].className = navLinks[j].className.replace(" active", "");
        if (navLinks[j].getAttribute("href") === "#" + current) {
            navLinks[j].className = navLinks[j].className + " active";
        }
    }

    checkFadeIn();
};


const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
    for (let i = 0; i < fadeElements.length; i++) {
        const elementTop = fadeElements[i].getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && fadeElements[i].className.indexOf("visible") === -1) {
            fadeElements[i].className = fadeElements[i].className + " visible";
        }
    }
}


checkFadeIn();
