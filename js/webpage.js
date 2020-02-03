let urlWeb = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/webpage';
let urlWebImage = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/webimage';

let hideWhenNotActive = document.getElementById("hideWhenNotActive");
let editWebImage = document.getElementById("editWebImage");
let cancelChangeWebimage = document.getElementById("cancelChangeWebimage");
let addWebButton = document.getElementById("addWebButton");
let errorMessageAddWeb = document.getElementById('errorMessageAddWeb');

cancelChangeWebimage.addEventListener('click', callAllAreas, false);


window.onload = getWeb(); 

//Hämtar webbplatser
function getWeb() {

    fetch(urlWeb)
        .then(function(response) {

            if (response.status !== 200) {
                console.log('Fel vid hämtning av alla webbsidor' + response.status);
                return;
            }
            response.json().then(function(data) {
                displayEditWeb(data); 
            });
        }
    )
    .catch((error) => console.log('FEL med getWeb: ' + error));
}


//Inloggat läge
function displayEditWeb(data) {

    let webBlockElement = document.getElementById("webBlock");
    webBlockElement.innerHTML = "";
    errorMessageAddWeb.innerHTML = "";

    hideWhenNotActive.style.display = "none";
    editWebImage.style.display = "none";


    data.forEach((row) => {

        let webNumber = row['ID'];

        let webBlockArticle = document.createElement("article");
        let webBlockImageDiv = document.createElement("div");
        webBlockImageDiv.id = "webBlockImageDiv";
        let webBlockTextDiv = document.createElement("div");
        webBlockTextDiv.id = "webBlockTextDiv";
        let webBlockEditDiv = document.createElement("div");
        webBlockEditDiv.id = "webBlockEditDiv";

        let webImageInput = document.createElement("img");
        webImageInput.name = "webImageInput";
        webImageInput.id = "webImageInput" + webNumber;
        webImageInput.src += "webpageImages/" + row['WEBIMAGE'];
        webBlockImageDiv.appendChild(webImageInput);
        webBlockArticle.appendChild(webBlockImageDiv);

        let webNameInput = document.createElement("input");
        webNameInput.setAttribute("disabled", "disabled");
        webNameInput.type = "text";
        webNameInput.name = "webNameInput";
        webNameInput.id = "webNameInput" + webNumber;
        webNameInput.value += row['WEBNAME'];
        webBlockTextDiv.appendChild(webNameInput);

        let theLink = row['WEBURL'];
        //Skapar div eftersom input inte blev klickbar
        let webUrlInput = document.createElement("div");
        webUrlInput.type = "text";
        webUrlInput.name = "webUrlInput";
        webUrlInput.id = "webUrlInput" + webNumber;
        webUrlInput.innerHTML += '<a href="http://' + theLink + '"target="_blank">' + theLink + '</a>';
        webBlockTextDiv.appendChild(webUrlInput);

        let webDescriptionInput = document.createElement("input");
        webDescriptionInput.setAttribute("disabled", "disabled");
        webDescriptionInput.type = "text";
        webDescriptionInput.name = "webDescriptionInput";
        webDescriptionInput.id = "webDescriptionInput" + webNumber;
        webDescriptionInput.value += row['WEBDESCRIPTION'];
        webBlockTextDiv.appendChild(webDescriptionInput);

        let superSmallMarginElement = document.createElement("div");
        superSmallMarginElement.id = "superSmallMarginElement";
        webBlockTextDiv.appendChild(superSmallMarginElement); 

        let editWebInput = document.createElement("div"); 
        editWebInput.name = "editWebInput";
        editWebInput.id = "editWebInput" + webNumber;
        editWebInput.innerHTML += '<a onclick="editWebMode(' + webNumber + ' );">&#9998;</a>';
        webBlockEditDiv.appendChild(editWebInput);

        let deleteWebInput = document.createElement("div");
        deleteWebInput.name = "deleteWebInput";
        deleteWebInput.id = "deleteWebInput" + webNumber;
        deleteWebInput.innerHTML += '<a onclick="deleteWeb(' + webNumber + ' );">X</a>';
        webBlockEditDiv.appendChild(deleteWebInput);

        let editImageInput = document.createElement("div");
        editImageInput.name = "editImageInput";
        editImageInput.id = "editImageInput" + webNumber;
        editImageInput.innerHTML += '<a onclick="formUpdateWebimage(' + webNumber + ' );">Byt bild</a>';
        webBlockEditDiv.appendChild(editImageInput);

        let errorMessageWeb = document.createElement("div");
        errorMessageWeb.name = "errorMessageWeb";
        errorMessageWeb.id = "errorMessageWeb" + webNumber;
        webBlockEditDiv.appendChild(errorMessageWeb);

        webBlockTextDiv.appendChild(webBlockEditDiv);

        let marginElement = document.createElement("div");
        marginElement.id = "marginElement";

        webBlockArticle.appendChild(webBlockTextDiv);
        webBlockArticle.appendChild(marginElement);

        webBlockElement.appendChild(webBlockArticle);
    });
} 


function editWebMode(webNumber) {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    document.getElementById("webNameInput" + webNumber).disabled = false;
    let editUrlInput = document.getElementById("webUrlInput" + webNumber);

    //Byter ut div mot input så att användaren kan redigera
    let editUrlInputElement = document.createElement('input');
    editUrlInputElement.type = "text";
    editUrlInputElement.name = "editUrlInputElement";
    editUrlInputElement.id = "editUrlInputElement" + webNumber;
    editUrlInputElement.value = "www.";
    editUrlInput.parentNode.replaceChild(editUrlInputElement, editUrlInput);

    document.getElementById("webDescriptionInput" + webNumber).disabled = false;

    document.getElementById("editWebInput" + webNumber).style.visibility = "visible";
    document.getElementById("deleteWebInput" + webNumber).style.visibility = "visible";
        
    document.getElementById("editWebInput" + webNumber).innerHTML = "<a style='color: green;', onclick='updateWeb(" + webNumber + " );'>&#9681;</a></span>";
    document.getElementById("deleteWebInput" + webNumber).innerHTML = "<a style='color: red;', onclick='callAllAreas();'>&#9680;</a></span>";
}


//Lägg till hemsida
addWebButton.addEventListener('click', formAddWeb, false);

function formAddWeb() {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideWhenNotActive.style.display = "block";
    hideEditWebpage();


    let addWebNameElement = document.getElementById("addWebName");
    let addWebNameInput = document.createElement("input");
    addWebNameInput.type = "text";
    addWebNameInput.name = "addWebNameInput";
    addWebNameInput.id = "addWebNameInput";
    addWebNameInput.value = "";
    addWebNameInput.placeholder = "Webbsidans namn";
    addWebNameElement.appendChild(addWebNameInput);

    let addWebUrlElement = document.getElementById("addWebUrl");
    let addWebUrlInput = document.createElement("input");
    addWebUrlInput.type = "text";
    addWebUrlInput.name = "addWebUrlInput";
    addWebUrlInput.id = "addWebUrlInput";
    addWebUrlInput.value = "";
    addWebUrlInput.placeholder = "Webbsidans www-adress";
    addWebUrlElement.appendChild(addWebUrlInput);

    let addWebDescriptionElement = document.getElementById("addWebDescription");
    let addWebDescriptionInput = document.createElement("input");
    addWebDescriptionInput.type = "text";
    addWebDescriptionInput.name = "addWebDescriptionInput";
    addWebDescriptionInput.id = "addWebDescriptionInput";
    addWebDescriptionInput.value = "";
    addWebDescriptionInput.placeholder = "Beskrivning av webbsidan";
    addWebDescriptionElement.appendChild(addWebDescriptionInput);

    let saveAddedWebElement = document.getElementById("saveAddedWeb");
    let saveAddedWebInput = document.createElement("a");
    saveAddedWebInput.name = "saveAddedWebInput";
    saveAddedWebInput.id = "saveAddedWebInput";
    saveAddedWebInput.innerHTML = "<a style='color: green;', onclick='addWeb();'>&#9681;</a></span>";
    saveAddedWebElement.appendChild(saveAddedWebInput);

    let cancelAddWebElement = document.getElementById("cancelAddWeb");
    let cancelAdddWebInput = document.createElement("a");
    cancelAdddWebInput.name = "cancelAdddWebInput";
    cancelAdddWebInput.id = "cancelAdddWebInput";
    cancelAdddWebInput.innerHTML = "<a style='color: red;', onclick='closeAddWeb();'>&#9680;</a></span>";
    cancelAddWebElement.appendChild(cancelAdddWebInput);
}


function formUpdateWebimage(webNumber) {
    
    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    //Visar användaren vilken bild som editeras
    currentEditingImage = document.getElementById("webImageInput" + webNumber);
    currentEditingImage.style.filter = "grayscale(100%)";

    //Visar formuläret för att byta bild
    editWebImage.style.display = "block";

    theWebNumber = webNumber;
    saveWebNumber = document.getElementById("rememberWebNumber").value = theWebNumber;

    //Visar var formuläret finns för att byta bild
    editWebImage.scrollIntoView();
}


function addWeb() {
    let addWebnameNow = document.getElementById("addWebNameInput").value;
    let addWebUrlNow = document.getElementById("addWebUrlInput").value;
    let addWebDescriptionNow = document.getElementById("addWebDescriptionInput").value;

    if(addWebnameNow == "" || addWebUrlNow =="" || addWebDescriptionNow =="") {
        errorMessageAddWeb.innerHTML = "Alla fält måste vara ifyllda";

    } else {

    let jsonText = JSON.stringify({
        "WEBNAME": addWebnameNow,
        "WEBURL": addWebUrlNow,
        "WEBDESCRIPTION": addWebDescriptionNow,
    });

    const addWebNow = {
        method: 'POST',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlWeb, addWebNow);
    fetch(request)
        .then(() => closeAddWeb())
        .catch((error) => console.log('FEL med fetch post hemsida: ' + error));
    }
}


function closeAddWeb() {

    let closeWebnameElement = document.getElementById("addWebName");
    closeWebnameElement.innerHTML = "";
    let closeWebUrlElement = document.getElementById("addWebUrl");
    closeWebUrlElement.innerHTML = "";
    let closeWebDescriptionElement = document.getElementById("addWebDescription");
    closeWebDescriptionElement.innerHTML = "";
    let closeAddedWebElement = document.getElementById("saveAddedWeb");
    closeAddedWebElement.innerHTML = "";
    let closeCancelWebElement = document.getElementById("cancelAddWeb");
    closeCancelWebElement.innerHTML = "";

    callAllAreas();
}


//Uppdatera hemsida
function updateWeb(webNumber) {

    let updateWebName = document.getElementById("webNameInput" + webNumber).value;
    let updateWebUrl = document.getElementById("editUrlInputElement" + webNumber).value;
    let updateWebDescription = document.getElementById("webDescriptionInput" + webNumber).value;

    if(updateWebName =="" || updateWebUrl =="" || updateWebDescription =="") {
        document.getElementById("errorMessageWeb" + webNumber).innerHTML = "Alla fält måste vara ifyllda";
    
    } else { 

    let jsonText = JSON.stringify({
        "ID": webNumber,
        "WEBNAME": updateWebName,
        "WEBURL": updateWebUrl,
        "WEBDESCRIPTION": updateWebDescription,
    });

    const updateWebNow = {
        method: 'PUT',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlWeb, updateWebNow);

    fetch(request)
        
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera hemsida: ' + error));
    }
}


function updateWebImage(webImageFile, rememberedWebNumber) {

    //Stoppar anrop när index.php bara laddas om
    if(webImageFile === null) {
        return;
    } else {

        //Verkar som att den måste döpas om för att kunna skickas vidare till databasen?
        let updateThisWebImage = webImageFile;
        let updateWithRememberedWebNumber = rememberedWebNumber;

        let jsonText = JSON.stringify({
            "ID": updateWithRememberedWebNumber,
            "WEBIMAGE": updateThisWebImage,
        });


        const updateWebImageNow = {
            method: 'PUT',
            mode: "cors",
            headers: new Headers({'Content-Type': 'application/json'}),
            body: jsonText
        };

        const request = new Request(urlWebImage, updateWebImageNow);

        fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera webbild: ' + error));
    }

}

//Radera kurs
function deleteWeb(webNumber) {

    let jsonText = JSON.stringify({
        "ID": webNumber,
    });

    const deleteWebNow = {
        method: 'DELETE',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlWeb, deleteWebNow);
    fetch(request)
        .then(() => getWeb())
        .catch((error) => console.log('FEL med fetch radera hemsida: ' + error));
}