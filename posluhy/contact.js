document.addEventListener("DOMContentLoaded", function() {
    var contactsBtn = document.getElementById("contactsBtn"); // Отримуємо кнопку "Контакти"
    var catalogPopup = document.getElementById("catalogPopup"); // Отримуємо вікно каталогу

    // Додаємо обробник події для натискання на кнопку "Контакти"
    contactsBtn.addEventListener("click", function() {
        // Перевіряємо, чи вікно каталогу видиме, якщо так, то приховуємо його, якщо ні - показуємо
        if (catalogPopup.style.display === "block") {
            catalogPopup.style.display = "none"; // Приховуємо вікно каталогу
        } else {
            catalogPopup.style.display = "block"; // Показуємо вікно каталогу
        }
    });
});
