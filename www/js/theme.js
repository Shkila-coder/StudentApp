// Открытие модального окна
function openThemeModal() {
    document.getElementById("themeModal").style.display = "block";
}

// Закрытие модального окна
function closeThemeModal() {
    document.getElementById("themeModal").style.display = "none";
}

// Установка темы (функции для изменения темы можно доработать)
function setTheme(theme) {
    alert("Theme set to: " + theme);
    closeModal(); // Закрываем модальное окно после выбора
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    let modal = document.getElementById("themeModal");
    if (event.target === modal) {
        closeModal();
    }
}
