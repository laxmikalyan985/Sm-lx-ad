// ===============================
// Premium Landing Page Script
// ===============================

// Download Button Effect

const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("mouseenter", () => {

    downloadBtn.style.transform = "translateY(-5px) scale(1.02)";

});

downloadBtn.addEventListener("mouseleave", () => {

    downloadBtn.style.transform = "translateY(0px) scale(1)";

});

// ===============================
// Feature Cards Animation
// ===============================

const cards = document.querySelectorAll(".feature");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, { threshold: .2 });

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".6s ease";

    observer.observe(card);

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {

    const target = counter.innerText;

    let value = 0;

    let end;

    let suffix = "";

    if (target.includes("L+")) {

        end = 5;

        suffix = "L+";

    }

    else if (target.includes("★")) {

        end = 4.9;

        suffix = "★";

    }

    else {

        end = 24;

        suffix = "×7";

    }

    const timer = setInterval(() => {

        if (end === 4.9) {

            value += 0.1;

            counter.innerText = value.toFixed(1) + suffix;

            if (value >= 4.9) {

                counter.innerText = "4.9★";

                clearInterval(timer);

            }

        }

        else {

            value++;

            counter.innerText = value + suffix;

            if (value >= end) {

                counter.innerText = target;

                clearInterval(timer);

            }

        }

    }, 40);

});

// ===============================
// Logo Floating
// ===============================

const logo = document.querySelector(".logo-box");

setInterval(() => {

    logo.animate([

        { transform: "translateY(0px)" },

        { transform: "translateY(-8px)" },

        { transform: "translateY(0px)" }

    ], {

        duration: 3000,

        iterations: 1

    });

}, 3000);

// ===============================
// Mouse Glow Effect
// ===============================

document.addEventListener("mousemove", (e) => {

    document.body.style.background =

        `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,

rgba(0,150,120,.08),

transparent 260px),

linear-gradient(180deg,#f7fffc,#eefbf7,#ffffff)`;

});

// ===============================
// Button Ripple
// ===============================

downloadBtn.addEventListener("click", function (e) {

    const circle = document.createElement("span");

    const diameter = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = diameter + "px";

    circle.style.left = e.offsetX - diameter / 2 + "px";

    circle.style.top = e.offsetY - diameter / 2 + "px";

    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => {

        circle.remove();

    }, 700);

});