const leftArrow = document.querySelector('.left img'); // Get left arrow
const rightArrow = document.querySelector('.right img'); // Get right arrow
const middle = document.querySelector('.middle'); // The container holding all sliders
const sliders = document.querySelectorAll('.slider'); // Get all slider elements

let slideNo = 0; // Track the current slide
const slideWidth = 800; // Fixed width for each slide

// Right arrow click
rightArrow.addEventListener('click', () => {
    if (slideNo < sliders.length - 1) { // If not the last slide
        slideNo++; // Move to next slide
        middle.style.transform = `translateX(-${slideNo * slideWidth}px)`; // Move slider
        middle.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
    }
    console.log("Right arrow clicked. Slide number:", slideNo);
});

// Left arrow click
leftArrow.addEventListener('click', () => {
    if (slideNo > 0) { // If not the first slide
        slideNo--; // Move to previous slide
        middle.style.transform = `translateX(-${slideNo * slideWidth}px)`; // Move slider
        middle.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
    }
    console.log("Left arrow clicked. Slide number:", slideNo);
});

// Example of setTimeout used to trigger an action after 3 seconds
setTimeout(function() {
    console.log("This runs after 3 seconds");
}, 3000); // 3000 milliseconds = 3 seconds
