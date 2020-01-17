
// change query selectors to point to the trigger
const compositions = document.querySelector("#compositions");
const synthetic = document.querySelector("#synthetic");

const array = [compositions, synthetic]
// need a way to get the link for the page
// need to query select id from page

function getLink(el)
{
    return `${el.id}.html`
}

function getContainer(el)
{
    return document.querySelector(`#${el.id} .container`)
}

function addScript(el)
{
    const body = document.querySelector("body");
    const script = document.createElement("script");
    script.src = `./js/${el.id}.js`;
    body.appendChild(script);
}


function loadPage(el)
{
    const id = el.id
    const url = `${id}.html`
    const container = getContainer(el);
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "document";
    xhr.onload = function ()  
    {
        // Insert loaded page
        const content = xhr.response.querySelector(`#${id}`);
        container.classList.add("loaded", "show");
        container.appendChild(content);
        if (el == synthetic)
        {
            addScript(el);
        }
    }
    xhr.send();

}

function showPage(el, e)
{
    const container = getContainer(el);
    
    // if the page has already been loaded, just toggle visibility
    if (container.classList.contains("loaded"))
    {
        container.classList.toggle("show");
        container.classList.toggle("hide");
    }
    // else load the page
    else
    {
        loadPage(el);
    }
}

array.forEach(el =>
{
    el.addEventListener("click", function (e)
    {
        if (e.target == el.querySelector(".page-trigger"))
        {
            showPage(this, e);
        }
    });
});

