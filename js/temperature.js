const temps = document.querySelectorAll(".temperature__image");
const lines = document.querySelectorAll(".slide__line");

function getShit(image)
{
    const width = image.offsetWidth;
    const top = image.offsetTop;
    const left = image.offsetLeft;

    return `#${image.id} {
width: ${width}px;
top: ${top}px;
left: ${left}px;
}

`;
}



function getValues()
{
    let str = "";

    temps.forEach((image =>
    {
        str += getShit(image);
    }));

    lines.forEach((line =>
    {
        str += getShit(line);
    }));
    console.log(str);
}


function adjust(image)
{
    const width = image.offsetWidth;
    const top = image.offsetTop;
    const left = image.offsetLeft;

    return `#${image.id} {
width: ${width}px;
top: ${top + 31}px;
left: ${left + 29}px;
}

`;
}

function getAdjusted()
{
    let str = "";

    temps.forEach((image =>
    {
        str += adjust(image);
    }));

    console.log(str);
}


/***********************************************************************
 *
 *  move-slider
 *
 **********************************************************************/

const temperature = document.querySelector(".temperature");
const slide = temperature.querySelector(".slide__wrapper");
const path = [[0, 0], [-751, -69], [-873, -1951], [-873, -3958], [-873, -4361], [-1793, -4413], [-2601, -4454], [-3388, -4454]];


const frames = [
    [0, 0], [-250, -23], [-500, -46],
    [-751, -69], [-751, -169], [-751, -324], [-751, -539], [-751, -621],
    [-873, -1951], // skip
    [-873, -3958], [-873, -4092], [-873, -4226],
    [-873, -4361], [-1179, -4378], [-1486, -4395],
    [-1793, -4413], [-2062, -4426], [-2331, -4440],
    [-2601, -4454], [-2863, -4454], [-3125, -4454],
    [-3388, -4454]
];



const frames2 = []; // map new frame values usi ng values from path array
let iPath = 0;
slide.style.top = "0px";


function initializeFrames(numFrames)
{
    for (let i = 0; i < path.length; i++)
    {
        // push the main frame first
        frames.push(path[i]);

        // push the inbetween frames
        if (i < path.length - 1)
        {
            // setup for 2 "inbetween" frames
            const diffTop = path[i + 1][0] - path[i][0];
            const diffLeft = path[i + 1][1] - path[i][1];
            const moveTop = diffTop / numFrames;
            const moveLeft = diffLeft / numFrames;

            for (let j = 1; j < numFrames; j++)
            {
                nextTop = path[i][0] + moveTop * j;
                nextLeft = path[i][1] + moveLeft * j;

                frames.push([nextTop, nextLeft]);
            }
        }
    }
}

function travel()
{
    console.log("clicked");
    if (iPath == frames.length - 1)
    {
        iPath = 0;
    }
    else
    {
        iPath++;
    }

    slide.style.top = `${frames[iPath][0]}px`;
    slide.style.left = `${frames[iPath][1]}px`;
}

initializeFrames(3);
console.log(frames);
temperature.addEventListener("click", travel);



function getSlide()
{
    console.log(slide.style.top);
    console.log(slide.style.left);
}

// makes the images draggable
// temps.forEach(image =>
// {
//     image.classList.add("resize", "drag");
// });


$(".drag").draggable();

$(".resize").resizable({
    autoHide: true,
    aspectRatio: true,
    // containment: "parent",
    handles: "e"
    // minWidth: 200
});
