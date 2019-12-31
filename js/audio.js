/* 
CONSIDERATIONS 

- should audio keep playing even after mouse leave or stop and reset?
- what if user hovers over new audio element?

*/




const audio = document.querySelector("#test");
const target = document.querySelector("#target");

target.addEventListener("mouseover", () => {
    audio.play();
});
target.addEventListener("mouseleave", () => {
    audio.pause();
    audio.currentTime = 0;
});