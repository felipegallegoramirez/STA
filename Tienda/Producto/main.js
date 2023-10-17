let slideIndex = 1;
showSlidesA(slideIndex);
let slidesCount = document.getElementsByClassName("mySlides").length;

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;

  if (n > slidesCount-1) {slideIndex = 1}
  if (n < 1) {slideIndex = slidesCount}
  showSlides(slideIndex) 
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slideIndex > slidesCount-1) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slidesCount}
    slides[slideIndex-1].style.display = "block";
  } 


function getSlide(){
    return slideIndex
}

function showSlidesA() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex=getSlide()
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlidesA, 4000); // Change image every 2 seconds
  }

var x =document.getElementById("nav")
x.addEventListener("click", nav)

function nav(){
  if(x.classList.contains("ver")){
    x.classList.remove("ver")
  }else{
    x.classList.add("ver")
  }
}