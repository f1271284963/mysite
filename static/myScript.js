// myCar
var FG2Startup = document.getElementById("FG2Audio");

function turnOn() {
  document.getElementById("FG2").src = "/static/media/on.jpg";
  FG2Startup.play();
}
function turnOff() {
  document.getElementById("FG2").src = "/static/media/off.jpg";
  FG2Startup.pause();
}
