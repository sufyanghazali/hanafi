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

const html = document.querySelector("html");

document.addEventListener("scroll", () => {
    if (html.scrollTop > 0) {
        document.querySelector(".header").style.boxShadow = "0px 1px 12px rgba(151, 151, 151, .5)";
    }

    if (html.scrollTop == 0) {
        document.querySelector(".header").style.boxShadow = "";
    }
});


/***********************************************************************
 *
 *   DROPDOWN
 * 
 ***********************************************************************/

const dropdown = document.querySelectorAll(".crumb::after");
const crumbs = document.querySelectorAll(".crumb");

function createArrow() {
    let navArrow = document.createElement("div");
    navArrow.textContent = ">";
    navArrow.classList.add("arrow");
    return navArrow;
}


for (let i = 0; i < crumbs.length; i++) {
    let parent = crumbs[i].parentNode;
    newArrow = createArrow();
    // Inserts arrow AFTER targeted crumb
    parent.insertBefore(newArrow, crumbs[i].nextSibling);
    // newArrow.addEventListener("click", () => {
    //     // console.dir(newArrow.nextElementSibling);
    //     newArrow.nextElementSibling.classList.toggle("drop");
    // });
}

const arrows = document.querySelectorAll(".arrow");

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", () => {
        // console.dir(newArrow.nextElementSibling);
        arrows[i].nextElementSibling.classList.toggle("drop");
    });
}


// parentDiv.insertBefore(sp1, sp2.nextSibling);