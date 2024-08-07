// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputData = document.querySelector(".input-section input");
const startButton = document.querySelector(".input-section button");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(inputData, options);

let inputDataValue = Date.now();

inputData.addEventListener("change", getData);
function getData(e) {
    inputDataValue = e.target.value; 
};
console.log(inputDataValue);


const intervalValue = setInterval(() => {
let nowTime = Date.now();
console.log(nowTime);
}, 2000);

clearInterval(intervalValue);

const date = new Date();
console.log(date.getTime());    