/* Anropar alla gemensamt pga att koden för att göra fälten i arrayen nedan synliga igen ligger 
i getFunktionerna där all information hämtas per sida */
function callAllAreas() {
    getPersonal();
    getLanguage();
    getWork();
    getCourse();
    getWeb();
}

/* Samlar alla redigerings- och raderingsknappar så att dom kan gömmas när ett fält är 
öppnat för att undvika att användaren klickar på flera samtidigt. */
let noEdit = [editPersonal1, editPersonal2, editPersonal3, editPersonal4, editLanguage, work5, work6, course5, course6, addWorkButton, addCourseButton, addWebButton];


function hideEditWebpage() {

    storeAllEditWebInput = document.querySelectorAll('*[id^="editWebInput"]');
    storeAllDeleteWebInput = document.querySelectorAll('*[id^="deleteWebInput"]');
    storeAllEditImageInput = document.querySelectorAll('*[id^="editImageInput"]');

    storeAllEditWebInput.forEach(item => item.style.visibility = "hidden");
    storeAllDeleteWebInput.forEach(item => item.style.visibility = "hidden");
    storeAllEditImageInput.forEach(item => item.style.visibility = "hidden");
}