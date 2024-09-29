// Открытие модального окна
function loadChangeTheme() {
    document.getElementById("myModal").style.display = "block";
}

// Закрытие модального окна
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Установка темы (функции для изменения темы можно доработать)
function setTheme(theme) {
    alert("Theme set to: " + theme);
    closeModal(); // Закрываем модальное окно после выбора
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
