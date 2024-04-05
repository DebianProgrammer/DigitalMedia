var amount_clicked = 0;

function scare() {
  document.documentElement.style.setProperty('--color-text', '#FF0000');
  document.documentElement.style.setProperty('--color-superlight', '#FF0000');
  document.documentElement.style.setProperty('--color-bg', '#50000F');
  document.documentElement.style.setProperty('--color-dark', '#000000');
  var elements = document.getElementsByClassName("aboutmestyle")[0].children;
  elements[0].innerText = "Run";
  elements[1].innerText = "They are behind you";

  topnav = document.getElementsByClassName("topnav")[0]
  topnav.style.setProperty("transform", "rotate(45deg)");
  topnav.style.setProperty("transition", "transform 0.5s");
  var topnav_ch = topnav.children;
  for (var i = 0; i < topnav_ch.length; i++) {
    topnav_ch[i].innerText = "Run";
  }
}

window.onload = function(){
  var hello = document.getElementById("helloimage");
  hello.addEventListener("click", () => {
    amount_clicked = amount_clicked + 1;
    if(amount_clicked == 5) {
      scare();
      hello.style.setProperty("display", "none");
      var scare_audio = new Audio("scripts/scare.opus");
      scare_audio.play();
    }
  });
}

