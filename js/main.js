$(function(){
  var $bg = $("#toggle-bg");
  var $fp = $("#full-page");

  $bg.click(function(){
    if($bg.html() === "DARK"){
      $fp.css("opacity", 0);
      $bg.html("LIGHT");
    }
    else{
      $fp.css("opacity", 1);
      $bg.html("DARK");
    }
  });
});
