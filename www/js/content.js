// Функция для загрузки домашнего контента
function loadHome() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('settings').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    updateTitle('Home'); // Обновляем заголовок
    toggleMenu();
}

// Функция для загрузки страницы настроек
function loadSettings() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('settings').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
    updateTitle('Settings'); // Обновляем заголовок
    toggleMenu(); // Закрыть меню после выбора
}

// Функция для загрузки страницы профиля
function loadProfile() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('settings').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    updateTitle('Profile'); // Обновляем заголовок
    toggleMenu();
}

// Функция для применения класса active
function makeActive(button) {
    // Убираем класс active у всех кнопок
    const buttons = document.querySelectorAll('.settings-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Добавляем класс active на нажатую кнопку
    button.classList.add('active');
}