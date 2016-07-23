$(function(){
  var $bg = $(".toggle-bg");
  var $fp = $("#full-page");
  var $wr = $(".wrapper");
  var $ct = $(".container");

  var state = 1;

  $bg.click(function(){
    state = !state|0;
    $fp.css("opacity", state);
    if(state === 0){
      $wr.css("background-color", "#e0e0e0");
      $ct.css("background-color", "#eaeaea");
    }
    else{
      $wr.css("background-color", "transparent");
      $ct.css("background-color", "#fff");
    }
    /*if($bg.html() === "DARK"){
      $fp.css("opacity", 0);
      $bg.html("LIGHT");
    }
    else{
      $fp.css("opacity", 1);
      $bg.html("DARK");
    }*/
  });
});
