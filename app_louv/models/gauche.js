function gauche() {
    rotation -= 45; 
    const imgElement = document.getElementById("image");
    if (imgElement) {
        imgElement.style.transform = `rotate(${rotation}deg)`; 
        updateInfo();
    } else {
        console.error("L'image à faire tourner n'a pas été trouvée.");
    }
}
