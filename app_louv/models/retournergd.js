

        function retournergd() {
            inverted = !inverted; // Toggle the inverted state
            const image = document.getElementById('image');
            if (inverted) {
                image.style.transform = 'scaleX(-1)'; // Flip the image horizontally
            } else {
                image.style.transform = 'scaleX(1)'; // Reset the inversion
            }
        }