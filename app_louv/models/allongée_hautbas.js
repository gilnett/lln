function axey() {
    if (height === null) {
        console.error("Hauteur par défaut non définie. Veuillez charger une image.");
        return;
    }

    // Augmente la hauteur
    height += 45;

    // Modifie uniquement la hauteur, la largeur reste constante
    imgDisplay.style.height = `${height}px`;

    // Met à jour les informations d'image
    updateInfo();
}
