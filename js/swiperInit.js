// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var w = window.innerWidth;

var swiper = new Swiper('.swiper-container', {
    slidesPerView: w <= 600 ? 1 : 3,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});