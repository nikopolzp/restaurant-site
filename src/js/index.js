// import Swiper JS
import Swiper, { Navigation, Autoplay } from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';

const swiper = new Swiper('.mini-slider-1', {
  modules: [Navigation, Autoplay],
  speed: 3500,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

const swiperSlider = new Swiper('.mini-slider-r', {
  modules: [Navigation, Autoplay],
  speed: 3500,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

const sliderS = new Swiper('.slider-3', {
  modules: [Navigation, Autoplay],
  speed: 3500,
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 34,
    },
    1280: {
      spaceBetween: 86,
    },
  },
});
const slReverse = new Swiper('.slider-3-r', {
  modules: [Navigation, Autoplay],
  speed: 3500,
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 34,
    },
    1280: {
      spaceBetween: 86,
    },
  },
});
// ---- smooth scroll

const btn = document.getElementById('scroll-btn');
const el = document.getElementById('price-menu');

if (btn !== null) {
  btn.addEventListener('click', function () {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
