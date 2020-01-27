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

temps.forEach(image =>
{
    image.classList.add("drag");
});
// lines.forEach(line =>
// {
//     line.classList.add("drag");
// });


// $(".drag").draggable({
//     containment: "parent"
// });


/***********************************************************************
 *
 *  move-slider
 *
 **********************************************************************/

const temperature = document.querySelector(".temperature");
const slide = temperature.querySelector(".slide__wrapper");

slide.style.top = "0px";

temperature.addEventListener("click", function ()
{
    console.log("clicked");
    console.log(slide.style.top);
    const offset = Number(slide.style.top.slice(0, -2));
    slide.style.top = offset - 50 + "px";

});

