const roles = document.querySelector("#roles")
const roleArray = document.querySelectorAll(".role");
const descriptions = [
    ["creative", "communication", "practitioner"],
    ["damn", "annoying", "brother"],
    ["very", "indecisive", "dresser"]
];

let iDescription = 0;

function cycleRoles(index) {
    let nextIndex = index;

    for (let i = 0; i < roleArray.length; i++) {
        roleArray[i].innerHTML = descriptions[index][i];
    }

    /* i should return the next index value to use in description array */
    nextIndex++;

    /* reset iDescription so index doesn't go out of bounds */
    if (nextIndex == descriptions.length)
        nextIndex = 0;

    iDescription = nextIndex;
}

roles.addEventListener("click", () => cycleRoles(iDescription));


/***********************************************************************
 *
 *   ADD DROP SHADOW ON NAVBAR
 *
 ***********************************************************************/

// const html = document.querySelector("html");

// document.addEventListener("scroll", () => {
//     if (html.scrollTop > 0) {
//         document.querySelector(".header").style.boxShadow = "0px 1px 12px rgba(151, 151, 151, .5)";
//     }


/***********************************************************************
 *
 *   DROPDOWN
 * 
 ***********************************************************************/

const dropdowns = document.querySelectorAll(".drop-wrap");

function areSiblings(e1, e2) {
    return e1 != e2 && e1.parentNode == e2.parentNode;
}

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

html.addEventListener("click", e => {
    let drop = document.querySelector("#drop");


    if (typeof (drop) != "undefined" && drop != null) {
        console.log(!drop.contains(e.target));
        console.log(!areSiblings(e.target, drop));
        console.log(e.target);
        console.log(drop);

        // only runs if a dropdown is active
        // cannot have clicked on the dropdown itself or the arrow (because it'll close it straightaway)
        if (!drop.contains(e.target) && !areSiblings(e.target, drop)) {
            drop.id = "";
        }
    }
});

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", (e) => {
        let active = document.querySelector("#drop");

        /* deactivate active dropdown if arrow for another dropdown is clicked */
        if (active != null && !areSiblings(e.target, active)) {
            active.id = "";
        }

        let dd = arrows[i].nextElementSibling;
        console.dir(dd);

        if (dd.id == "") {
            dd.id = "drop";
        } else if (dd.id = "drop") {
            dd.id = "";
        }
    });
}
