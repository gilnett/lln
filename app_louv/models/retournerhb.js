

        function retournerhb() {
            inverted = !inverted; // Toggle the inverted state
            const image = document.getElementById('image');
            if (inverted) {
                image.style.transform = 'scaleY(-1)'; // Flip the image horizontally
            } else {
                image.style.transform = 'scaleY(1)'; // Reset the inversion
            }
        }