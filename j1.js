document.addEventListener("DOMContentLoaded", () => {
    // Select the last animated image in the first section
    const lastImage = document.querySelector(".second-image");
  
    // Listen for the end of its animation
    lastImage.addEventListener("animationend", () => {
      // Show the second section after the animation completes
      document.getElementById("secondSection").classList.remove("hidden");
    });
  });
  