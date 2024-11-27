let hauteur = 100; // Initialize height percentage

function axey() {
    hauteur += 10; // Augmenter la hauteur de 10%
    if (hauteur > 500) hauteur = 500; // Limiter la hauteur à 200%

    const imgElement = document.getElementById("image");

    if (imgElement) {
      imgElement.style.height = `${hauteur}px`; // Modifier la hauteur
      imgElement.style.width = "100px"; // Forcer la largeur constante
      updateInfo();
    }
  }
  function axeyreduc() {
    hauteur -= 10; // Augmenter la hauteur de 10%
    if (hauteur < 10) hauteur = 10; // Limiter la hauteur à 200%

    const imgElement = document.getElementById("image");

    if (imgElement) {
      imgElement.style.height = `${hauteur}px`; // Modifier la hauteur
      imgElement.style.width = "100px"; // Forcer la largeur constante
      updateInfo();
    }
  }
