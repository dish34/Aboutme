function revealMessage(num) {
  if(num == 1){
  //var x = document.getElementsByClassName("box");
  var x = document.getElementById('skill');
  x.style.display ='block';
  document.getElementsByClassName("activity").style.display = "none";
  document.getElementById('project').style.display ="none";


}
else if (num == 2) {
  //var x = document.getElementsByClassName("box2");
  //document.getElementById('skill').style.display="none";
  document.getElementById('project').style.display = "block";
  document.getElementById('skill').style.display="none";
  document.getElementById("activity").style.display = "none";

}
else{
  document.getElementById("activity").style.display = "block";
  document.getElementById('skill').style.display="none";
 document.getElementById('project').style.display ="none";
}
}
