let isMenuOpen = false;

function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    if (isMenuOpen) {
        sideMenu.style.left = "-45%";
    } else {
        sideMenu.style.left = "0";
    }
    isMenuOpen = !isMenuOpen;
}

// Ловим свайп влево для закрытия бокового меню
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let xStart = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xStart = firstTouch.clientX;
}

function handleTouchMove(evt) {
    if (!xStart) {
        return;
    }

    const xMove = evt.touches[0].clientX;
    const xDiff = xStart - xMove;

    // Проверка на свайп влево
    if (xDiff > 0 && isMenuOpen) {
        toggleMenu(); // Закрытие меню при свайпе влево
    }

    xStart = null; // Сброс начальной точки
}