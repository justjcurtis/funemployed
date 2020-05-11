
const IsMobile = () =>{
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

const newSwiper = (initialSlide=0, loop=false, pagination=false) =>{
    return new Swiper('.swiper-container', {
        loop: loop,
        grabCursor: true,
        initialSlide: initialSlide,
        centeredSlides: true,
        pagination: pagination ? {
          el: '.swiper-pagination',
          type: 'bullets',
        }: {},
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
    });
}