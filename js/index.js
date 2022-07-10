let load = document.getElementById("loader");
let divcontent = document.getElementById("div-content");
setInterval(() => {
  load.style.display = "none";
  divcontent.style.display = "block";
}, 3000);
window.addEventListener(
  "scroll",
  function (event) {
    var top = this.scrollY,
      left = this.scrollX;
    var header = document.querySelector(".top-content");
    if (top != 0) {
      header.style.backgroundColor = "black";
      header.style.zIndex = "100";
      header.style.opacity = "0.85";
    } else {
      header.style.opacity = "1";
      header.style.backgroundColor = "transparent";
    }
  },
  false
);
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
  navAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSection = "main-" + this.textContent.trim().toLowerCase();
    if (targetSection === "main-contactme") {
      targetSection = "quora-stats";
    }
    var targetSectionId = document.getElementById(targetSection);
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
var progressBars = document.querySelectorAll(".skill > div");

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}

for (var bar of progressBars) {
  initialiseBar(bar);
}
function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 6);
}
function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}
window.addEventListener("scroll", checkScroll);
