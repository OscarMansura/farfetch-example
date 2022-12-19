// inserir arrays / imagens para o slideshow
const slideshowImages = [
  'https://placeimg.com/1640/700/animals',
  'https://placeimg.com/1640/700/arch',
  'https://placeimg.com/1640/700/nature',
  'https://placeimg.com/1640/700/people',
  'https://placeimg.com/1640/700/tech',
];
let index = 0;

// setTimeout ou setInterval a cada 7,5 segundos
let intervalNextSlide = setInterval(nextSlide, 7500);

// clearTimeout ou clearInterval + os botões a mudar as imagens 
document.querySelector('.slideshow').addEventListener('click', clearSlideInterval);
document.querySelector('.slideshow__button--prev').addEventListener('click', prevSlide);
document.querySelector('.slideshow__button--next').addEventListener('click', nextSlide);
document.querySelectorAll('.slideshow__dot').forEach((element) => {
  element.addEventListener('click', onDotClick);
});

function clearSlideInterval() {
  clearInterval(intervalNextSlide);
}

function prevSlide() {
  index = index - 1;
  if (index < 0) {
      index = slideshowImages.length - 1;
  }

  changeSlide();
}

function nextSlide() {
  index = index + 1;
  if (index >= slideshowImages.length) {
      index = 0;
  }

  changeSlide();
}

function onDotClick(event) {
  index = event.target.textContent - 1;

  changeSlide();
}

function changeSlide() {
  document.querySelector('.slideshow__dot--active')?.classList.remove('slideshow__dot--active');
  document.querySelector(`.slideshow__dot:nth-child(${index + 1})`).classList.add('slideshow__dot--active');

  //document.querySelector('.slideshow__image').setAttribute('src', slideshowImages[index]);
  document.querySelector('.slideshow__image').src = slideshowImages[index];
}

