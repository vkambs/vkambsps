// Set the index of the current slide to 1
var slideIndex = 1;
showSlides(slideIndex);

// Function to move to the previous or next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display the current slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
