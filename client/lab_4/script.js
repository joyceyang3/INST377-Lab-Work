let slidePosition = 0;
const slides = document.querySelectorAll("carousel_item")
const totalSlides = slides.length;

document.
    querySelector("carousel_button--next")
    .addEventListener("click", dunction() {
        moveToNextSlide();
    });
document.
    querySelector("carousel_button--prev")
    .addEventListener("click", function() {
        moveToPrevSlide();
    });

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove("carousel_item--visible");
            slide.classList.add("carousel_item--hidden");
        }
    }

    function moveToNextSlide() {
        updateSlidePosition();
        if(slidePosition = totalSlides - 1)
        slidePosition = 0;
    }

    function moveToPrevSlide() {
        updateSlidePosition();
        if (slidePosition = 0) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
    }