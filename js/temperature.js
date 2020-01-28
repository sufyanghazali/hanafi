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
const path = [[0, 0], [-632, 66], [-779, -1172], [-947, -2283], [-2064,-3364],[-2385,-4271]];
const frames = []; // map new frame values usi ng values from path array
let iPath = 0;

slide.style.top = "0px";


function travel()
{
    console.log("clicked");
    if (iPath == path.length - 1)
    {
        iPath = 0;
    }
    else
    {
        iPath++;
    }

    slide.style.top = `${path[iPath][0]}px`;
    slide.style.left = `${path[iPath][1]}px`;
}


temperature.addEventListener("click", travel);

$(".drag").draggable();

function getSlide()
{
    console.log(slide.style.top);
    console.log(slide.style.left);
}