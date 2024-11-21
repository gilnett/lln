document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("options-modal");
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
        selectedFile = file;
        const type = card.dataset.type;

        alert(`Fichier ${file.name} chargé pour le modèle ${type}.`);
        openModal();
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
//pour les angles et taille
function updateInfo() {
    document.getElementById('angle').textContent = rotation;
    document.getElementById('size').textContent = height;
}
//l'angles et la tailles a initialiser
let rotation = 0; //deg
let height = 100;//%
