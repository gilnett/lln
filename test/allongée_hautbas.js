function axey() {
    height += 45; 
    const imageElement = document.querySelector('image');
    if (imageElement) {
        imageElement.style.height = `${height}px`; 
        updateInfo();
    } else {
        console.error("Element with ID 'image' not found.");
    }}
