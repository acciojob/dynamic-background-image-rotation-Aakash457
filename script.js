
const landscapeImage =
  "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg";

const portraitImage =
  "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";

function changeBackground() {
  if (window.innerHeight > window.innerWidth) {
    // Portrait mode
    document.body.style.backgroundImage = `url("${portraitImage}")`;
  } else {
    // Landscape mode
    document.body.style.backgroundImage = `url("${landscapeImage}")`;
  }
}

// Set the background when the page loads
changeBackground();

// Update the background when the browser is resized
window.addEventListener("resize", changeBackground);
