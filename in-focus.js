const peggy = document.querySelector("#hl-peggy");
const bbb = document.querySelector("#ro-bbb");
const imgPeggy = document.querySelector("#ro-peggy");
const roBaker = document.querySelector("#ro-baker");
const underlined = [peggy, bbb];
const imgArr = [imgPeggy, roBaker];

for (let i = 0; i < underlined.length; i++) {
    underlined[i].addEventListener("mouseenter", () => {
        imgArr[i].classList.toggle("ghost");
    });
    underlined[i].addEventListener("mouseleave", () => {
        imgArr[i].classList.toggle("ghost");
    });
}