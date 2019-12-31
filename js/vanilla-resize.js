/**********************************************************************
 *
 *   SORT FEATURE
 *
 *********************************************************************/

const sortables = Array.from(document.querySelectorAll(".sortable"));

// Create array for the z-indexes
// Initializes the z-indexes of the elements in sortables
const zIndex = [];
for (let i = 1; i <= sortables.length; i++) {
    zIndex[i - 1] = i * 10;
    sortables[i - 1].style.zIndex = Number(zIndex[i - 1]);
}

// z-index value for front most layer
const frontLayer = zIndex.slice(-1)[0];

for (let i = 0; i < sortables.length; i++) {

    sortables[i].onmousedown = function () {

        let currentLayer = this.style.zIndex;

        /* shift elements down */
        sortables.forEach(element => {
            /* Only have to sort elements in front of targeted element */
            if (element.style.zIndex > currentLayer) {
                element.style.zIndex -= 10;
            }
        });

        this.style.zIndex = frontLayer;
    }
}

/**********************************************************************
 *
 *   RESIZE FEATURE
 *
 *********************************************************************/


const handle = document.querySelector(".handle");

const domRect = function () {

    let image = this.parentNode;

    console.log("clicked");
    console.dir(this.parentNode);
    console.dir(this.getBoundingClientRect());
}

function getOffset(el) {
    var rect = el.getBoundingClientRect; // returns rect object
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // return rect.top + scrollTop and rect.left + scrollLeft
}


handle.addEventListener("mousedown", function (e) {
    const MOUSE_ORIGIN = e.x;

    let image = this.parentNode;

    // false because we want to use e from handle listener?
    document.addEventListener("mousemove", function (el) {
        let resize = el.x - MOUSE_ORIGIN;
        console.log(resize);
        console.log(image.clientWidth);
        image.clientWidth = image.clientWidth + resize;
    }, false);

}, false);

document.addEventListener("up", function () {
    document.removeEventListener("mousemove", function (el) {
        console.dir(el);
        let resize = MOUSE_ORIGIN + el.x;
        image.style.width = `${image.style.width + resize}px`;
    }, false);
}, false);