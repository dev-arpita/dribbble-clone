   const imageContainer = document.getElementById('imageContainer');
            const scrollRightButton = document.getElementById('scrollRightButton');

            function updateButtonVisibility() {
                if (imageContainer.scrollWidth > imageContainer.clientWidth) {
                    scrollRightButton.classList.remove('hidden');
                } else {
                    scrollRightButton.classList.add('hidden');
                }
            }

            function scrollRight() {
                imageContainer.scrollBy({ left: 300, behavior: 'smooth' });
            }

            window.addEventListener('resize', updateButtonVisibility);
            window.addEventListener('load', updateButtonVisibility);