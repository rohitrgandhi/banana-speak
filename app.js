var btnTranslate= document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

function handleClickEvent()
{
    console.log("Clicked!");
    console.log(txtInput.value);
}
btnTranslate.addEventListener("click" , handleClickEvent);