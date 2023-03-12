export default function video() {

  if (document.querySelector('.youtube')) {
    const video = document.querySelector('.youtube');
    const play = document.querySelector('.play');
    const iframe = document.getElementsByTagName('iframe')[0];

    video.addEventListener('click', () => {
      play.style.display = 'none';
      iframe.style.display = 'block';
    });
  }
}