// Elements opalen uit de HTML
const days = document.querySelector(".days");
const dateHeader = document.querySelector("#date");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

// Startdatum
let currentDate = new Date(2026, 8); 

//Array met maandanamen
const monthNames = [
    "January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"
];


function renderMonth() {
    //Eerste dag van de maand bepalen
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let firstDayOfMonthIndex = firstDayOfMonth.getDay();

    days.innerHTML = "";

    //Titel in de header bijwerekn
    if (dateHeader) {
        dateHeader.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    }

    if (firstDayOfMonthIndex === 0) {
    firstDayOfMonthIndex = 7;
    }
    
    //De dagen van de maand toevoegen
    for (let i = 0; i < firstDayOfMonthIndex - 1; i++) {
    const emptyDay = document.createElement("li");
    emptyDay.classList.add("empty");
    days.appendChild(emptyDay);
    }

    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const numberOfDays = lastDayOfMonth.getDate();

    for (let i = 1; i <= numberOfDays; i++) {
        const day = document.createElement('li');
        day.classList.add('day');
        day.textContent = i;
        days.appendChild(day);
    }
}

function nextMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    renderMonth();
}

function prevMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    renderMonth();
}


nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);

renderMonth();
