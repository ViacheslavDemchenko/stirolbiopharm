export default function productionProcess() {

  if(document.querySelectorAll('.production-process__text-content').length > 0) {
    const texts = document.querySelectorAll('.production-process__text-content');
    const stages = document.querySelectorAll('.stage');
    const next = document.querySelector('.production-process__arrows .arrow__next');
    const prev = document.querySelector('.production-process__arrows .arrow__prev');
    let activeText = 0;

    next.addEventListener('click', () => {
      if (activeText < 3) {
        activeText += 1;

        texts.forEach(text => {
          text.classList.remove('production-process__text-content--display');
          text.classList.remove('production-process__text-content--opacity');
        });

        stages.forEach(stage => {
          stage.classList.remove('stage--active');
        });
  
        texts[activeText].classList.add('production-process__text-content--display');

        setTimeout(() => {
          texts[activeText].classList.add('production-process__text-content--opacity');
          stages[activeText].classList.add('stage--active');
        }, 500);
      }
    });

    prev.addEventListener('click', () => {
      if (activeText > 0) {
        activeText -= 1;

        texts.forEach(text => {
          text.classList.remove('production-process__text-content--display');
          text.classList.remove('production-process__text-content--opacity');
        });

        stages.forEach(stage => {
          stage.classList.remove('stage--active');
        });

        texts[activeText].classList.add('production-process__text-content--display');

        setTimeout(() => {
          texts[activeText].classList.add('production-process__text-content--opacity');
          stages[activeText].classList.add('stage--active');
        }, 500);
  
      }

    });
  }
}