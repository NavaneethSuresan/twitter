//JavaScript file////
//////////////////

$(function () {
  $(".js-menu-icon").click(function () {
    $(this).next().toggle();
    $('#lk').css('background-color','red')
  });
});

