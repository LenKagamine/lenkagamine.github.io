$(function(){
  var $togglebg = $(".toggle-bg");
  var $background = $("#full-page");
  var $wrapper = $(".wrapper");
  var $container = $(".container");

  var state = 1;

  $togglebg.click(function(){
    state = !state|0;
    $background.css("opacity", state);
    if(state === 0){
      $wrapper.css("background-color", "#e0e0e0");
      $ccontainert.css("background-color", "#eaeaea");
    }
    else{
      $wrapper.css("background-color", "transparent");
      $container.css("background-color", "#fff");
    }
  });
});
