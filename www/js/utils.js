document.addEventListener('DOMContentLoaded', onDOMLoaded);

function onDOMLoaded() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('settings').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    updateTitle('Home'); // Обновляем заголовок

    // Инициализация карты после загрузки DOM
    initializeMap();
}

// Функция для обновления заголовка в синей полоске с использованием стрелки
function updateTitle(subtitle) {
    const titleElement = document.querySelector('.title');
    titleElement.innerHTML = `My App <i class="fas fa-arrow-right"></i> ${subtitle}`;
}

// Функция инициализации карты
function initializeMap() {
    // Проверяем, поддерживается ли геолокация
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError);
    } else {
        console.error("Геолокация не поддерживается вашим браузером.");
    }
}

// Функция для успешного получения геолокации
function onMapSuccess(position) {
    const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "Вы здесь!"
    });
}

// Функция для обработки ошибок при получении геолокации
function onMapError(error) {
    console.error("Ошибка геолокации: " + error.message);
}


