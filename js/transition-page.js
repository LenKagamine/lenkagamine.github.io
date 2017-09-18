---
---
$(function() {
  if(window.history && window.history.pushState) {
    var $mainContent = $("#content");

    $(document).on("click", "a.fade-link", function(e) {
      link = $(this).attr("href"); //gets the address of new web page (from button/link click)
      if(window.location.pathname !== link) {
        history.pushState(null, null, link);
        changeContent(link); //load new page
      }
      e.preventDefault();
    });
  }

  function changeContent(href) {
    var prevHeight = $mainContent.height();                 // Store old height
    $mainContent.animate({ opacity: 0 }, 200, function() {  // Fade out content
      $mainContent.css("visibility", "hidden");             // Ensure user can't click elements
      $mainContent.load(href + " #content", function() {    // Load new content from new page
        loadImages(function() {                             // Wait for images to load (need for setting page height)
          $mainContent.css("height", "auto");               // Temporarily set height to auto
          var newHeight = $mainContent.height();            // Get target height (with new content)
          $mainContent.height(prevHeight).animate({         // Switch back to old height
            height: newHeight                               // Animate to new height
          }, 400, function() {
            $mainContent.css("visibility", "visible");      // Enable div
            $mainContent.animate({ opacity: 1});            // Fade in content
          });

          // Change title
          var pageText = $(".post-title").text();
          var title = pageText + " | Michael Kim";
          $("title").first().html(title);
          document.title = title;

          // Load MathJax
          MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

          // Load project toggling
          if(pageText === "Projects") initProjects();
        });
      });
    });
  }

  function loadImages(callback) {
    var images = $mainContent.find("img"),
        numImages = images.length;

    images.one("load", function() {
      if(--numImages === 0) callback(); //all images done
    }).each(function() {
      if(this.complete) $(this).on("load"); //if the image was cached
    });

    if(images.length === 0) callback(); //no images to load
  }

  $(window).bind('popstate', function() {
    changeContent(window.location.pathname);
  });
});
