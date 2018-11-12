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

  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 20, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
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

$(document).ready(function () {
  init();
});



