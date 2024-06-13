const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Dociembre",
];

//añadir dias
function initCalendar()
{
    //agarrar los dias previos y el mes actual junto a sus dias
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    date.innerHTML = months[month] + " "+ year;


    //añadir dias
    let days ="";

    //dias del mes anterior
    for (let x = day; x>0; x--)
    {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }
    //dias del mes actual

    for(let i=1; i<=lastDate; i++)
    {
        if(i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth())
        {
            days += `<div class="day today">${i}</div>`;
        }
        //dias restantes
        else
        {
            days += `<div class="day">${i}</div>`;
        }
    }

    //dias siguientes del mes
    for(let j = 1; j <=nextDays; j++)
    {
        days += `<div class="day next-date">${j}</div>`;
    }
    daysContainer.innerHTML = days;
}
initCalendar();