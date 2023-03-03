export default function pills() {
  if(document.querySelector('.products__items')) {
    const items = document.querySelectorAll('.products__item-icon');
    
    function showPills() {
      items.forEach(item => {
        item.addEventListener('mouseenter', () => {
          item.parentNode.querySelectorAll('.products__item-pill')[0].style.transform = "translateY(-20px) rotate(220deg)";
          item.parentNode.querySelectorAll('.products__item-pill')[1].style.transform = "translateY(-30px) rotate(180deg)";
          item.parentNode.querySelectorAll('.products__item-pill')[2].style.transform = "translateY(-40px) rotate(280deg)";
          item.parentNode.querySelectorAll('.products__item-pill')[0].style.transition = "all 1s ease-in-out";
          item.parentNode.querySelectorAll('.products__item-pill')[1].style.transition = "all 1s ease-in-out";
          item.parentNode.querySelectorAll('.products__item-pill')[2].style.transition = "all 1s ease-in-out";
        });

        item.addEventListener('mouseleave', () => {
          item.parentNode.querySelectorAll('.products__item-pill')[0].style.transform = "";
          item.parentNode.querySelectorAll('.products__item-pill')[1].style.transform = "";
          item.parentNode.querySelectorAll('.products__item-pill')[2].style.transform = "";
        });
      });
    }
    showPills();
  }
}