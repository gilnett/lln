 

function axex() {
  largeur += 10; // Augmenter la largeur de 10%
  if (largeur > 500) largeur = 500; // Limiter la largeur à 200%

  const imgElement = document.getElementById("image");

  if (imgElement) {
    imgElement.style.width = `${largeur}px`; // Modifier la largeur
    const currentHeight = imgElement.offsetHeight;
    // Appliquer la hauteur actuelle comme style
    imgElement.style.height = `${currentHeight}px`;
    updateInfo();
  }
}
function axexreduc() {
  largeur -= 10;
  if (largeur < 10) largeur = 10;

  const imgElement = document.getElementById("image");

  if (imgElement) {
    imgElement.style.width = `${largeur}px`;
    const currentHeight = imgElement.offsetHeight;

    // Appliquer la hauteur actuelle comme style
    imgElement.style.height = `${currentHeight}px`;
    updateInfo();
  }
}
