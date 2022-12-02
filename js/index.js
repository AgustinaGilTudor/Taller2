/*function changeBackground(color) {
    document.body.style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('red') });*/




// Query the element
const image = document.getElementById('image');

// Create new image element
const cloneImage = new Image();
cloneImage.addEventListener('load', function (e) {
    // Get the natural size
    const width = e.target.naturalWidth;
    const height = e.target.naturalHeight;

    // Set the size for image
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
});

// Clone it
cloneImage.src = image.src;

cloneImage.addEventListener('load', function(e) {
    // The initial scale
    const scale = image.parentNode.getBoundingClientRect().width / width;
});
cloneImage.addEventListener('load', function(e) {

    image.style.transform = `scale(${scale}, ${scale})`;
});

//set slider range 
const minScale = 0.1;
const maxScale = 2;
const step = (maxScale - minScale) / 100;


// Query the elements
const knob = document.getElementById('knob');
const leftSide = knob.previousElementSibling;

cloneImage.addEventListener('load', function(e) {

    leftSide.style.width = `${(scale - minScale) / step}%`;
});

const mouseMoveHandler = function (e) {
    // Calculate the width for the left part
    // ...
    let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;

    // Set the width
    leftSide.style.width = `${newLeftWidth}%`;

    // Calculate the scale
    const scale = minScale + newLeftWidth * step;
    image.style.transform = `scale(${scale}, ${scale})`;
};