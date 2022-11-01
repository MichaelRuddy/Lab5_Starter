// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
var selector = document.getElementById('horn-select')
var myImage = document.querySelector('img');
selector.addEventListener('change', function() {
    console.log(selector.value);
    var currChoice = selector.value;
    var currDir = "assets/images/";
    myImage.src = "assets/images/" + selector.value;
  });
