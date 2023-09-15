// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderCurrent = document.querySelector('.slider__current');
const sliderAll = document.querySelector('.slider__all');

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
    },
    watchActiveIndex: true,
});

sliderAll.textContent = '/' + swiper.slides.length
sliderCurrent.textContent =  1;

swiper.on('slideChange', (e) => {
    sliderCurrent.textContent =e.activeIndex + 1;
  });