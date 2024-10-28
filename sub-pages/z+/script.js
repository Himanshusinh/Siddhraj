const boxsliderImages9 = document.querySelector('.boxslider-images9');
const indicators9 = document.querySelectorAll('.indicator9');
const prevButton9 = document.querySelector('.prev9');
const nextButton9 = document.querySelector('.next9');
const boxslides9 = document.querySelectorAll('.boxslider-slide9');

let currentIndex9 = 0;
const totalSlides9 = indicators9.length;

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