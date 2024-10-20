let slideImages = document.querySelectorAll('.car');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
let counter = 0;
let slideInterval;

// Function to update the slide
function updateSlide(position) {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-position * 100}%)`;
    updateIndicators();
}

// Next button click handler
next.addEventListener('click', slideNext);

function slideNext() {
    counter++;
    if (counter >= slideImages.length) {
        counter = 0; // Reset to first image
    }
    updateSlide(counter);
}

// Previous button click handler
prev.addEventListener('click', slidePrev);

function slidePrev() {
    counter--;
    if (counter < 0) {
        counter = slideImages.length - 1; // Go to last image
    }
    updateSlide(counter);
}

// Auto sliding every 3 seconds
function autoSliding() {
    slideInterval = setInterval(slideNext, 3000);
}

// Start auto sliding when page loads
window.onload = function () {
    autoSliding();
};

// Stop auto sliding when mouse is over the container
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(slideInterval);
});

// Resume auto sliding when mouse leaves the container
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from indicators
function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Switch image based on clicked dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        counter = index;
        updateSlide(counter);
    });
});