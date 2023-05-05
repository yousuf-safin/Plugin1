$(document).ready(function(){
var typed = new Typed('.type', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      'A full stack Web-Developer.',
      'Designer.',
      'Content Creator.',
      'Thank You.'
    ],
    stringsElement: null,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed: 30,

    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay: 200,

    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed: 0,

    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace: true,

    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle: false,

    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay: 700,

    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     * @property {string} fadeOutClass css class for fade animation
     * @property {boolean} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,

    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: 5,

    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: false,
    cursorChar: '|',
    autoInsertCss: true,

    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr: null,

    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents: false,

    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType: 'html'
});
$('.demo').textyle({
  callback : function(){
    $(this).css({
      color : 'coral',
      transition : '1.5s',
      // more css here
    });
  }
});
// mixitup
$(document).ready(function(){
    var mixer = mixitup('.box-list')
});
// paralax
$('.parallax-window').parallax({imageSrc: 'img/para.jpg'});
// carousel
$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
// owl_carousel
$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
$('.img-area').hiSlide();

});
var gallery = $('.gallery a').simpleLightbox({
    /* options */
});
// js
new WOW().init();
AOS.init();

