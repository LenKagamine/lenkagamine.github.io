---
---
$(function() {
  /* Toggle light/dark theme */
  var $togglebg = $(".toggle-bg");
  var $background = $("#full-page-color");
  var $container = $(".container");
  var $lightchain = $(".chain");

  var $sitetitle = $("#site-title");
  var $menulinks = $("#menu");

  var $sitenav = $(".site-nav");

  var $menugithub = $("#menu-github");
  var $menulinked = $("#menu-linkedin");
  var $menuicon = $("#menu-icon");
  var $bulbicon = $("#bulb-icon");

  var state = 0;

  $togglebg.click(function() {
    state = !state|0;
    $background.css("opacity", state);
    if(state === 1) { //dark
      $sitetitle.css("color", "#fff");
      $container.css("background-color", "#eaeaea");
      $sitenav.toggleClass("site-nav site-nav-dark");
      $menulinks.children().css("color", "#fff");
      $lightchain.height(100);
      $lightchain.removeClass("light-on").addClass("light-off");

      $menugithub.css("fill", "#fff");
      $menulinked.css("fill", "#fff");
      $menuicon.children().css("fill", "#fff");
      $bulbicon.css("fill", "#fff");
    }
    else { //light
      $sitetitle.css("color", "#424242"); //color is "$grey-color-dark" in _cariable.scss
      $container.css("background-color", "#fff");
      $sitenav.toggleClass("site-nav site-nav-dark");
      $menulinks.children().css("color", "#111");
      $lightchain.height(150);
      $lightchain.removeClass("light-off").addClass("light-on");

      $menugithub.css("fill", "#000");
      $menulinked.css("fill", "#0083be");
      $menuicon.children().css("fill", "#505050");
      $bulbicon.css("fill", "#000");
    }
  });

  initProjects();
});

function initProjects() {  /* Toggle projects */
  var shown = []; //nth project shown?
  var projects = []; //jQuery object of nth project

  function showAll() {
    for(var i=0;i<projects.length;i++) {
      showProject(i);
    }
  }

  function showProject(i) {
    if(!shown[i]) {
      var index = projects[i].data("index");
      var visibleNum = $(".project-link").length;
      if(index < visibleNum) $(".project-link").eq(index).before(projects[i]);
      else $(".project-link").last().after(projects[i]);
    }
    shown[i] = true;
  }

  function hideProject(i) {
    if(shown[i]) {
      projects[i].detach();
    }
    shown[i] = false;
  }

  var projectTools = []; //array of tools of nth project
  $(".project-link").each(function(i, obj) {
    projectTools[i] = $(obj).find("h4").html().substring(7).split(", ");
    projects[i] = $(obj);
    shown[i] = true;
    $(obj).data("index", i);
  });

  var prev = ""; //last clicked tool (for undo toggle)
  $(".tools").each(function(i, obj) {
    $(obj).children().first().click(function(e) {
      var name = e.target.innerHTML;
      showAll();
      if(prev !== name) {
        for(var j=0;j<projectTools.length;j++) {
          if(projectTools[j].indexOf(name) === -1) {
            if(shown[j]) hideProject(j);
            else showProject(j);
          }
        }
        prev = name;
      }
      else prev = "";
    });
  });
}
