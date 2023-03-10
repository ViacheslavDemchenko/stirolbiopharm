require('polyfill-nodelist-foreach'); // Полифил для поддержки метода forEach в IE11+ и Safari9
require('svgxuse'); // Полифил для поддержки IE11+ и старыми браузерами использования SVG через use 

import stickyMenu from './modules/stickyMenu'; // Липкое меню
import mobileMenu from './modules/mobileMenu'; // Мобильное меню
import yandexMap from './modules/map.js'; // Карта
import achievements from './modules/achievements'; // Слайдер граммот секции Наши достижения
import laboratories from './modules/laboratories'; // Слайдер граммот логотипов лабораторий страница Производство
import catalog from './modules/catalog'; // Меню каталога (открытие)
import pills from './modules/pills'; // Левитирующие таблетки
import video from './modules/video'; // Манипуляции с запуском видео
import productionProcess from './modules/production-process'; // Текстовый слайдер старницы Процесс производства
import historyYears from './modules/history-years'; // Текстовый слайдер на странице О компании

// import accordion from './modules/accordion.js'; // Аккордион

// import modal from './modules/modal'; // Модалки

// stickyMenu();
mobileMenu();
achievements();
laboratories();
yandexMap();
catalog();
pills();
video();
productionProcess();
historyYears();
// accordion();

// modal();