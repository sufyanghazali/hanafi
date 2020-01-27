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

temps.forEach(image =>
{
    image.classList.add("drag");
});
lines.forEach(line =>
{
    line.classList.add("drag");
});


$(".drag").draggable({
    containment: "parent"
});


/***********************************************************************
 *  
 *  RESIZE FEATURE
 * 
 **********************************************************************/
