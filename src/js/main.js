// Import our custom CSS
import "../scss/styles.scss"

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap"



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination, Autoplay],

  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});