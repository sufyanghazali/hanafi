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
top: ${top + 150}px;
left: ${left}px;
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

// lines.forEach(line =>
// {
//     line.classList.add("drag");
// });



/***********************************************************************
 *
 *  move-slider
 *
 **********************************************************************/

const temperature = document.querySelector(".temperature");
const slide = temperature.querySelector(".slide__wrapper");
const path = [[0, 0], [-632, 66], [-779, -1172], [-947, -2283], [-2064, -3364], [-2385, -4271]];
const frames = []; // map new frame values usi ng values from path array
let iPath = 0;
slide.style.top = "0px";


function initializeFrames()
{
    for (let i = 0; i < path.length; i++)
    {
        console.log("hello");

        // push the main frame first
        frames.push(path[i]);

        // push the inbetween frames
        if (i < path.length - 1)
        {
            // setup for 2 "inbetween" frames
            const diffTop = path[i + 1][0] - path[i][0];
            const diffLeft = path[i + 1][1] - path[i][1];
            const moveTop = diffTop / 3;
            const moveLeft = diffLeft / 3;

            for (let j = 1; j < 3; j++)
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

initializeFrames();
temperature.addEventListener("click", travel);

$(".drag").draggable();

function getSlide()
{
    console.log(slide.style.top);
    console.log(slide.style.left);
}