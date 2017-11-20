// require clickable
$(document).foundation();
// $(".top-bar").sticky({zIndex:10});

$('nav#top-nav > ul').addClass('dropdown menu')
$('nav#top-nav > ul ul').addClass('menu')

var slides = document.querySelectorAll('ul.slides .slide');
var currentSlide = Math.floor(Math.random() * slides.length);
slides[currentSlide].className = 'slide showing';

var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
