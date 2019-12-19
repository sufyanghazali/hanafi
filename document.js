/***********************************************************************
 *
 *   DROPDOWN (depreciated)
 * 
 ***********************************************************************/

// const dropdown = document.querySelectorAll(".crumb::after");
const dropdowns = document.querySelectorAll(".drop-wrap");

function newDiv() {
    return document.createElement("div");
}

function createArrow() {
    let navArrow = document.createElement("div");
    navArrow.textContent = ">";
    navArrow.classList.add("arrow");
    return navArrow;
}


for (let i = 0; i < dropdowns.length; i++) {
    let parent = dropdowns[i];
    newArrow = createArrow();
    parent.insertBefore(newArrow, parent.firstElementChild.nextSibling);
}

const arrows = document.querySelectorAll(".arrow");

for (let i = 0; i < arrows.length; i++) {

    arrows[i].addEventListener("click", () => {
        let dd = arrows.nextElementSibling
        if (typeof (dd) != "undefined" && dd != null) {
            if (dd.id = "") {
                dd.id = "drop"
            } else {
                dd.id = "";
            }
        }
    });
}

html.addEventListener("click", e => {
    let drop = document.querySelector("#drop");

    // only runs if a dropdown is active
    if (typeof (drop) != "undefined" && drop != null) {

        // cannot have clicked on the dropdown itself or the arrow (because it'll close it straightaway)
        if (!drop.contains(e.target) && !e.target.classList.contains("arrow")) {
            drop.id = "";
        }
    }
});