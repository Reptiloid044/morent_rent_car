'use strict';

const slider = document.getElementById('myRange');
const output = document.getElementById('length');

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

$(document).ready(function() {
  $('.slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav',
  });
});

$('.slider__nav').slick({
  slidesToShow: 2,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  asNavFor: '.slider__for',
  centerMode: true,
  focusOnSelect: true,
});

const heart = document.querySelectorAll('.heart');
const redHeart = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png';
const emptyHeart = 'https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-83nfc3.png';

heart.forEach(item => {
  item.addEventListener('click', function handleClick() {
    if (item.src === emptyHeart) {
      item.src = redHeart;
    } else {
      item.src = emptyHeart;
    }
  });
});
