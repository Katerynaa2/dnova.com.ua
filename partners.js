var slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("partner-slide");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = slideIndex; i < slideIndex + 4 && i < slides.length; i++) {
      slides[i].style.display = "block";  
  }
}
