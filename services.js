document.addEventListener("DOMContentLoaded", function() {
    var servicesBtn = document.getElementById("servicesBtn"); // Отримуємо кнопку "Послуги"
    var servicePopup = document.getElementById("servicePopup"); // Отримуємо вікно послуг

    servicesBtn.addEventListener("click", function() {
        var btnRect = servicesBtn.getBoundingClientRect(); // Отримуємо розміри та положення кнопки "Послуги"
        
        // Встановлюємо вертикальне положення вікна послуг таким чином, щоб воно було нижче кнопки "Послуги" та під нею
        servicePopup.style.top = (btnRect.top + btnRect.height + window.scrollY) + "px"; 
        
        // Встановлюємо горизонтальне положення вікна послуг таким чином, щоб воно було зліва від кнопки "Послуги"
        servicePopup.style.left = btnRect.left + "px"; 
        
        // Перевіряємо, чи вікно послуг вже відображене
        if (servicePopup.style.display === "block") {
            servicePopup.style.display = "none"; // Закриваємо вікно послуг, якщо воно вже відображене
        } else {
            servicePopup.style.display = "block"; // Відображаємо вікно послуг
        }
    });
    
    // Додамо обробник кліку на вікно послуг, щоб воно закривалось при кліку за межами вікна
    servicePopup.addEventListener("click", function(event) {
        // Перевіряємо, чи клік відбувся в межах самого вікна послуг
        if (event.target === servicePopup) {
            servicePopup.style.display = "none"; // Закриваємо вікно послуг
        }
    });
});


