

function init() {
  $('.section__home').onepage_scroll({
      sectionContainer: ".sl",     // sectionContainer accepts any kind of selector in case you don't want to use section
      easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
      animationTime: 700,             // AnimationTime let you define how long each section takes to animate
      pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
      updateURL: false,
      loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
      keyboard: true,                  // You can activate the keyboard controls
      responsiveFallback: 1200,        // You can fallback to normal page scroll by defining the width of the browser in which
      direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    }
  );

  $('.ecology__button > input').click( function () {
    tabs();
  });

  tabs();
  slickSetting();
}

function tabs() {
  var health = $(".ecology__button input:checked");
  if(health[0].id === 'health'){
    $('.ecology__health').css({'opacity': 1, 'z-index': 50 });
    $('.ecology__service').css({'opacity': 0, 'z-index': -1 });
    $('.button__service').removeClass('button__active');
    $('.button__health').addClass('button__active');
  }else{
    $('.ecology__service').css({'opacity': 1, 'z-index': 50 });
    $('.ecology__health').css({'opacity': 0, 'z-index': -1 });
    $('.button__health').removeClass('button__active');
    $('.button__service').addClass('button__active');
  }
}


function slickSetting() {
  $('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    dotsClass: 'slider-dots'
  });
}

init();


