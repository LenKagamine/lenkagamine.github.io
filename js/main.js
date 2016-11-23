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
  var $menulinked = $("#menu-linkedin");
  var $menuicon = $("#menu-icon");
  var $bulbicon = $("#bulb-icon");

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
      $menulinked.css("fill", "#fff");
      $menuicon.children().css("fill", "#fff");
      $bulbicon.css("fill", "#fff");
    }
    else{ //light
      $sitetitle.css("color", "#424242"); //color is "$grey-color-dark" in _cariable.scss
      $container.css("background-color", "#fff");
      $sitenav.toggleClass("site-nav site-nav-dark");
      $menulinks.children().css("color", "#111");

      $menugithub.css("fill", "#000");
      $menulinked.css("fill", "#0083be");
      $menuicon.children().css("fill", "#505050");
      $bulbicon.css("fill", "#000");
    }
  });
});
