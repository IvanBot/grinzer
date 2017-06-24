require('bootstrap');

(function() {

  $(".card").on("show.bs.collapse hide.bs.collapse", function(e) {
    if (e.type=='show'){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });

}).call(this);

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
  }, 800);
  });
}

$('#switch').click(function (event) {
  event.preventDefault();
  $('#about').scrollView();
});

// scroll for navigation
