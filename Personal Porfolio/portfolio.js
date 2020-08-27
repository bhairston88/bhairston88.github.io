function openModal() {
    document.getElementById("wdModal").style.display = "block";
}

function closeModal() {
    document.getElementById("wdModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var x;
    var slides = document.getElementsByClassName("Slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if ( n < 1) {slideIndex = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    
    for (x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
};
/**  
function openModal() {
    document.getElementById("fpModal").style.display = "block";
}

function closeModal() {
    document.getElementById("fpModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var y;
    var slides3 = document.getElementsByClassName("fpSlides");
    var dots3 = document.getElementsByClassName("demo3");
    var captionText3 = document.getElementById("caption3");
    if (n > slides3.length) {slideIndex = 1}
    if ( n < 1) {slideIndex = slides3.length}
    for (y = 0; y < slides3.length; y++) {
        slides3[y].style.display = "none";
    }
    
    for (y = 0; y < dots3.length; y++) {
        dots3[y].className = dots3[y].className.replace(" active", "");
    }

    slides3[slideIndex-1].style.display = "block";
    dots3[slideIndex-1].className += " active";
    captionText3.innerHTML = dots3[slideIndex-1].alt;
};

*/