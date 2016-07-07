/*
TODO:
  rewrite changebg (doesn't work in IE and sometimes flickers)
*/
function changebg(){
  if(document.getElementById("toggle-bg").innerHTML === "DARK"){
    document.body.style.backgroundColor = "#373737";
    document.body.style.backgroundImage = "url(/images/bg-dark.png)";
    document.getElementById("toggle-bg").innerHTML = "LIGHT";
  }
  else{
    document.body.style.backgroundColor = "#eaeaea";
    document.body.style.backgroundImage = "url(/images/bg.png)";
    document.getElementById("toggle-bg").innerHTML = "DARK";
  }
}
