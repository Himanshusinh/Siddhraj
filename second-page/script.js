// let slideImages = document.querySelectorAll('.car');
// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');
// let dots = document.querySelectorAll('.dot');
// let counter = 0;
// let slideInterval;

// // Function to update the slide
// function updateSlide(position) {
//     const slides = document.querySelector('.slides');
//     slides.style.transform = `translateX(${-position * 100}%)`;
//     updateIndicators();
// }

// // Next button click handler
// next.addEventListener('click', slideNext);

// function slideNext() {
//     counter++;
//     if (counter >= slideImages.length) {
//         counter = 0; // Reset to first image
//     }
//     updateSlide(counter);
// }

// // Previous button click handler
// prev.addEventListener('click', slidePrev);

// function slidePrev() {
//     counter--;
//     if (counter < 0) {
//         counter = slideImages.length - 1; // Go to last image
//     }
//     updateSlide(counter);
// }

// // Auto sliding every 3 seconds
// function autoSliding() {
//     slideInterval = setInterval(slideNext, 3000);
// }

// // Start auto sliding when page loads
// window.onload = function () {
//     autoSliding();
// };

// // Stop auto sliding when mouse is over the container
// const container = document.querySelector('.slide-container');
// container.addEventListener('mouseover', function () {
//     clearInterval(slideInterval);
// });

// // Resume auto sliding when mouse leaves the container
// container.addEventListener('mouseout', autoSliding);

// // Add and remove active class from indicators
// function updateIndicators() {
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[counter].classList.add('active');
// }

// // Switch image based on clicked dot
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         counter = index;
//         updateSlide(counter);
//     });
// });







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