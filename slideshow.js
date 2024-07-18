let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.transition = "opacity 1s ease-in-out"; // Додаємо плавність
    }
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    slides[slideIndex].classList.add("active");
    setTimeout(showSlides, 5000); // Змінює слайд кожні 5 секунд
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.transition = "opacity 1s ease-in-out"; // Додаємо плавність
    }
    slides[slideIndex].classList.add("active");
}
