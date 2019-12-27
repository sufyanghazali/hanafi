// $(".drag").draggable();
// $(".drag-y").draggable({
//     axis: "y"
// });
// $(".resize").resizable({
//     aspectRatio: true
// });
// $(".resize-free").resizable();

const stuff = document.querySelectorAll(".drag");

function getCoordinates() {
    stuff.forEach(e => {
        console.log(`Width: ${e.style.width}`);
        console.log(`Height: ${e.style.height}`);
        console.log(`Top: ${e.style.top}`);
        console.log(`Left: ${e.style.left} \n`);
    });
}