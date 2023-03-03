export default function catalog() {

  if (document.querySelector('.medicine__menu-title')) {
    const catalogBtn = document.querySelector('.medicine__menu-title');
    const catalogList = document.querySelector('.medicine__menu-list');
    const catalogAlphabet = document.querySelector('.medicine__products-alphabet');

    let screenWidth = window.innerWidth;

    const catalogMenuOpen = () => {
      catalogBtn.addEventListener('click', () => {
        catalogList.classList.toggle('medicine__menu-list--active');
        catalogAlphabet.classList.toggle('medicine__products-alphabet--active');
      });
    };
    catalogMenuOpen();

    const catalogMenuLinks = () => {
      catalogList.addEventListener('click', (e) => {
        if(e.target.classList.contains('medicine__menu-link')) {
          catalogMenuClose();
        }
      });
    };
    catalogMenuLinks();

    const catalogMenuClose = () => {
      console.log('yes');
      catalogList.classList.remove('medicine__menu-list--active');
      catalogAlphabet.classList.remove('medicine__products-alphabet--active');
    };

    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth;
      console.log(screenWidth);

      if (screenWidth < 1200) {
        catalogMenuOpen();
      }

      if (screenWidth >= 1200) {
        catalogMenuClose();
      } 
    });
  }
}