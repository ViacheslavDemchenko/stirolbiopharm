export default function mobileMenu() {
  if(document.getElementById('menu__button')) {
    const hamburger = document.getElementById('menu__button');
    const mobileMenu = document.querySelector('.nav');
    const mobileMenuItems = document.querySelectorAll('nav ul li');
    const htmlElement = document.getElementsByTagName('html')[0];

    const body = document.body;
    let screenWidth = window.innerWidth;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('nav--active');
      body.classList.toggle('no-scroll');
      htmlElement.classList.toggle('no-scroll');
    });

    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth;

      if (screenWidth < 1200) {
          linksClick();
      }

      if (screenWidth >= 1200) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('nav--active');
        body.classList.remove('no-scroll');
        htmlElement.classList.remove('no-scroll');
      } 
    });

    function linksClick() {
      mobileMenuItems.forEach(link => {
        link.addEventListener('click', (e) => {
            if (screenWidth < 1200) {
              hamburger.classList.remove('active');
              mobileMenu.classList.remove('nav--active');
              body.classList.remove('no-scroll');
              htmlElement.classList.remove('no-scroll');
            }
        });
      });
    }
    linksClick();
  }
}
