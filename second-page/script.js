// Access the Images
let slideImages = document.querySelectorAll('.car');
// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;
var slideInterval;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  if(counter >= slideImages.length - 1){
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  if(counter == 0){
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  indicators();
}

// Auto sliding every 3 seconds, starting when the page loads
function autoSliding(){
  slideInterval = setInterval(function() {
    slideNext();
  }, 3000);
}

// Start auto sliding immediately when the page loads
window.onload = function() {
  autoSliding();
};

// Stop auto sliding when mouse is over the container
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
  clearInterval(slideInterval);
});

// Resume auto sliding when mouse leaves the container
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators(){
  for(let i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(' active', '');
  }
  dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage){
  let imageId = currentImage.getAttribute('attr');
  if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  } else if(imageId == counter){
    return;
  } else {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
  }
  indicators();
}