$(function(){
  if(window.history && window.history.pushState){
    var $mainContent = $("#content"),
        $pageWrap    = $("#post"),
        baseHeight   = $pageWrap.height() - $mainContent.height(),
        pushedState  = false;

    $pageWrap.height($pageWrap.height());

    $("#links").on("click", "a", function(e) {
      link = $(this).attr("href"); //gets the address of new web page (from button/link click)
      if(window.location.pathname !== link){
        history.pushState(null, null, link);
        pushedState = true;
        changeContent(link); //load new page
      }
      e.preventDefault();
    });
  }

  function changeContent(href){
    $mainContent //get div that needs to be changed
      .fadeOut(200, function() { //fade out over 200 ms, then...
        $mainContent.hide().load(href + " #content", function() { //get new div from new page and set div to it
          $pageWrap.animate({
            height: baseHeight + $mainContent.height() + "px" //readjust height of div (#guts), then...
          }, function(){
            $mainContent.fadeIn(200); //fade in over 200 ms
          });
        });
      });
  }

  $(window).bind('popstate', function(){
    changeContent(window.location.pathname);
  });
});
