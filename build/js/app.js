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


$("#navbar .nav-link").each(function () {
    $(this).click(function (event) {

        var width = $( window ).width();

        if (width > 991) {
            // для desktop
            event.preventDefault();
            var link = $(this).attr('href')
            $(link).scrollView();
        }

        else {
            // для мобилок
            $('#navbar').collapse('toggle')
        }

    });
});
