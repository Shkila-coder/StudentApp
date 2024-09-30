// Открытие и закрытие модального окна для языка
function openLanguageModal() {
    document.getElementById("languageModal").style.display = "block";
}

function closeLanguageModal() {
    document.getElementById("languageModal").style.display = "none";
}

// Установка языка (реализуйте логику выбора языка)
function setLanguage(language) {
    alert("Language set to: " + language);
    closeLanguageModal();
}

// Закрытие модальных окон при клике вне их
window.onclick = function(event) {
    let languageModal = document.getElementById("languageModal");
    if (event.target === languageModal) {
        closeLanguageModal();
    }
}