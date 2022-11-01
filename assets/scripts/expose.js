// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
selector = document.querySelector('horn-select');
selectElement.addEventListener('change', (event) => {
    var myImage = document.querySelector("main[src='assets/images/no-image.png']");
    console.log(event.target.value)
    var imageDir = "assets/images/";
    var currChoice = event.target.value;
    var currImage = imageDir.concat()
    myImage.src = 'assets/images/' + 'event.target.value'
  });
