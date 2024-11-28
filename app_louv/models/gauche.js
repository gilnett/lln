function gauche() {
    rotation -= 45; 
    const imgElement = document.querySelector("image"); // Sélectionne l'image via la const dans 2d
    if (imgElement) {
        imgElement.style.transform = `rotate(${rotation}deg)`; 
        updateInfo();
    } else {
        console.error("L'image à faire tourner n'a pas été trouvée.");
    }
}
