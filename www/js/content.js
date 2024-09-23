// Функция для загрузки домашнего контента
function loadHome() {
    document.getElementById('main-content').innerHTML = `
        <h1>Welcome to the app</h1>
        <p>This is your content.</p>
    `;
    updateTitle('Home'); // Обновляем заголовок
    toggleMenu(); // Закрыть меню после выбора
}

// Функция для загрузки страницы настроек
function loadSettings() {
    document.getElementById('main-content').innerHTML = `
        <button class="settings-btn" onclick="makeActive(this)">Change Theme</button>
        <button class="settings-btn" onclick="makeActive(this)">Change Language</button>
        <button class="settings-btn" onclick="makeActive(this)">About</button>
    `;
    updateTitle('Settings'); // Обновляем заголовок
    toggleMenu(); // Закрыть меню после выбора
}

// Функция для применения класса active
function makeActive(button) {
    // Убираем класс active у всех кнопок
    const buttons = document.querySelectorAll('.settings-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавляем класс active на нажатую кнопку
    button.classList.add('active');
}