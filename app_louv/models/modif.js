let rotation = 0; 
let hauteur = 100;  
let largeur = 100;
let inverted = false;
function updateInfo() {
    document.getElementById('angle').textContent = `${rotation}°`; 
    document.getElementById('info-hauteur').textContent = `${hauteur}px`;
    document.getElementById('info-largeur').textContent = `${largeur}px`;
}