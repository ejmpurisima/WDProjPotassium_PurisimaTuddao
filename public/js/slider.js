document.addEventListener("DOMContentLoaded", () => {
    let currentChar = 0;
    const slides = document.querySelectorAll(".character-slide");

    function showChar(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove("active");
        });
        // Show selected slide
        slides[index].classList.add("active");
    }

    window.nextChar = function () {
        currentChar = (currentChar + 1) % slides.length;
        showChar(currentChar);
    };

    window.prevChar = function () {
        currentChar = (currentChar - 1 + slides.length) % slides.length;
        showChar(currentChar);
    };
});