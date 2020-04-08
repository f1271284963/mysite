// myCar
var FG2Startup = document.getElementById("FG2Audio");
var M3Startup = document.getElementById("M3Audio");
var FD2Startup = document.getElementById("FD2Audio");

// FG2
function FG2On() {
  document.getElementById("FG2").src = "/static/media/on.jpg";
  FG2Startup.play();
}
function FG2Off() {
  document.getElementById("FG2").src = "/static/media/off.jpg";
  FG2Startup.pause();
}

// M3
function M3On() {
  M3Startup.play();
}
function M3Off() {
  M3Startup.pause();
}

// FD2
function FD2On() {
  M3Startup.play();
}
function FD2Off() {
  M3Startup.pause();
}
