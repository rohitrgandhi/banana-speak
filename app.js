var btnTranslate= document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

var output=document.querySelector("#output");

function handleClickEvent()
{
    output.innerText="banana "+txtInput.value;
}
btnTranslate.addEventListener("click" , handleClickEvent);