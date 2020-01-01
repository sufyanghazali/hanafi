/***********************************************************************
 *
 *   SORT FEATURE
 *
 **********************************************************************/

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

/***********************************************************************
 *  
 *  DRAG FEATURE
 * 
 **********************************************************************/

$(".drag").draggable({
    containment: "parent"
});


/***********************************************************************
 *  
 *  RESIZE FEATURE
 * 
 **********************************************************************/

$(".resize").resizable({
    autoHide: true, 
    aspectRatio: true,
    containment: "parent",
    handles: "e",
    minWidth: 200   
});
