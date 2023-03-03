require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 

import stickyMenu from './modules/stickyMenu'; // Липкое меню
import mobileMenu from './modules/mobileMenu'; // Мобильное меню
import yandexMap from './modules/map.js'; // Карта
import slider from './modules/slider'; // Слайдер
import catalog from './modules/catalog'; // Меню каталога (открытие)
import pills from './modules/pills'; // Левитирующие таблетки

// import accordion from './modules/accordion.js'; // Аккордион

// import modal from './modules/modal'; // Модалки

// stickyMenu();
mobileMenu();
slider();
yandexMap();
catalog();
pills();
// accordion();

// modal();