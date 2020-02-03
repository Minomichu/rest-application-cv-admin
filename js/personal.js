let urlPersonal = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/personal';
let urlPersonalimage = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/personalimage';

const listedPersonalElement = document.getElementById("listedPersonal");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let myWorktitle = document.getElementById("myWorktitle");
let logOutButton = document.getElementById("logOutButton");

let imagePersonal = document.getElementById("imagePersonal");
let phonePersonal = document.getElementById("phonePersonal");
let emailPersonal = document.getElementById("emailPersonal");
let cityPersonal = document.getElementById("cityPersonal");

let editPersonal1 = document.getElementById("editPersonal1");
let editPersonal2 = document.getElementById("editPersonal2");
let editPersonal3 = document.getElementById("editPersonal3");
let editPersonal4 = document.getElementById("editPersonal4");

let editPersonal1save = document.getElementById("editPersonal1save");
let editPersonal1cancel = document.getElementById("editPersonal1cancel");
let editPersonal3save = document.getElementById("editPersonal3save");
let editPersonal3cancel = document.getElementById("editPersonal3cancel");
let editPersonal4save = document.getElementById("editPersonal4save");
let editPersonal4cancel = document.getElementById("editPersonal4cancel");

let cancelChangeProfilePicture = document.getElementById("cancelChangeProfilePicture");
cancelChangeProfilePicture.addEventListener('click', callAllAreas, false);

let numberPersonal = 1;


window.onload = getPersonal(); 

//Hämtar personinfo
function getPersonal() {

    fetch(urlPersonal)
        .then(function(response) {

            if (response.status !== 200) {
                console.log('Fel vid hämtning av all personinfo' + response.status);
                return;
            }
            response.json().then(function(data) {
                displayEditPersonal(data); 
            });
        }
    )
    .catch((error) => console.log('FEL med getPersonal: ' + error));
}


//Inloggat läge
function displayEditPersonal(data) {

    //Visar alla redigerings- och raderingsknappar för allt utom webpage
    noEdit.forEach(perEdit => perEdit.style.visibility = "visible");

    document.getElementById('editProfilePicture').style.display = "none";
    contactTitle.innerHTML = "KONTAKT";
    cityTitle.innerHTML = "STAD";

    firstname.innerHTML = "";
    lastname.innerHTML = "";
    myWorktitle.innerHTML = "";
    imagePersonal.innerHTML = "";
    phonePersonal.innerHTML = "";
    emailPersonal.innerHTML = "";
    cityPersonal.innerHTML = "";

    editPersonal1save.innerHTML = "";
    editPersonal1cancel.innerHTML ="";
    editPersonal3save.innerHTML = "";
    editPersonal3cancel.innerHTML ="";
    editPersonal4save.innerHTML = "";
    editPersonal4cancel.innerHTML ="";

    errorMessagePersonal1.innerHTML = "";
    errorMessagePersonal3.innerHTML = "";
    errorMessagePersonal4.innerHTML = "";

    editPersonal1.innerHTML = '<a onclick="editPersonalMode(1);">&#9998;</a>';
    editPersonal2.innerHTML = '<a onclick="editPersonalMode(2);">&#9998;</a>';
    editPersonal3.innerHTML = '<a onclick="editPersonalMode(3);">&#9998;</a>';
    editPersonal4.innerHTML = '<a onclick="editPersonalMode(4);">&#9998;</a>';
    logOutButton.innerHTML = '<a href="logOut.php">Logga ut</a>'


    data.forEach((row) => {

        let firstnameElement = document.getElementById("firstname");
        let firstnameInput = document.createElement("input");
        firstnameInput.setAttribute("disabled", "disabled");
        firstnameInput.type = "text";
        firstnameInput.name = "firstnameInput";
        firstnameInput.id = "firstnameInput";
        firstnameInput.value += row['FIRSTNAME'];
        firstnameElement.appendChild(firstnameInput);

        let lastnameElement = document.getElementById("lastname");
        let lastnameInput = document.createElement("input");
        lastnameInput.setAttribute("disabled", "disabled");
        lastnameInput.type = "text";
        lastnameInput.name = "lastnameInput";
        lastnameInput.id = "lastnameInput";
        lastnameInput.value += row['LASTNAME'];
        lastnameElement.appendChild(lastnameInput);

        let myWorktitleElement = document.getElementById("myWorktitle");
        let myWorktitleInput = document.createElement("input");
        myWorktitleInput.setAttribute("disabled", "disabled");
        myWorktitleInput.type = "text";
        myWorktitleInput.name = "myWorktitleInput";
        myWorktitleInput.id = "myWorktitleInput";
        myWorktitleInput.value += row['WORKTITLE'];
        myWorktitleElement.appendChild(myWorktitleInput);

        let imagePersonalElement = document.getElementById("imagePersonal");
        let imagePersonalInput = document.createElement("img");
        imagePersonalInput.name = "imagePersonalInput";
        imagePersonalInput.id = "imagePersonalInput";
        imagePersonalInput.src += "userImages/" + row['PICTURE'];
        imagePersonalElement.appendChild(imagePersonalInput);

        let phonePersonalElement = document.getElementById("phonePersonal");
        let phonePersonalInput = document.createElement("input");
        phonePersonalInput.setAttribute("disabled", "disabled");
        phonePersonalInput.type = "text";
        phonePersonalInput.name = "phonePersonalInput";
        phonePersonalInput.id = "phonePersonalInput";
        phonePersonalInput.value += row['PHONE'];
        phonePersonalElement.appendChild(phonePersonalInput);

        let emailPersonalElement = document.getElementById("emailPersonal");
        let emailPersonalInput = document.createElement("input");
        emailPersonalInput.setAttribute("disabled", "disabled");
        emailPersonalInput.type = "text";
        emailPersonalInput.name = "emailPersonalInput";
        emailPersonalInput.id = "emailPersonalInput";
        emailPersonalInput.value += row['EMAIL'];
        emailPersonalElement.appendChild(emailPersonalInput);

        let cityPersonalElement = document.getElementById("cityPersonal");
        let cityPersonalInput = document.createElement("input");
        cityPersonalInput.setAttribute("disabled", "disabled");
        cityPersonalInput.type = "text";
        cityPersonalInput.name = "cityPersonalInput";
        cityPersonalInput.id = "cityPersonalInput";
        cityPersonalInput.value += row['CITY'];
        cityPersonalElement.appendChild(cityPersonalInput);
    });
}


//Öppnar formulären så dom blir redigerbara
function editPersonalMode(editNumber) {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();


    if (editNumber == 1) {

        //Editeraknappen töms för att inte skapa stora luckor mellan texterna av att endast döljas som ovan
        editPersonal1.innerHTML = "";
        logOutButton.innerHTML = "";
    
        document.getElementById("firstnameInput").disabled = false;
        document.getElementById("lastnameInput").disabled = false;
        document.getElementById("myWorktitleInput").disabled = false;

        editPersonal1save.innerHTML = "<a onclick='updatePersonal();'>Spara</a>";
        editPersonal1cancel.innerHTML = "<a onclick='callAllAreas();'>Avbryt</a>";
    
    } else if (editNumber == 2) {

        editPersonal2.innerHTML = "";
        document.getElementById('editProfilePicture').style.display = "block";

    } else if (editNumber == 3) {

        editPersonal3.innerHTML = "";

        document.getElementById("phonePersonalInput").disabled = false;
        document.getElementById("emailPersonalInput").disabled = false;

        editPersonal3save.innerHTML = "<a onclick='updatePersonal();'>Spara</a>";
        editPersonal3cancel.innerHTML = "<a onclick='callAllAreas();'>Avbryt</a>";

    } else if (editNumber == 4) {

        editPersonal4.innerHTML = "";

        document.getElementById("cityPersonalInput").disabled = false;
    
        editPersonal4save.innerHTML = "<a onclick='updatePersonal();'>Spara</a>";
        editPersonal4cancel.innerHTML = "<a onclick='callAllAreas();'>Avbryt</a>";
    
    } else {
        getPersonal();
    }
}


//Uppdatera profilbild
function updateProfilePicture(profilePicture) {

    //Stoppar anrop när index.php bara laddas om
    if(profilePicture === null) {
        return;
    } else {

        let updateImagePersonal = document.getElementById("imagePersonalInput");
        updateImagePersonal = profilePicture;

        let jsonText = JSON.stringify({
            "ID": numberPersonal,
            "PICTURE": updateImagePersonal,
        });

        const updatePersonalImageNow = {
            method: 'PUT',
            mode: "cors",
            headers: new Headers({'Content-Type': 'application/json'}),
            body: jsonText
        };

        const request = new Request(urlPersonalimage, updatePersonalImageNow);

        fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera jobb: ' + error));
    }
}


function updatePersonal() {

    let updateFirstname = document.getElementById("firstnameInput").value;
    let updateLastname = document.getElementById("lastnameInput").value;
    let updateMyWorktitle = document.getElementById("myWorktitleInput").value;
    let updatePhonePersonal = document.getElementById("phonePersonalInput").value;
    let updateEmailPersonal = document.getElementById("emailPersonalInput").value;
    let updateCityPersonal = document.getElementById("cityPersonalInput").value;

    if(updateFirstname =="" || updateLastname =="" || updateMyWorktitle =="") {
        document.getElementById('errorMessagePersonal1').innerHTML = "Alla fält måste vara ifyllda";
    } else if(updatePhonePersonal =="" || updateEmailPersonal =="") {
        document.getElementById('errorMessagePersonal3').innerHTML = "Alla fält måste vara ifyllda";
    } else if(updateCityPersonal =="") {
        document.getElementById('errorMessagePersonal4').innerHTML = "Fältet måste vara ifyllt";
    } else { 


    let jsonText = JSON.stringify({
        "ID": numberPersonal,
        "FIRSTNAME": updateFirstname,
        "LASTNAME": updateLastname,
        "WORKTITLE": updateMyWorktitle,
        "PHONE": updatePhonePersonal,
        "EMAIL": updateEmailPersonal,
        "CITY": updateCityPersonal
    });

    const updatePersonalNow = {
        method: 'PUT',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlPersonal, updatePersonalNow);

    fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera jobb: ' + error));
    }
}