$(document).ready(function(){

  // selector for bowling ball
  $('#bowling-ball').click(function() {
    $(this).animate({
      bottom: "400px"}).animate({left: "370px"}).animate({top: "45px"});
  });

  $('.basketball').click(function() {
    $(this).animate({
      bottom: "400px"}).animate({left: "370px"}).animate({top: "30px"});
  });

  $('img[alt="rainbow beachball"]').click(function() {
    $(this).animate({
      bottom: "420px"}).animate({left: "360px"}).animate({top: "20px"}).animate({left: "400px"});
  });

  $('div#tennis-ball img').click(function() {
    $(this).animate({
      bottom: "510px"}).animate({left: "450px"}).animate({top: "20px"}).animate({left: "500px"})
  });




});