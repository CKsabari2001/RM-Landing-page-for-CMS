$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".fixed_header").addClass("scrolled");
    } else {
      $(".fixed_header").removeClass("scrolled");
    }
  });
});
