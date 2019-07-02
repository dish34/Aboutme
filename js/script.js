document.addEventListener('DOMContentLoaded',function (){
  document.querySelector('#b1').onclick = function (){
    document.getElementById('skill').style.display = "block";
    document.getElementById('activity').style.display = "none";
    document.getElementById('project').style.display ="none";
  }
  document.querySelector('#b2').onclick = function(){
    document.getElementById('project').style.display = "block";
    document.getElementById('skill').style.display="none";
    document.getElementById("activity").style.display = "none";
  }
  document.querySelector('#b3').onclick = function(){
    document.getElementById("activity").style.display = "block";
    document.getElementById('skill').style.display="none";
    document.getElementById('project').style.display ="none";
  }
})
