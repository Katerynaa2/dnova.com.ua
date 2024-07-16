// Додаємо обробник події для натискання на кнопку "Контакти"
contactsBtn.addEventListener("click", function() {
    // Перевіряємо, чи вікно каталогу видиме, якщо так, то приховуємо його, якщо ні - показуємо
    if (catalogPopup.style.display === "block") {
        catalogPopup.style.display = "none"; // Приховуємо вікно каталогу
        catalogPopupBackground.style.display = "none"; // Приховуємо фоновий шар
    } else {
        catalogPopup.style.display = "block"; // Показуємо вікно каталогу
        catalogPopupBackground.style.display = "block"; // Показуємо фоновий шар
    }
});

// Додаємо обробник події для натискання на саме вікно каталогу
catalogPopup.addEventListener("click", function() {
    catalogPopup.style.display = "none"; // Приховуємо вікно каталогу
    catalogPopupBackground.style.display = "none"; // Приховуємо фоновий шар
});

// Додаємо обробник події для натискання на фоновий шар
catalogPopupBackground.addEventListener("click", function() {
    catalogPopup.style.display = "none"; // Приховуємо вікно каталогу
    catalogPopupBackground.style.display = "none"; // Приховуємо фоновий шар
});