/************************************************************************************
 * 
 *  Initialize text for page
 * 
 ***********************************************************************************/

const syntheticArray = [
    ["synthetic", "automatic", "aesthetic"],
    ["kinetic", "phonetic", "tactic"],
    ["polysyllabic", "harmonic", "linguistics"],
    ["unspecific", "cryptic", "rhetoric"],
    ["(a)", "stylistic", "symmetric", "schematic"]
];

function createWord(str) {
    let wrapper = document.createElement("div");
    wrapper.className = "word-wrapper";

    let word = document.createElement("p");
    word.className = "synthetic-word";
    word.innerText = str;

    wrapper.appendChild(word);
    return wrapper;
}

function createLine(lineArray) {
    let line = document.createElement("div");
    line.className = "synthetic-line";

    for (let i = 0; i < lineArray.length; i++) {
        let word = createWord(lineArray[i]);
        line.appendChild(word);
    }
    return line;
}

function createText(arr) {
    const container = document.querySelector(".synthetic-container");
    console.log(container);
    console.log("hello");

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        console.log("loop " + i)
        let line = createLine(arr[i]);
        container.appendChild(line);
    }
}

createText(syntheticArray);


/************************************************************************************
 *
 *  Inject audio on click
 *
 ***********************************************************************************/

const lines = document.querySelectorAll(".synthetic-line");
console.log(lines);
let audioExists = false;

function createAudio(line) {
    // let srcString = "./audio/Hating.mp3";
    let srcString = `./audio/${line.id}.mp4`;
    let source = document.createElement("source");
    source.setAttribute("src", srcString);
    let audio = document.createElement("audio");
    audio.id = "audio";
    audio.appendChild(source);
    return audio;
}

function loadAudio(line) {
    let audio = createAudio(line);
    line.appendChild(audio);
    audio.play();
    audioExists = true;
}

function removeElement(element) {
    el = document.querySelector(element);
    el.parentNode.removeChild(el);
}

for (let i = 0; i < lines.length; i++) {

    lines[i].id = `line${i+1}`;

    lines[i].addEventListener("click", function () {
        if (audioExists) {
            removeElement("#audio");
        }
        loadAudio(this);
    });
}