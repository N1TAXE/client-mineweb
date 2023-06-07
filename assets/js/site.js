jQuery(function ($) {
function toggleActiveClass() {
    var navElement = document.querySelector('.header__nav');
    var logotypeElement = document.querySelector('.header__logotype');
    var headerElement = document.querySelector('.header');
    var searchWrapperElement = document.querySelector('.header__search-wrapper');
    var menuIconElement = document.querySelector('.menu-icon');


    var isNavActive = navElement.classList.contains('active');
    var isLogotypeActive = logotypeElement.classList.contains('active');
    var isHeaderActive = headerElement.classList.contains('active');
    var isSearchWrapperElement = headerElement.classList.contains('active');
    var isMenuIconElement = headerElement.classList.contains('active');

    if (isNavActive && isLogotypeActive && isHeaderActive && isSearchWrapperElement && isMenuIconElement) {
        navElement.classList.remove('active');
        logotypeElement.classList.remove('active');
        headerElement.classList.remove('active');
        searchWrapperElement.classList.remove('active');
        menuIconElement.classList.remove('active');
    }

    else {
        navElement.classList.add('active');
        logotypeElement.classList.add('active');
        headerElement.classList.add('active');
        searchWrapperElement.classList.add('active');
        menuIconElement.classList.add('active');
    }
}

var iconMenu = document.querySelector('.menu-icon');
iconMenu.addEventListener('click', toggleActiveClass);

});