function axey() {
    let height = 100;
    height += 10;
    const imgElement = document.querySelector("#afficher img");// Sélectionne l'image via la const dans 2d
    if (imgElement) {
        
        imgElement.style.height = `${height}%`;
        updateInfo();
    } 
   
}
