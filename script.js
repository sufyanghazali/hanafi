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


const html = document.querySelector("html");

html.addEventListener("wheel", () => {
    if (html.scrollTop > 0) {
        console.dir(document.querySelector(".header"));
        document.querySelector(".header").style.boxShadow = "0px 1px 12px rgba(151, 151, 151, .5)";
    }

    if (html.scrollTop == 0) {
        document.querySelector(".header").style.boxShadow = "";
    }
});