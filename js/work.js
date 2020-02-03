let urlWork = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/work';

const listedWorkElement = document.getElementById("listedWork");
let work1 = document.getElementById("work1");
let work2 = document.getElementById("work2");
let work3 = document.getElementById("work3");
let work4 = document.getElementById("work4");
let work5 = document.getElementById("work5");
let work6 = document.getElementById("work6");

let workTitle1 = document.getElementById("workTitle1");
let workTitle2 = document.getElementById("workTitle2");
let workTitle3 = document.getElementById("workTitle3");
let workTitle4 = document.getElementById("workTitle4");
let workTitle5 = document.getElementById("workTitle5");
let workTitle6 = document.getElementById("workTitle6");

let addWorkButton = document.getElementById("addWorkButton");
let errorMessageWork = document.getElementById('errorMessageWork');


window.onload = getWork(); 

//Hämtar kurser 
function getWork() {

    fetch(urlWork)
        .then(function(response) {

            if (response.status !== 200) {
                console.log('Fel vid hämtning av alla jobb' + response.status);
                return;
            }
            response.json().then(function(data) {
                displayEditWork(data); 
            });
        }
    )
    .catch((error) => console.log('FEL med getWork: ' + error));
}


//Inloggat läge
function displayEditWork(data) {

    workTitle1.innerHTML = "Arbetsplats";
    workTitle2.innerHTML = "Yrke";
    workTitle3.innerHTML = "Startdatum";
    workTitle4.innerHTML = "Slutdatum";
    workTitle5.innerHTML = "Redigera";
    workTitle6.innerHTML = "Radera";

    work1.innerHTML = "";
    work2.innerHTML = "";
    work3.innerHTML = "";
    work4.innerHTML = "";
    work5.innerHTML = "";
    work6.innerHTML = "";
    errorMessageWork.innerHTML = "";


    data.forEach((row) => {

        let number = row['ID'];

        let workplaceElement = document.getElementById("work1");
        let workplaceInput = document.createElement("input");
        workplaceInput.setAttribute("disabled", "disabled");
        workplaceInput.type = "text";
        workplaceInput.name = "workplaceInput";
        workplaceInput.id = "workplaceInput" + number;
        workplaceInput.value += row['WORKPLACE'];
        workplaceElement.appendChild(workplaceInput);


        let worktitleElement = document.getElementById("work2");
        let worktitleInput = document.createElement("input");
        worktitleInput.setAttribute("disabled", "disabled");
        worktitleInput.type = "text";
        worktitleInput.name = "worktitleInput";
        worktitleInput.id = "worktitleInput" + number;
        worktitleInput.value += row['TITLE'];
        worktitleElement.appendChild(worktitleInput);


        let startdateElement = document.getElementById("work3");
        let startdateInput = document.createElement("input");
        startdateInput.setAttribute("disabled", "disabled");
        startdateInput.type = "text";
        startdateInput.name = "startdateInput";
        startdateInput.id = "startdateInput" + number;
        startdateInput.value += row['STARTDATE'];
        startdateElement.appendChild(startdateInput);


        let enddateElement = document.getElementById("work4");
        let enddateInput = document.createElement("input");
        enddateInput.setAttribute("disabled", "disabled");
        enddateInput.type = "text";
        enddateInput.name = "enddateInput";
        enddateInput.id = "enddateInput" + number;
        enddateInput.value += row['ENDDATE'];
        enddateElement.appendChild(enddateInput);


        let editWorkElement = document.getElementById("work5");
        let editWorkMargin = document.createElement("div");
        editWorkMargin.setAttribute('id', 'editWorkMargin');
        let editWorkInput = document.createElement("div");
        editWorkInput.name = "editWorkInput";
        editWorkInput.id = "editWorkInput" + number;
        editWorkInput.innerHTML += '<a onclick="editWorkMode(' + number + ' );">&#9998;</a>';
        editWorkMargin.appendChild(editWorkInput);
        editWorkElement.appendChild(editWorkMargin);


        let deleteWorkElement = document.getElementById("work6");
        let deleteWorkMargin = document.createElement("div");
        deleteWorkMargin.setAttribute('id', 'deleteWorkMargin');

        let deleteWorkInput = document.createElement("div");
        deleteWorkInput.name = "deleteWorkInput";
        deleteWorkInput.id = "deleteWorkInput" + number;
        deleteWorkInput.innerHTML += '<a onclick="deleteWork(' + number + ' );">X</a>';
        deleteWorkMargin.appendChild(deleteWorkInput);
        deleteWorkElement.appendChild(deleteWorkMargin);
    });    
}


//Öppnar formulären så dom blir redigerbara
function editWorkMode(number) {

    /*Döljer övriga redigerings- och raderingsknappar
    så användaren inte kan börja ändra flera olika på samma gång*/
    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    //Ändrar överskrifterna från "redigera" och "radera"
    workTitle5.innerHTML = "";
    workTitle6.innerHTML = "";
    workTitle5.innerHTML = "Spara";
    workTitle6.innerHTML = "Avbryt";

    document.getElementById("workplaceInput" + number).disabled = false;
    document.getElementById("worktitleInput" + number).disabled = false;
    document.getElementById("startdateInput" + number).disabled = false;
    document.getElementById("enddateInput" + number).disabled = false;

    document.getElementById("editWorkInput" + number).style.visibility = "visible";
    document.getElementById("deleteWorkInput" + number).style.visibility = "visible";

    document.getElementById("editWorkInput" + number).innerHTML = "<a style='color: green;', onclick='updateWork(" + number + " );'>&#9681;</a></span>";
    document.getElementById("deleteWorkInput" + number).innerHTML = "<a style='color: red;', onclick='callAllAreas();'>&#9680;</a></span>";
}


//Lägg till jobb
addWorkButton.addEventListener('click', formAddWork, false);

//Skriver ut extra fält högst upp där man kan fylla på med nytt
function formAddWork() {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    workTitle5.innerHTML = "";
    workTitle6.innerHTML = "";
    workTitle5.innerHTML = "Spara";
    workTitle6.innerHTML = "Avbryt";


    let addWorkplaceElement = document.getElementById("addWorkplace");
    let addWorkplaceInput = document.createElement("input");
    addWorkplaceInput.type = "text";
    addWorkplaceInput.name = "addWorkplaceInput";
    addWorkplaceInput.id = "addWorkplaceInput";
    addWorkplaceInput.value = "";
    addWorkplaceElement.appendChild(addWorkplaceInput);

    let addWorktitleElement = document.getElementById("addWorktitle");
    let addWorktitleInput = document.createElement("input");
    addWorktitleInput.type = "text";
    addWorktitleInput.name = "addWorktitleInput";
    addWorktitleInput.id = "addWorktitleInput";
    addWorktitleInput.value = "";
    addWorktitleElement.appendChild(addWorktitleInput);

    let addWorkStartdateElement = document.getElementById("addWorkStartdate");
    let addWorkStartdateInput = document.createElement("input");
    addWorkStartdateInput.type = "text";
    addWorkStartdateInput.name = "addWorkStartdateInput";
    addWorkStartdateInput.id = "addWorkStartdateInput";
    addWorkStartdateInput.value = "";
    addWorkStartdateElement.appendChild(addWorkStartdateInput);

    let addWorkEnddateElement = document.getElementById("addWorkEnddate");
    let addWorkEnddateInput = document.createElement("input");
    addWorkEnddateInput.type = "text";
    addWorkEnddateInput.name = "addWorkEnddateInput";
    addWorkEnddateInput.id = "addWorkEnddateInput";
    addWorkEnddateInput.value = "";
    addWorkEnddateElement.appendChild(addWorkEnddateInput);

    let saveAddedWorkElement = document.getElementById("saveAddedWork");
    let saveAddedWorkInput = document.createElement("a");
    saveAddedWorkInput.name = "saveAddedWorkInput";
    saveAddedWorkInput.id = "saveAddedWorkInput";
    saveAddedWorkInput.innerHTML = "<a style='color: green;', onclick='addWork();'>&#9681;</a></span>";
    saveAddedWorkElement.appendChild(saveAddedWorkInput);

    let cancelAddWorkElement = document.getElementById("cancelAddWork");
    let cancelAdddWorkInput = document.createElement("a");
    cancelAdddWorkInput.name = "cancelAdddWorkInput";
    cancelAdddWorkInput.id = "cancelAdddWorkInput";
    cancelAdddWorkInput.innerHTML = "<a style='color: red;', onclick='closeAddWork();'>&#9680;</a></span>";
    cancelAddWorkElement.appendChild(cancelAdddWorkInput);
}


function addWork() {

    //Hämtar det användaren fyllt i och sparar i variabel
    let addWorkplaceNow = document.getElementById("addWorkplaceInput").value;
    let addWorktitleNow = document.getElementById("addWorktitleInput").value;
    let addWorkStartdateNow = document.getElementById("addWorkStartdateInput").value;
    let addWorkEnddateNow = document.getElementById("addWorkEnddateInput").value;


    if(addWorkplaceNow =="" || addWorktitleNow =="" || addWorkStartdateNow =="" || addWorkEnddateNow =="") {
        errorMessageWork.innerHTML = "Alla fält måste vara ifyllda";
    } else {

    let jsonText = JSON.stringify({
        "WORKPLACE": addWorkplaceNow,
        "TITLE": addWorktitleNow,
        "STARTDATE": addWorkStartdateNow,
        "ENDDATE": addWorkEnddateNow
    });

    const addWorkNow = {
        method: 'POST',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlWork, addWorkNow);
    fetch(request)
        .then(() => closeAddWork())
        .catch((error) => console.log('FEL med fetch post jobb: ' + error));
    }
}


function closeAddWork() {

    let closeWorkplaceElement = document.getElementById("addWorkplace");
    closeWorkplaceElement.innerHTML = "";
    let closeWorktitleElement = document.getElementById("addWorktitle");
    closeWorktitleElement.innerHTML = "";
    let closeWorkStartdateElement = document.getElementById("addWorkStartdate");
    closeWorkStartdateElement.innerHTML = "";
    let closeWorkEnddateElement = document.getElementById("addWorkEnddate");
    closeWorkEnddateElement.innerHTML = "";
    let closeAddedWorkElement = document.getElementById("saveAddedWork");
    closeAddedWorkElement.innerHTML = "";
    let closeCancelWorkElement = document.getElementById("cancelAddWork");
    closeCancelWorkElement.innerHTML = "";

    callAllAreas();
}


//Uppdatera jobb
function updateWork(number) {

    let updateWorkplace = document.getElementById("workplaceInput" + number).value;
    let updateWorktitle = document.getElementById("worktitleInput" + number).value;
    let updateWorkStartdate = document.getElementById("startdateInput" + number).value;
    let updateWorkEnddate = document.getElementById("enddateInput" + number).value;

    if(updateWorkplace =="" || updateWorktitle =="" || updateWorkStartdate =="" || updateWorkEnddate =="") {
        errorMessageWork.innerHTML = "Alla fält måste vara ifyllda";
        
    } else { 

    let jsonText = JSON.stringify({
        "ID": number,
        "WORKPLACE": updateWorkplace,
        "TITLE": updateWorktitle,
        "STARTDATE": updateWorkStartdate,
        "ENDDATE": updateWorkEnddate
    });

    const updateWorkNow = {
        method: 'PUT',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlWork, updateWorkNow);

    fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera jobb: ' + error));
    }
}


//Radera jobb
function deleteWork(number) {

    let jsonText = JSON.stringify({
        "ID": number,
    });

    const deleteWorkNow = {
        method: 'DELETE',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlWork, deleteWorkNow);
    fetch(request)
        .then(() => getWork())
        .catch((error) => console.log('FEL med fetch radera jobb: ' + error));
}