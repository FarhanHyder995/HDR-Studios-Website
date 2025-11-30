document.addEventListener('DOMContentLoaded', () => {
    // This is the number of pixels to scroll when an arrow is clicked.
    // 260px (card width) + 30px (margin) = 290. Let's use 300 for a round number.
    const scrollAmount = 330; 

    // Find all carousel arrow buttons on the page
    document.querySelectorAll('.carousel-nav-arrow').forEach(button => {
        
        // Add a click listener to each button
        button.addEventListener('click', () => {
            
            // Find the ID of the carousel this button controls (from the 'data-target' attribute)
            const targetId = button.dataset.target;
            const carouselWrapper = document.getElementById(targetId);
            
            if (carouselWrapper) {
                // If the button has the 'prev' class, scroll left
                if (button.classList.contains('prev')) {
                    carouselWrapper.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth' // This makes the scroll animated
                    });
                } 
                // If the button has the 'next' class, scroll right
                else if (button.classList.contains('next')) {
                    carouselWrapper.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth' // This makes the scroll animated
                    });
                }
            }
        });
    });
});