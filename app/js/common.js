$(function() {

	//input mask phone
  $("input[name*='phone']").inputmask("+7 (999) 999-99-99");

	//popup
  $(".open-popup").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
	//burger
  $(".burger").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").fadeToggle();
    $('body').toggleClass('fixed')
  });

  $(".mobile-menu__url").click(function () {
    $(".mobile-menu").fadeToggle();
    $('body').removeClass('fixed');
    $(".burger").removeClass("active");
  });
   

  //swiper
  var newsSwiper = new Swiper('.news-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.news-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
  if ($(window).width() < 769) {
    var teamSwiper = new Swiper('.team-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.team-pagination',
        clickable: true,
      },
    });
  }
});
