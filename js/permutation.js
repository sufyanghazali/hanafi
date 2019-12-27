/***********************************************************************
 *
 *   PERMUTATION
 * 
 ***********************************************************************/

/* create array of card objects */
const cards = document.querySelectorAll(".project");

/* create and fill array of permutation for cards */
/* replace coordinates because those random arrays make no sense */
const permArray = [
    [
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)]
    ],
    [
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)]
    ],
    [
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)]
    ],
    [
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)],
        [randNum(1490), randNum(413)]
    ]
];

// create random number generator to get number between 0 to permArray - 1
function randNum(max) {
    return Math.floor(Math.random() * max);
}

function positionCards() {
    let idx = randNum(permArray.length);

    for (let i = 0; i < permArray[idx].length; i++) {
        cards[i].style.left = permArray[idx][i][0] + "px";
        cards[i].style.top = permArray[idx][i][1] + "px";
        console.log(cards[i].style.top);
    }
}

positionCards();