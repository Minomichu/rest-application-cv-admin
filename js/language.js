let urlLanguage = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/language';

let languageTitle = document.getElementById("languageTitle");
let speakLanguage = document.getElementById("speakLanguage");
let editLanguage = document.getElementById("editLanguage");


window.onload = getLanguage(); 


//Hämtar språk 
function getLanguage() {

    fetch(urlLanguage)
        .then(function(response) {

            if (response.status !== 200) {
                console.log('Fel vid hämtning av alla språk' + response.status);
                return;
            }
            response.json().then(function(data) {
                displayEditLanguage(data); 
            });
        }
    )
    .catch((error) => console.log('FEL med getLanguage: ' + error));
}


function getForEditLanguage() {

    fetch(urlLanguage)
        .then(function(response) {

            if (response.status !== 200) {
                console.log('Fel vid hämtning av alla språk' + response.status);
                return;
            }
            response.json().then(function(data) {
                editLanguageMode(data); 
            });
        }
    )
    .catch((error) => console.log('FEL med getForEditLanguage: ' + error));
}


//Inloggat läge
function displayEditLanguage(data) {

    languageTitle.innerHTML = "SPRÅK";
    speakLanguage.innerHTML = "";

    editLanguageSave.innerHTML = "";
    editLanguageCancel.innerHTML = "";
    editLanguageInfoText.innerHTML = "";

    editLanguage.innerHTML = '<a onclick="getForEditLanguage();">&#9998;</a>';
    
    data.forEach((row) => {

        let speakLanguageElement = document.getElementById("speakLanguage");
        let speakLanguageInput = document.createElement("input");
        speakLanguageInput.setAttribute("disabled", "disabled");
        speakLanguageInput.type = "text";
        speakLanguageInput.name = "speakLanguageInput";
        speakLanguageInput.id = "speakLanguageInput";
        speakLanguageInput.value += row['SPEAK'];
        speakLanguageElement.appendChild(speakLanguageInput);
    });
}


//Öppnar formulären så dom blir redigerbara
function editLanguageMode(data) {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    editLanguage.innerHTML = "";
    speakLanguage.innerHTML = "";


    let speakLanguageElement = document.getElementById("speakLanguage");
    let speakLanguageInput = document.createElement("input");
    speakLanguageInput.type = "text";
    speakLanguageInput.name = "speakLanguageInput";
    speakLanguageInput.id = "speakLanguageInput";

    data.forEach((row) => {
        speakLanguageInput.value += row['SPEAK'] + ", "; });
        
    speakLanguageElement.appendChild(speakLanguageInput);
    document.getElementById("editLanguageSave").innerHTML = "<a style='border: 1px solid #F8EBE3; border-radius: 0.3rem', onclick='addUpdateDeleteLanguage();'>Spara</a></span>";
    document.getElementById("editLanguageCancel").innerHTML = "<a style='border: 1px solid #F8EBE3; border-radius: 0.3rem', onclick='callAllAreas();'>Avbryt</a></span>";
    document.getElementById("editLanguageInfoText").innerHTML = "Skriv ett kommatecken mellan varje språk";
}


function addUpdateDeleteLanguage() {

    document.getElementById("editLanguageSave").innerHTML = "";
    document.getElementById("editLanguageCancel").innerHTML = "";

    let editLanguageNow = document.getElementById("speakLanguageInput").value;

    //Lägger modersmålet som standardspråk
    if(editLanguageNow =="") {

        let jsonText = JSON.stringify({
            "SPEAK": "Svenska"
        });

        const updateLanguageNow = {
            method: 'PUT',
            mode: "cors",
            headers: new Headers({'Content-Type': 'application/json'}),
            body: jsonText
        };

        const request = new Request(urlLanguage, updateLanguageNow);

        fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera till bara svenska: ' + error));
    
    } else { 

    let jsonText = JSON.stringify({
        "SPEAK": editLanguageNow
    });

    const updateLanguageNow = {
        method: 'PUT',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlLanguage, updateLanguageNow);

    fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera språk: ' + error));
    }
}