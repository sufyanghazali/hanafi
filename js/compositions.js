const imageContainers = document.querySelectorAll(".composition-container");
const halfway = (document.querySelector(".canvas").clientWidth) / 2

// add event listener to all images
// on click
// get position where the middle of the image
// if position is over half scale to left
// if position is on half, scale in position
// if position is less than half, scale to right

imageContainers.forEach(image => {

    let middle = image.offsetLeft + image.offsetWidth / 2;

    // add class to determine origin of transform
    if (middle > halfway) {
        image.classList.add("scale-left");
    } else if (middle < halfway) {
        image.classList.add("scale-right");
    }

    // toggles resize   
    image.onclick = function () {
        this.classList.toggle("scale");
    }
});