---
---
$(function(){
  var $togglebg = $(".toggle-bg");
  var $background = $("#full-page");
  var $container = $(".container");

  var $sitetitle = $("#site-title");
  var $menulinks = $("#menu");

  var $sitenav = $(".site-nav");

  var $menugithub = $("#menu-github");

  var state = 1;

  $togglebg.click(function(){
    state = !state|0;
    $background.css("opacity", state);
    if(state === 0){ //dark
      $sitetitle.css("color", "#fff");
      $container.css("background-color", "#eaeaea");
      $sitenav.toggleClass("site-nav site-nav-dark");
      $menulinks.children().css("color", "#fff");

      $menugithub.css("fill", "#fff");
    }
    else{ //light
      $sitetitle.css("color", "#424242"); //color is "$grey-color-dark" in _cariable.scss
      $container.css("background-color", "#fff");
      $sitenav.toggleClass("site-nav site-nav-dark");
      $menulinks.children().css("color", "#111");

      $menugithub.css("fill", "#000");
    }
  });
});
