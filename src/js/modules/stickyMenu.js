export default function stickyMenu() {
  const menu = document.querySelector('.header');
  const headerBg = document.querySelector('.header__bg');
  const menuHeight = menu.getBoundingClientRect().height;
  const clientW = document.body.scrollWidth;
  const screnW = screen.availWidth;
  let headerScrollFromTop;

  if (screnW > 1320) {
    headerScrollFromTop = 400;
  } else {
    headerScrollFromTop = 100;
  }

  document.body.addEventListener('scroll', () => {
    const distanceScrolled = document.body.scrollTop;
    if(distanceScrolled > headerScrollFromTop) {
      menu.classList.add('header--fixed');
      headerBg.style.paddingTop = `${menuHeight}px`;
    }
    else { 
      menu.classList.remove('header--fixed');
      headerBg.style.paddingTop = 0;
    }
  });
}