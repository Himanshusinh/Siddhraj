function sequence_animation() {
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  // Set canvas to the viewport dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  // Define the path to images
  function files(index) {
    return `./scroll/frame${index}.jpg`; // Adjusted to match naming from frame0.jpg to frame209.jpg
  }

  const frameCount = 210; // Total number of frames in the sequence
  const images = [];
  const imageSeq = { frame: 0 };

  // Preload images
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  // GSAP ScrollTrigger for image sequence animation
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame', // Snap to the closest integer frame
    ease: 'none',
    scrollTrigger: {
      trigger: '#home',
      scrub: 1.8, // Adjust for smoothness
      pin: true, // Keep canvas pinned during scroll
      start: 'top top',
      end: `+=${window.innerHeight * 2}`, // Adjust based on desired scroll length
    },
    onUpdate: render,
  });

  // Render the first frame initially
  images[0].onload = render;

  // Render the image on the canvas
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  // Helper function to scale image to fill canvas
  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio); // Ensures the image covers the entire canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      // Center the image in the viewport
      (canvas.width - img.width * ratio) / 2,
      (canvas.height - img.height * ratio) / 2,
      img.width * ratio,
      img.height * ratio
    );
  }
}

// Run the animation function
sequence_animation();
















const boxsliderImages9 = document.querySelector('.boxslider-images9');
const indicators9 = document.querySelectorAll('.indicator9');
const prevButton9 = document.querySelector('.prev9');
const nextButton9 = document.querySelector('.next9');
const boxslides9 = document.querySelectorAll('.boxslider-slide9');

let currentIndex9 = 0;
const totalSlides9 = boxslides9.length;

function showSlide9(index) {
boxsliderImages9.style.transform = `translateX(-${index * 64}%)`; /* Adjusted to keep partial visibility of adjacent images */

boxslides9.forEach((slide9, i) => {
  slide9.classList.toggle('active9', i === index);
  slide9.style.opacity = i === index ? '1' : '0.5'; /* Set opacity for focused and unfocused images */
});

indicators9.forEach((indicator9, i) => {
  indicator9.classList.toggle('active9', i === index);
});
}

function nextSlide9() {
currentIndex9 = (currentIndex9 + 1) % totalSlides9;
showSlide9(currentIndex9);
}

function prevSlide9() {
currentIndex9 = (currentIndex9 - 1 + totalSlides9) % totalSlides9;
showSlide9(currentIndex9);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide9, 3000);

// Manual navigation via indicators
indicators9.forEach((indicator9, index) => {
indicator9.addEventListener('click', () => {
  currentIndex9 = index;
  showSlide9(currentIndex9);
});
});

// Event listeners for next and previous buttons
nextButton9.addEventListener('click', nextSlide9);
prevButton9.addEventListener('click', prevSlide9);

// Initialize first slide
showSlide9(currentIndex9);
