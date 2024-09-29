
// Функция для обновления заголовка в синей полоске с использованием стрелки
function updateTitle(subtitle) {
    const titleElement = document.querySelector('.title');
    titleElement.innerHTML = `My App <i class="fas fa-arrow-right"></i> ${subtitle}`;
}