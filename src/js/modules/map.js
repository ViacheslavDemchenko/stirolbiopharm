const yandexMap = () => {
  ymaps.ready(function () {

    if (document.getElementById('map')) {
      var myMap = new ymaps.Map('map', {
        center: [48.299, 38.115],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search',
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      }, {
        iconLayout: 'default#image',
        iconImageHref: './wp-content/themes/stirolbiopharm/assets/img/icons/logo-circle.svg',
        iconImageSize: [120, 50],
        iconImageOffset: [-48, -30]
      })
    myMap.behaviors.disable('scrollZoom');
    // map.behaviors.disable('multiTouch');
    // map.behaviors.disable('drag');
    myMap.geoObjects
    .add(myPlacemark);
    }
  });
};

export default yandexMap;