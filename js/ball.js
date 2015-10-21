$(document).ready(function(){

  // selector for bowling ball where you see __ (keep the single quotes!)
  $('__').click(function() {
    $(this).animate({
      bottom: "400px"}).animate({left: "330px"}).animate({top: "45px"}).animate({left: "420px"});
  });

  // Selector for basketball where you see __ (keep the single quotes!)
  $('__').click(function() {
    $(this).animate({
      bottom: "400px"}).animate({left: "290px"}).animate({top: "30px"});
  });

  // Selector for beachball where you see __ (keep the single quotes!)
  $('__').click(function() {
    $(this).animate({
      bottom: "420px"}).animate({left: "200px"}).animate({top: "20px"}).animate({left: "400px"});
  });

  // Selector for tennis ball where you see __ (keep the single quotes!)
  $('__').click(function() {
    $(this).animate({
      bottom: "510px"}).animate({left: "190px"}).animate({top: "20px"}).animate({left: "500px"})
  });




});