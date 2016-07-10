$(function(){
  if(window.history && window.history.pushState){
    var $mainContent = $("#content"),
        $pageWrap    = $("#post");

    $pageWrap.height($pageWrap.height());
    console.log("content: " + $mainContent.height() + ", page: " + $pageWrap.height());

    $("#links").on("click", "a", function(e) {
      link = $(this).attr("href"); //gets the address of new web page (from button/link click)
      if(window.location.pathname !== link){
        history.pushState(null, null, link);
        changeContent(link); //load new page
      }
      e.preventDefault();
    });
  }

  function changeContent(href){
    $mainContent //get div that needs to be changed
      .fadeOut(200, function() { //fade out over 200 ms, then...
        $mainContent.load(href + " #content", function() { //get new div from new page and set div to it
          var images = $mainContent.find("img"),
              numImages = images.length;

          images.one("load", function(){
            if(--numImages === 0) showContent(); //all images done
          }).each(function(){
            if(this.complete) $(this).on("load"); //if the image was cached
          });

          if(images.length === 0) showContent(); //no images to load
        });
      });
  }

  function showContent(){
    $mainContent.fadeIn(200); //fade back content
    $pageWrap.animate({
      height: $mainContent.height() + "px" //re-adjust height of div
    });
  }

  $(window).bind('popstate', function(){
    changeContent(window.location.pathname);
  });
});
