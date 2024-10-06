document.addEventListener('DOMContentLoaded', onDOMLoaded);

function onDOMLoaded() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('settings').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    updateTitle('Home'); // Обновляем заголовок
}
// Функция для обновления заголовка в синей полоске с использованием стрелки
function updateTitle(subtitle) {
    const titleElement = document.querySelector('.title');
    titleElement.innerHTML = `My App <i class="fas fa-arrow-right"></i> ${subtitle}`;
}