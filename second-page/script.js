
  document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    let images = Array.from(document.querySelectorAll('.carousel-image'));
    let currentIndex = 1; // Start with the second image in the middle

    // Clone the first and last images to create seamless loop
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    // Append and prepend the clones to the track
    carouselTrack.appendChild(firstClone);
    carouselTrack.insertBefore(lastClone, images[0]);

    // Recalculate the images array to include the clones
    images = Array.from(document.querySelectorAll('.carousel-image'));

    // Update carousel immediately to account for clones
    updateCarousel();

    // Event listeners for the arrows
    document.getElementById('rightArrow').addEventListener('click', function () {
      slideNext();
    });

    document.getElementById('leftArrow').addEventListener('click', function () {
      slidePrev();
    });

    // Function to update the carousel when changing images
    function updateCarousel() {
      images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
          img.classList.add('active');
        }
      });

      // Calculate the translation to center the active image
      const translateValue = -(currentIndex * 15) + 15; // Adjust to center the active image
      carouselTrack.style.transform = `translateX(${translateValue}vw)`;
    }

    // Function to move to the next image
    function slideNext() {
      currentIndex++;
      updateCarousel();

      // When reaching the end, jump back to the first (real) image
      if (currentIndex === images.length - 1) {
        setTimeout(() => {
          carouselTrack.style.transition = "none"; // Disable smooth animation to "jump"
          currentIndex = 1; // Reset index to the first real image
          updateCarousel();
          setTimeout(() => {
            carouselTrack.style.transition = "transform 0.8s ease-in-out"; // Re-enable smooth animation
          }, 50); // Add a tiny delay to reset the transition
        }, 800); // Wait for the normal animation to finish before "jumping"
      }
    }

    // Function to move to the previous image
    function slidePrev() {
      currentIndex--;
      updateCarousel();

      // When reaching the start, jump back to the last (real) image
      if (currentIndex === 0) {
        setTimeout(() => {
          carouselTrack.style.transition = "none"; // Disable smooth animation to "jump"
          currentIndex = images.length - 2; // Reset index to the last real image
          updateCarousel();
          setTimeout(() => {
            carouselTrack.style.transition = "transform 0.8s ease-in-out"; // Re-enable smooth animation
          }, 50); // Add a tiny delay to reset the transition
        }, 800); // Wait for the normal animation to finish before "jumping"
      }
    }

    // Initialize the carousel to start with the first real image
    updateCarousel();
  });
