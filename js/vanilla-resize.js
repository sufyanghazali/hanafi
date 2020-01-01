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
const c1 = document.querySelector("#c1");
const handle = document.querySelector(".handle");
const resize = function (e) {
    let mouseChange = e.clientX;
    image.clientWidth = image.clientWidth + resize;
}

function getOffset(el) {
    var rect = el.getBoundingClientRect; // returns rect object
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // return rect.top + scrollTop and rect.left + scrollLeft
}

let clickOrigin;

handle.addEventListener("mousedown", function (e) {
    clickOrigin = e.clientX;
    console.log(clickOrigin);
    let image = this.parentNode;
    console.dir(image);
    console.log

    document.addEventListener("mousemove", function (e) {
        image.style.width = image.pageX - image.getBoundingClientRect().left + "px";
    });
});

