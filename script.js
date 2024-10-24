document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const navBackground = document.querySelector('.nav-background');

    // Toggle menu and background on click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        navBackground.classList.toggle('open'); // Toggle background
    });

    // Close the menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!menuWrapper.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            navBackground.classList.remove('open'); // Hide background
        }
    });
});

// // Code for the canvas animations
// function files(index) {
//     return `new Scroll/out-Drone_${1000 + index}.jpg`;
// }

// const frameCount = 230;
// const images = [];
// const imageSeq = { frame: 0 };

// const canvas = document.querySelector("#home > canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
// });

// // Load images directly from the path
// for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     img.onload = function() {
//         images.push(img);
//         if (i === 0) { // Render the first frame once the first image is loaded
//             render();
//         }
//     };
// }

// gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//         scrub: 1.8,
//         pin: true,
//         trigger: "#home",
//     },
//     onUpdate: render
// });

// function render() {
//     scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, img.width, img.height,
//         centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
// }

// ScrollTrigger.create({
//     trigger: "#home",
//     pin: true,
//     start: "top top",
//     scrub: 1.8
// });

const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const h1Title = document.getElementById('slide-title');
    const h2Description = document.getElementById('slide-description');

    // Titles and Descriptions for each slide
    const titles = [
      "Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6", "Title 7"
    ];

    const descriptions = [
      "Description for Image 1", "Description for Image 2", "Description for Image 3", 
      "Description for Image 4", "Description for Image 5", "Description for Image 6", "Description for Image 7"
    ];

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide(index) {
      // Hide all slides
      slides.forEach(slide => slide.classList.remove('active'));
      // Remove active class from all dots
      dots.forEach(dot => dot.classList.remove('active'));

      // Show the current slide
      slides[index].classList.add('active');
      dots[index].classList.add('active');

      // Update h1 and h2 text
      h1Title.textContent = titles[index];
      h2Description.textContent = descriptions[index];
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(currentIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
      });
    });

    function autoSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(currentIndex);
    }

    setInterval(autoSlide, 5000); // Slide every 5 seconds

    moreInfoBtn.addEventListener('click', () => {
      window.location.href = `page${currentIndex + 1}.html`; // Redirect to different pages based on slide
    });

    updateSlide(0); // Initialize the first slide





 
