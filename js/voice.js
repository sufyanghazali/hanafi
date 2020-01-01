const words = document.querySelectorAll(".word-wrapper");


// adds event listener to inject audio clip on click
words.forEach(function (word) {
    word.addEventListener("click", function () {
        let srcString = "./audio/Hating.mp3";
        // let srcString = `${this.children[0].innerText}.mp3`;
        let source = document.createElement("source");
        source.setAttribute("src", srcString);
        let audio = document.createElement("audio");
        console.log(audio);
        audio.appendChild(source);
        audio.play();
    });
})

// const target = document.querySelector("#target"); 

// target.addEventListener("mouseover", () => {
//     audio.play();
// });
// target.addEventListener("mouseleave", () => {
//     audio.pause();
//     audio.currentTime = 0;
// });