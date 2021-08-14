var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
    .catch(handleError)
    }

    function handleError(error)
    {
        console.log("error occured",error);
        alert("Server down! Please try later...");
    }

    btnTranslate.addEventListener("click", clickHandler);