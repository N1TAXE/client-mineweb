jQuery(function ($) {
    $('#toggle-search').click(function () {
        $(this).toggleClass('hide')
        $('#input-search').toggleClass('hide')
    })
    // При клике на кнопку слайда
    $('#media-1').attr('style', `background-image: url(${$('#slide-' + 1).attr('src')})`);
    $('.product__media-buttons-item').click(function() {
        // Удаляем класс 'active' у всех кнопок слайдов
        $('.product__media-buttons-item').removeClass('active');
        // Добавляем класс 'active' только к текущей кнопке слайда
        $(this).addClass('active');

        // Получаем ID текущего слайда
        var slideId = $(this).index() + 1;

        // Удаляем класс 'active' у всех слайдов
        $('.product__media-slides img').removeClass('active');
        // Добавляем класс 'active' только к текущему слайду
        $('#slide-' + slideId).addClass('active');

        // Заменяем изображение в основной картинке на текущий слайд
        $('#media-1').attr('style', `background-image: url(${$('#slide-' + slideId).attr('src')});`);
    });
    $('.product__media-slides-item').click(function() {
        // Удаляем класс 'active' у всех кнопок слайдов
        $('.product__media-buttons-item').removeClass('active');
        // Добавляем класс 'active' только к текущей кнопке слайда

        // Получаем ID текущего слайда
        var slideId = $(this).index() + 1;
        $('.product__media-buttons-item').eq(slideId - 1).addClass('active');

        // Удаляем класс 'active' у всех слайдов
        $('.product__media-slides img').removeClass('active');
        // Добавляем класс 'active' только к текущему слайду
        $('#slide-' + slideId).addClass('active');

        // Заменяем изображение в основной картинке на текущий слайд
        $('#media-1').attr('style', `background-image: url(${$('#slide-' + slideId).attr('src')});`);
    });

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