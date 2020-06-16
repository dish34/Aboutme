let load = document.getElementById("loader");
let divcontent = document.getElementById("div-content");
setInterval(() => {
  load.style.display = "none";
  divcontent.style.display = "block";
}, 3000);

var typed3 = new Typed("#text", {
  strings: [
    " ",
    " <strong>Competitive Programmer</strong>",
    "<strong>Django Lover</strong>",
    "<strong>Quora Writer</strong>",
    "<strong>A Friend</strong>",
  ],
  typeSpeed: 100,
  backSpeed: 150,
  smartBackspace: true, // this is a default
  loop: true,
});
var x = false;
function play() {
  let audio = document.getElementById("audio");
  let pbtn = document.getElementById("playBtn");
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
var sectionInterval;
var navAnchorTags = document.querySelectorAll(".top-left a");
for (var i = 0; i < navAnchorTags.length - 1; i++) {
  // console.log(navAnchorTags[i]);
  navAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSection = "main-" + this.textContent.trim().toLowerCase();
    if (targetSection === "main-contactme") {
      targetSection = "quora-stats";
    }
    var targetSectionId = document.getElementById(targetSection);
    // console.log(targetSectionId);
    var targetSectionCordinates = targetSectionId.getBoundingClientRect();

    // console.log(targetSectionCordinates.top);
    sectionInterval = setInterval(function () {
      if (targetSectionId.getBoundingClientRect().top <= 50) {
        clearInterval(sectionInterval);
        return;
      }

      window.scrollBy(0, 40);
    }, 20);
    // console.log(targetSectionCordinates.top);
  });
}
