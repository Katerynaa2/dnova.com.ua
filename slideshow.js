// Отримуємо всі елементи слайдів
const slides = document.querySelectorAll('.slide');

// Початковий індекс слайда
let currentIndex = 0;

// Функція для зміни слайдів
function showSlide(index) {
    // Приховуємо всі слайди
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'; // Показуємо поточний слайд
        } else {
            slide.style.display = 'none'; // Приховуємо інші слайди
        }
    });
}

// Функція для автоматичної зміни слайдів
function autoChangeSlide() {
    currentIndex++; // Збільшуємо індекс
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Повертаємося до першого слайда, якщо досягли кінця
    }
    showSlide(currentIndex); // Показуємо новий слайд
}

// Запускаємо автоматичну зміну слайдів кожні 5 секунд
setInterval(autoChangeSlide, 3000);
