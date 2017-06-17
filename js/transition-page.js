---
---
$(function(){
  if(window.history && window.history.pushState){
    var $mainContent = $("#content"),
        $pageWrap    = $("#post");

    $(document).on("click", "a.fade-link", function(e) {
      link = $(this).attr("href"); //gets the address of new web page (from button/link click)
      if(window.location.pathname !== link){
        history.pushState(null, null, link);
        changeContent(link); //load new page
      }
      e.preventDefault();
    });
  }

  function changeContent(href){
    $pageWrap.height($pageWrap.height());
    $mainContent //get div that needs to be changed
      .fadeOut(200, function() { //fade out over 200 ms, then...
        $mainContent.load(href + " #content", function() { //get new div from new page and set div to it
          loadImages(function(){
            $mainContent.fadeIn(200); //fade back content
            $pageWrap.animate({
              height: $mainContent.height() + "px" //re-adjust height of div
            }, 400, function(){
              $pageWrap.height("auto"); //set height back to auto
            });
            // Change title
            var title = $(".post-title").text() + " | Michael Kim";
            document.getElementsByTagName('title')[0].innerHTML = title;
            document.title = title;

            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

            if($(".post-title").text() === "Projects") initProjects();
          });
        });
      });
  }

  function loadImages(callback){
    var images = $mainContent.find("img"),
        numImages = images.length;

    images.one("load", function(){
      if(--numImages === 0) callback(); //all images done
    }).each(function(){
      if(this.complete) $(this).on("load"); //if the image was cached
    });

    if(images.length === 0) callback(); //no images to load
  }

  $(window).bind('popstate', function(){
    changeContent(window.location.pathname);
  });
});
