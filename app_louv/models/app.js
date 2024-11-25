document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("options-modal");
    const imgDisplay = document.querySelector("#afficher img");
    const btnModifyColor = document.getElementById("btn-modify-color");
    const btnModifyImage = document.getElementById("btn-modify-image");
    const btnCloseModal = document.getElementById("btn-close-modal");
    let selectedFile = null;

    // Drag-and-drop et gestionnaire de fichiers
    cards.forEach(card => {
        const fileInput = card.querySelector(".file-input");

        card.addEventListener("click", () => fileInput.click());

        card.addEventListener("dragover", (e) => {
            e.preventDefault();
            card.classList.add("drag-over");
        });

        card.addEventListener("dragleave", () => {
            card.classList.remove("drag-over");
        });

        card.addEventListener("drop", (e) => {
            e.preventDefault();
            card.classList.remove("drag-over");
            handleFileUpload(e.dataTransfer.files[0], card);
        });

        fileInput.addEventListener("change", (e) => {
            handleFileUpload(e.target.files[0], card);
        });
    });

    // Gestion du fichier chargé
    function handleFileUpload(file, card) {
        if (!file) return;

        const type = card.dataset.type;

        // Si l'image est 2d
        if (type === "2D" && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => {
                imgDisplay.src = reader.result; // Mise à jour de l'image
                imgDisplay.alt = file.name; 
                openModal();
            };
            reader.readAsDataURL(file);
        } else if (type === "3D") {
            alert("la 3D c'est pas ici");
        } else {
            alert("Type de fichier non incompatible");
        }
    }

    // Modale
    function openModal() {
        modal.classList.remove("hidden");
    }

    btnModifyColor.addEventListener("click", () => {
        alert("Fonction 'Modifier la couleur' en développement !");
        modal.classList.add("hidden");
    });

    btnModifyImage.addEventListener("click", () => {
        alert("Fonction 'Modifier l'image' en développement !");
        modal.classList.add("hidden");
    });

    btnCloseModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});
//les info de la taille angles et tous
function updateInfo() {
    document.getElementById('angle').textContent = `${rotation}°`; // Affiche l'angle
     
    document.getElementById('hauteur').textContent = `${hauteur}%`; // Affiche le pourcentage
        
}
let rotation = 0;