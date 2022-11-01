// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
var selector = document.getElementById('horn-select')
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myAudioClass = document.getElementsByClassName('hidden');
var myAudio = myAudioClass[0];
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
