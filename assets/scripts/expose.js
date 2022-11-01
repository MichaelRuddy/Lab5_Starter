// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
var selector = document.getElementById('horn-select');
var images = document.querySelectorAll("img");
var myImage = document.querySelector('img');
var myIcon = images[1];
var myButton = document.querySelector('button');
var myAudioClass = document.getElementsByClassName('hidden');
var myAudio = myAudioClass[0];
var volumeLevel = document.getElementById("volume");
selector.addEventListener('change', function() {
    console.log(selector.value);
    var currChoice = selector.value;
    var currDir = "assets/images/";
    myImage.src = "assets/images/" + selector.value + ".svg";
    myAudio.src = "assets/audio/" + selector.value + ".mp3";
  });
myButton.addEventListener('click', function() {
  myAudio.play();
});
volumeLevel.addEventListener('change', function() {
  if(volumeLevel.value == 0) {
    myIcon.src = "assets/icons/volume-level-0.svg"
  }
  else if(volumeLevel.value < 33) {
    myIcon.src = "assets/icons/volume-level-1.svg"
  }
  else if(volumeLevel.value < 67) {
    myIcon.src = "assets/icons/volume-level-2.svg"
  }
  else {
    myIcon.src = "assets/icons/volume-level-3.svg"
  }  
  myAudio.volume = volumeLevel.value / 100;
});
