function modifie() {
    afficher += 45; 
    document.getElementById('image').style.transform = `rotate(${rotation}deg)`;
    updateInfo();
}