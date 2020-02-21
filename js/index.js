var typed3 = new Typed("#text", {
  strings: [
    " ",
    " <strong>Competitive Programmer</strong>",
    "<strong>Django Lover</strong>",
    "<strong>Quora Writer</strong>",
    "<strong>A Friend</strong>"
  ],
  typeSpeed: 100,
  backSpeed: 150,
  smartBackspace: true, // this is a default
  loop: true
});
var x = false;
function play() {
  var audio = document.getElementById("audio");
  var pbtn = document.getElementById("playBtn");
  if (x == false) {
    audio.play();
    pbtn.value = "⏸️";
    x = true;
  } else {
    audio.pause();
    pbtn.value = "▶️";
    x = false;
  }
}
