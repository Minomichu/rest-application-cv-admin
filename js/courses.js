let urlCourse = 'http://mimmimi.com/Webb3/projekt/backend/rest.php/course';

const listedCoursesElement = document.getElementById("listedCourses");
let course1 = document.getElementById("course1");
let course2 = document.getElementById("course2");
let course3 = document.getElementById("course3");
let course4 = document.getElementById("course4");
let course5 = document.getElementById("course5");
let course6 = document.getElementById("course6");

let courseTitle1 = document.getElementById("courseTitle1");
let courseTitle2 = document.getElementById("courseTitle2");
let courseTitle3 = document.getElementById("courseTitle3");
let courseTitle4 = document.getElementById("courseTitle4");
let courseTitle5 = document.getElementById("courseTitle5");
let courseTitle6 = document.getElementById("courseTitle6");

let addCourseButton = document.getElementById("addCourseButton");
let errorMessageCourse = document.getElementById('errorMessageCourse');


window.onload = getCourse(); 

//Hämtar kurser 
function getCourse() {

    fetch(urlCourse)
        .then(function(response) {

            if (response.status !== 200) {
                console.log('Fel vid hämtning av alla kurser' + response.status);
                return;
            }
            response.json().then(function(data) {
                displayEditCourses(data); 
            });
        }
    )
    .catch((error) => console.log('FEL med getCourse: ' + error));
}


//Inloggat läge
function displayEditCourses(data) {

    courseTitle1.innerHTML = "Skola";
    courseTitle2.innerHTML = "Kursnamn";
    courseTitle3.innerHTML = "Startdatum";
    courseTitle4.innerHTML = "Slutdatum";
    courseTitle5.innerHTML = "Redigera";
    courseTitle6.innerHTML = "Radera";

    course1.innerHTML = "";
    course2.innerHTML = "";
    course3.innerHTML = "";
    course4.innerHTML = "";
    course5.innerHTML = "";
    course6.innerHTML = "";

    errorMessageCourse.innerHTML = "";


    data.forEach((row) => {

        let number = row['ID'];

        let schoolElement = document.getElementById("course1");
        let schoolInput = document.createElement("input");
        schoolInput.setAttribute("disabled", "disabled");
        schoolInput.type = "text";
        schoolInput.name = "schoolInput";
        schoolInput.id = "schoolInput" + number;
        schoolInput.value += row['SCHOOL'];
        schoolElement.appendChild(schoolInput);


        let coursenameElement = document.getElementById("course2");
        let coursenameInput = document.createElement("input");
        coursenameInput.setAttribute("disabled", "disabled");
        coursenameInput.type = "text";
        coursenameInput.name = "coursenameInput";
        coursenameInput.id = "coursenameInput" + number;
        coursenameInput.value += row['COURSENAME'];
        coursenameElement.appendChild(coursenameInput);


        let courseStartdateElement = document.getElementById("course3");
        let courseStartdateInput = document.createElement("input");
        courseStartdateInput.setAttribute("disabled", "disabled");
        courseStartdateInput.type = "text";
        courseStartdateInput.name = "courseStartdateInput";
        courseStartdateInput.id = "courseStartdateInput" + number;
        courseStartdateInput.value += row['STARTDATE'];
        courseStartdateElement.appendChild(courseStartdateInput);


        let courseEnddateElement = document.getElementById("course4");
        let courseEnddateInput = document.createElement("input");
        courseEnddateInput.setAttribute("disabled", "disabled");
        courseEnddateInput.type = "text";
        courseEnddateInput.name = "courseEnddateInput";
        courseEnddateInput.id = "courseEnddateInput" + number;
        courseEnddateInput.value += row['ENDDATE'];
        courseEnddateElement.appendChild(courseEnddateInput);


        let editCourseElement = document.getElementById("course5");
        let editCourseMargin = document.createElement("div");
        editCourseMargin.setAttribute('id', 'editCourseMargin');
        let editCourseInput = document.createElement("div");
        editCourseInput.name = "editCourseInput";
        editCourseInput.id = "editCourseInput" + number;
        editCourseInput.innerHTML += '<a onclick="editCourseMode(' + number + ' );">&#9998;</a>';
        editCourseMargin.appendChild(editCourseInput);
        editCourseElement.appendChild(editCourseMargin);


        let deleteCourseElement = document.getElementById("course6");
        let deleteCourseMargin = document.createElement("div");
        deleteCourseMargin.setAttribute('id', 'deleteCourseMargin');
        let deleteCourseInput = document.createElement("div");
        deleteCourseInput.name = "deleteCourseInput";
        deleteCourseInput.id = "deleteCourseInput" + number;
        deleteCourseInput.innerHTML += '<a onclick="deleteCourse(' + number + ' );">X</a>';
        deleteCourseMargin.appendChild(deleteCourseInput);
        deleteCourseElement.appendChild(deleteCourseMargin);
    });
}


//Öppnar formulären så dom blir redigerbara
function editCourseMode(number) {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    courseTitle5.innerHTML = "";
    courseTitle6.innerHTML = "";
    courseTitle5.innerHTML = "Spara";
    courseTitle6.innerHTML = "Avbryt";

    document.getElementById("schoolInput" + number).disabled = false;
    document.getElementById("coursenameInput" + number).disabled = false;
    document.getElementById("courseStartdateInput" + number).disabled = false;
    document.getElementById("courseEnddateInput" + number).disabled = false;

    document.getElementById("editCourseInput" + number).style.visibility = "visible";
    document.getElementById("deleteCourseInput" + number).style.visibility = "visible";

    document.getElementById("editCourseInput" + number).innerHTML = "<a style='color: green;', onclick='updateCourse(" + number + " );'>&#9681;</a></span>";
    document.getElementById("deleteCourseInput" + number).innerHTML = "<a style='color: red;', onclick='callAllAreas();'>&#9680;</a></span>";
}


//Lägg till kurs
addCourseButton.addEventListener('click', formAddCourse, false);

function formAddCourse() {

    noEdit.forEach(perEdit => perEdit.style.visibility = "hidden");
    hideEditWebpage();

    courseTitle5.innerHTML = "";
    courseTitle6.innerHTML = "";
    courseTitle5.innerHTML = "Spara";
    courseTitle6.innerHTML = "Avbryt"; 


    let addSchoolElement = document.getElementById("addSchool");
    let addSchoolInput = document.createElement("input");
    addSchoolInput.type = "text";
    addSchoolInput.name = "addSchoolInput";
    addSchoolInput.id = "addSchoolInput";
    addSchoolInput.value = "";
    addSchoolElement.appendChild(addSchoolInput);

    let addCoursenameElement = document.getElementById("addCoursename");
    let addCoursenameInput = document.createElement("input");
    addCoursenameInput.type = "text";
    addCoursenameInput.name = "addCoursenameInput";
    addCoursenameInput.id = "addCoursenameInput";
    addCoursenameInput.value = "";
    addCoursenameElement.appendChild(addCoursenameInput);

    let addCourseStartdateElement = document.getElementById("addCourseStartdate");
    let addCourseStartdateInput = document.createElement("input");
    addCourseStartdateInput.type = "text";
    addCourseStartdateInput.name = "addCourseStartdateInput";
    addCourseStartdateInput.id = "addCourseStartdateInput";
    addCourseStartdateInput.value = "";
    addCourseStartdateElement.appendChild(addCourseStartdateInput);

    let addCourseEnddateElement = document.getElementById("addCourseEnddate");
    let addCourseEnddateInput = document.createElement("input");
    addCourseEnddateInput.type = "text";
    addCourseEnddateInput.name = "addCourseEnddateInput";
    addCourseEnddateInput.id = "addCourseEnddateInput";
    addCourseEnddateInput.value = "";
    addCourseEnddateElement.appendChild(addCourseEnddateInput);

    let saveAddedCourseElement = document.getElementById("saveAddedCourse");
    let saveAddedCourseInput = document.createElement("a");
    saveAddedCourseInput.name = "saveAddedCourseInput";
    saveAddedCourseInput.id = "saveAddedCourseInput";
    saveAddedCourseInput.innerHTML = "<a style='color: green;', onclick='addCourse();'>&#9681;</a></span>";
    saveAddedCourseElement.appendChild(saveAddedCourseInput);

    let cancelAddCourseElement = document.getElementById("cancelAddCourse");
    let cancelAddCourseInput = document.createElement("a");
    cancelAddCourseInput.name = "cancelAddCourseInput";
    cancelAddCourseInput.id = "cancelAddCourseInput";
    cancelAddCourseInput.innerHTML = "<a style='color: red;', onclick='closeAddCourse();'>&#9680;</a></span>";
    cancelAddCourseElement.appendChild(cancelAddCourseInput);
}


function addCourse() {

    let addSchoolNow = document.getElementById("addSchoolInput").value;
    let addCoursenameNow = document.getElementById("addCoursenameInput").value;
    let addCourseStartdateNow = document.getElementById("addCourseStartdateInput").value;
    let addCourseEnddateNow = document.getElementById("addCourseEnddateInput").value;


    if(addSchoolNow =="" || addCoursenameNow =="" || addCourseStartdateNow =="" || addCourseEnddateNow =="") {
        errorMessageCourse.innerHTML = "Alla fält måste vara ifyllda";
    } else {

    let jsonText = JSON.stringify({
        "SCHOOL": addSchoolNow,
        "COURSENAME": addCoursenameNow,
        "STARTDATE": addCourseStartdateNow,
        "ENDDATE": addCourseEnddateNow
    });

    const addCoursekNow = {
        method: 'POST',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlCourse, addCoursekNow);
    fetch(request)
        .then(() => closeAddCourse())
        .catch((error) => console.log('FEL med fetch post kurs: ' + error));
    }
}


function closeAddCourse() {

    let closeSchoolElement = document.getElementById("addSchool");
    closeSchoolElement.innerHTML = "";
    let closeCoursenameElement = document.getElementById("addCoursename");
    closeCoursenameElement.innerHTML = "";
    let closeCourseStartdateElement = document.getElementById("addCourseStartdate");
    closeCourseStartdateElement.innerHTML = "";
    let closeCourseEnddateElement = document.getElementById("addCourseEnddate");
    closeCourseEnddateElement.innerHTML = "";
    let closeAddedCourseElement = document.getElementById("saveAddedCourse");
    closeAddedCourseElement.innerHTML = "";
    let closeCancelCourseElement = document.getElementById("cancelAddCourse");
    closeCancelCourseElement.innerHTML = "";

    callAllAreas();
}


//Uppdatera kurs
function updateCourse(number) {

    let updateSchool = document.getElementById("schoolInput" + number).value;
    let updateCoursename = document.getElementById("coursenameInput" + number).value;
    let updateCourseStartdate = document.getElementById("courseStartdateInput" + number).value;
    let updateCourseEnddate = document.getElementById("courseEnddateInput" + number).value;

    if(updateSchool =="" || updateCoursename =="" || updateCourseStartdate =="" || updateCourseEnddate =="") {
        errorMessageCourse.innerHTML = "Alla fält måste vara ifyllda";
        
    } else { 

    let jsonText = JSON.stringify({
        "ID": number,
        "SCHOOL": updateSchool,
        "COURSENAME": updateCoursename,
        "STARTDATE": updateCourseStartdate,
        "ENDDATE": updateCourseEnddate
    });

    const updateCourseNow = {
        method: 'PUT',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlCourse, updateCourseNow);

    fetch(request)
        .then(() => callAllAreas())
        .catch((error) => console.log('FEL med fetch uppdatera kurs: ' + error));
    }
}


//Radera kurs
function deleteCourse(number) {

    let jsonText = JSON.stringify({
        "ID": number,
    });

    const deleteCourseNow = {
        method: 'DELETE',
        mode: "cors",
        headers: new Headers({'Content-Type': 'application/json'}),
        body: jsonText
    };

    const request = new Request(urlCourse, deleteCourseNow);
    fetch(request)
        .then(() => getCourse())
        .catch((error) => console.log('FEL med fetch radera kurs: ' + error));
}