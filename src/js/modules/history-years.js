export default function historyYears() {

  if(document.querySelectorAll('.about-page__history-text').length > 0) {
    const texts = document.querySelectorAll('.about-page__history-text');
    const years = document.querySelectorAll('.about-page__years span');
    let activeYear = 0;

    years.forEach((year, i) => {
      year.addEventListener('click', (e) => {

        activeYear = i;

        years.forEach(year => {
          year.classList.remove('year--active');
        });

        texts.forEach(text => {
          text.classList.remove('about-page__history-text--display');
          text.classList.remove('about-page__history-text--opacity');
        });

        texts[i].classList.add('about-page__history-text--display');

        setTimeout(() => {
          texts[i].classList.add('about-page__history-text--opacity');
          years[activeYear].classList.add('year--active');
        }, 500);
      });
    });
  }
}