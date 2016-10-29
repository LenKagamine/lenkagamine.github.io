---
---
$(function(){
  var $togglebg = $(".toggle-bg");
  var $background = $("#full-page");
  var $wrapper = $(".wrapper");
  var $container = $(".container");

  var $sitetitle = $("#site-title");

  var menulinks = $("#menu");

  var state = 1;

  $togglebg.click(function(){
    state = !state|0;
    $background.css("opacity", state);
    if(state === 0){ //dark
      //$wrapper.css("background-color", "#e0e0e0");
      $sitetitle.css("color", "#fff");
      $container.css("background-color", "#eaeaea");
      menulinks.children().css("color", "#fff");
    }
    else{ //light
      $sitetitle.css("color", "#424242"); //color is "$grey-color-dark" in _cariable.scss
      //$wrapper.css("background-color", "transparent");
      $container.css("background-color", "#fff");
      menulinks.children().css("color", "#111");
    }
  });
});
