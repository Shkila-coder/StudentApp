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

function initializeMap() {
    // Ожидание загрузки API Яндекс.Карт
    ymaps.ready(function () {
        // Создание карты в контейнере #map
        var map = new ymaps.Map("map", {
            center: [55.751244, 37.618423], // Координаты центра (например, Москва)
            zoom: 10
        });

        // Определение местоположения пользователя
        if (navigator.geolocation) {
            // Пытаемся получить местоположение
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    onMapSuccess(position, map);
                },
                onMapError
            );
        } else {
            alert("Геолокация не поддерживается вашим устройством");
        }
    });
}

// Функция успешного получения местоположения
function onMapSuccess(position, map) {
    var userCoordinates = [position.coords.latitude, position.coords.longitude];

    // Центрирование карты на местоположении пользователя
    map.setCenter(userCoordinates);

    // Добавление метки местоположения
    var placemark = new ymaps.Placemark(userCoordinates, {
        hintContent: 'Ваше местоположение',
        balloonContent: 'Вы здесь'
    });

    map.geoObjects.add(placemark);
}

// Функция обработки ошибок
function onMapError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Пользователь отклонил запрос на геолокацию.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Информация о местоположении недоступна.");
            break;
        case error.TIMEOUT:
            alert("Превышено время ожидания запроса на геолокацию.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Произошла неизвестная ошибка.");
            break;
    }
}



