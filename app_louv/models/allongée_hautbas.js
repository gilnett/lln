function axey() {
    let hauteur = 100;
    hauteur += 10;
    const imgElement = document.querySelector("#afficher img");// Sélectionne l'image via la const dans 2d
    if (imgElement) {
        
        imgElement.style.height = `${hauteur}%`;
        updateInfo();
    } 
   
}
