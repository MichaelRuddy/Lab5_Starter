// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var inputTxt = document.getElementById('text-to-speak');
const synth = window.speechSynthesis;
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
myButton.addEventListener('click', function() {
  myImage.src = "assets/images/smiling-open.png";
  const voices = speechSynthesis.getVoices();
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
  utterThis.addEventListener('end', (event) => {
    myImage.src = "assets/images/smiling.png"
  });
});




function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
} 
//hey


