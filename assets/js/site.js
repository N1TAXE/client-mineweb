let menuButton = document.getElementById('mobile-menu');
let header = document.getElementById('header');
let mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    header.classList.toggle('show');
    let isVisible = mobileMenu.style.display === 'block';

    if (isVisible) {
        mobileMenu.style.display = 'none'; // Скрываем меню
    } else {
        mobileMenu.style.display = 'block'; // Показываем меню
    }
}

menuButton.addEventListener('click', toggleMobileMenu);