

function axey() {
    hauteur += 10; // Augmenter la hauteur de 10%
    if (hauteur > 500) hauteur = 500; // Limiter la hauteur à 200%

    const imgElement = document.getElementById("image");

    if (imgElement) {
      imgElement.style.height = `${hauteur}px`; // Modifier la hauteur
      const currentwidth = imgElement.offsetWidth;

      // Appliquer la hauteur actuelle comme style
      imgElement.style.width = `${currentwidth}px`;
      updateInfo();
    }
  }
  function axeyreduc() {
    hauteur -= 10; // Augmenter la hauteur de 10%
    if (hauteur < 10) hauteur = 10; // Limiter la hauteur à 200%

    const imgElement = document.getElementById("image");

    if (imgElement) {
      imgElement.style.height = `${hauteur}px`; // Modifier la hauteur
      const currentwidth = imgElement.offsetWidth;

      // Appliquer la hauteur actuelle comme style
      imgElement.style.width = `${currentwidth}px`;
      updateInfo();
    }
  }
