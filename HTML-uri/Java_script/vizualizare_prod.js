window.onload = f()

function f(){
    // Select the title element
// Select the title element
var title = document.querySelector("header.Titlu2 p.Paragraf");

// Check if the title element exists before changing the color
if (title) {
  // Function to generate a random color in RGB format
  function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  // Time interval to update the color every 2 seconds
  setInterval(function() {
    var randomColor = getRandomColor();
    title.style.color = randomColor;
  }, 2000);
} else {
  console.error("The title element does not exist in the document.");
}


}