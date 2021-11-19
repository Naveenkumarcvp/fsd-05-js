let play = document.getElementById("play"),
  pause = document.getElementById("pause"),
  download = document.getElementById("download"),
  f10 = document.getElementById("f10"),
  r10 = document.getElementById("r10"),
  fullscr = document.getElementById("fullscr"),
  swap = document.getElementById("swap"),
  volumeUpdate = document.getElementById("volumeUpdate"),
  volumeInput = document.getElementById("volume-slider"),
  mute = document.getElementById("mute"),
  unMute = document.getElementById("unMute"),
  video = document.getElementById("video");

function pl() {
  video.play();
}
function pa() {
  video.pause();
}
function down() {
  console.log("downloading");
}
function f() {
  cTime = video.currentTime;
  cTime = cTime + 10;
  video.currentTime = cTime;
}
function r() {
  cTime = video.currentTime;
  cTime = cTime - 10;
  video.currentTime = cTime;
}
function volumup() {
  let vol = volumeInput.value;
  vol = vol / 100;
  video.volume = vol;
}
function fullsc() {
  console.log("fullscreen");
}
function swa() {
  console.log("swapping");
}
function mut() {
  video.muted = true;
}
function unmut() {
  video.muted = false;
}
function fullsc() {
  video.requestFullscreen();
}

play.addEventListener("click", pl);
pause.addEventListener("click", pa);
download.addEventListener("click", down);
f10.addEventListener("click", f);
r10.addEventListener("click", r);
fullscr.addEventListener("click", fullsc);

swap.addEventListener("click", swa);
volumeUpdate.addEventListener("click", volumup);
mute.addEventListener("click", mut);
unMute.addEventListener("click", unmut);
