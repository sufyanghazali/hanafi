/***********************************************************************
 *
 *   DRAG FEATURE
 *
 ***********************************************************************/

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
    sortables[i].addEventListener("mousedown", bringForward);
}


function bringForward(e) {
    let currentLayer = e.target.style.zIndex;

    sortables.forEach(element => {
        /* Only have to sort elements in front of targeted element */
        if (element.style.zIndex > currentLayer) {
            element.style.zIndex -= 10;
        }
    });

    e.target.style.zIndex = frontLayer;
}

$(".drag").draggable({
    containment: "parent"
});

$(".resize").resizable({
    aspectRatio: true
});