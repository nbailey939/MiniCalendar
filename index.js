const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNum = document.getElementById('day-number');
const yearElm = document.getElementById('year');

const date = new Date();
const months = date.getMonth();
monthName.innerText = date.toLocaleString('ro', { month: 'long' });
dayName.innerText = date.toLocaleString('ro', { weekday: 'long' });
dayNum.innerText = date.getDate();
yearElm.innerText = date.getFullYear();
