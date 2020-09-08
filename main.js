/*
============================================
; Title: main.js
; Author: w3school.com
; Date: 7 September 2020
; Modified by: Brooklyn Hairston
; Description: Main javaScript code for personal portfolio
;===========================================
*/

//header
const header = require('../hairston-header.js')
            
console.log(header.display('Brooklyn','Hairston','Personal Portfolio'))

//start program

//Web Development Modal 

/**
 * params: n/a
 * response: wdModal 
 * description: retrieves the DOM element by Id
 */

function openModal() {
    document.getElementById("wdModal").style.display = "block";
}

/**
 * params: n/a
 * response: wdModal 
 * description: retrieves the DOM element by Id 
 */

function closeModal() {
    document.getElementById("wdModal").style.display = "none";
}

//variable declaration 
var slideIndex = 1;
showSlides(slideIndex)

/**
 * params: n
 * response: Show Slides
 * description: Shows Slides in modal window
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * params: n
 * response: Show Slides
 * description: Shows Slides in modal window
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * params: n
 * response: iteration 
 * description: Iterates over slides and outputs results
 */
function showSlides(n) {
    var x;
    var slides = document.getElementsByClassName("Slides");
    if (n > slides.length) {slideIndex = 1}
    if ( n < 1) {slideIndex = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
};

//Portfolio Modal 

/**
 * params: n/a
 * response: fpModal 
 * description: retrieves the DOM element by Id
 */
function openModal2() {
    document.getElementById("fpModal").style.display = "block";
}

/**
 * params: n/a
 * response: fpModal 
 * description: retrieves the DOM element by Id
 */

function closeModal2() {
    document.getElementById("fpModal").style.display = "none";
}

//variable declaration 
var slideIndex2 = 1;
showSlides2(slideIndex2)

/**
 * params: n
 * response: Show Slides
 * description: Shows Slides in modal window
 */
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

/**
 * params: n
 * response: Show Slides
 * description: Shows Slides in modal window
 */
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

/**
 * params: n
 * response: iteration 
 * description: Iterates over slides and outputs results
 */
function showSlides2(n) {
    var y;
    var slides3 = document.getElementsByClassName("fpSlides");
    if (n > slides3.length) {slideIndex2 = 1}
    if ( n < 1) {slideIndex2 = slides3.length}
    for (y = 0; y < slides3.length; y++) {
        slides3[y].style.display = "none";
    }

    slides3[slideIndex2-1].style.display = "block";
    dots3[slideIndex2-1].className += " active";
    captionText3.innerHTML = dots3[slideIndex2-1].alt;
};

//Prototype Modal
/**
 * params: n/a
 * response: pModal 
 * description: retrieves the DOM element by Id
 */
function openModal1() {
    document.getElementById("pModal").style.display = "block";
}

/**
 * params: n/a
 * response: pModal 
 * description: retrieves the DOM element by Id
 */
function closeModal1() {
    document.getElementById("pModal").style.display = "none";
}

//variable declaration 
var slideIndex1 = 1;
showSlides1(slideIndex1)

/**
 * params: n
 * response: Show Slides
 * description: Shows Slides in modal window
 */
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

/**
 * params: n
 * response: Show Slides
 * description: Shows Slides in modal window
 */
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

/**
 * params: n
 * response: iteration 
 * description: Iterates over slides and outputs results
 */
function showSlides1(n) {
    var i;
    var slides2 = document.getElementsByClassName("pSlides");
    if (n > slides2.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex1 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    slides2[slideIndex1-1].style.display = "block";
    dots2[slideIndex1-1].className += " active";
    captionText2.innerHTML = dots2[slideIndex1-1].alt;
};