// require clickable

$(document).foundation();
// $(".top-bar").sticky({zIndex:10});

// $('nav#top-nav > ul').addClass('dropdown menu')
// $('nav#top-nav > ul ul').addClass('menu')

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize){
  console.log(newSize);
  console.log(oldSize);
});

if (Foundation.MediaQuery.current == 'small') {
  console.log(Foundation.MediaQuery.current);
  // $('#topbar-menu').hide();
  // $('.is-drilldown').hide();
};

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var slides = document.querySelectorAll('ul.slides .slide');
if (slides.length > 0) {
  var currentSlide = Math.floor(Math.random() * slides.length);
  slides[currentSlide].className = 'slide showing';

  var slideInterval = setInterval(nextSlide, 5000);
}


$(document).on('click', '.clickable', function() {
  window.location.href = $(this).data('url');
  return false;
});
