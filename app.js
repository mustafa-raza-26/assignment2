let todayDate = new Date();
document.write(`${todayDate}<br><br>`);

let months = ["January", "February", "March", "April","May", "June", 
    "July", "August","September", "October", "November", "December"];

let currentMonth = new Date().getMonth();
alert(`Current Month: ${months[currentMonth]}`);

let days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
let today = new Date().getDay();
alert(`Today is: ${days[today]}`);

let funday = new Date().getDay();
if (funday === 0 || funday === 6) {
    alert(`It's Fun Day`);
}else{
    alert(`It's a Working Day`);
}

let fifteenth = new Date().getDate();
if (fifteenth < 16) {
    alert('First fifteen days of the month');
}else{
    alert('Last days of the month');
}

let date = new Date();
let millesecond = Math.floor(date.getTime());
let minutes = Math.floor(date.getTime() / (1000 * 60));
document.write(`Elapsed milliseconds since January 1, 1970: ${millesecond}<br><br>`);
document.write(`Elapsed minutes since January 1, 1970: ${minutes}<br><br>`);

let dateformatt = new Date();
let hours = dateformatt.getHours();
if (hours < 12) {
    alert(`It's AM`);
}else{
    alert(`It's PM`);
}

let laterDate = new Date(2020, 11, 31);
document.write(`${laterDate}<br><br>`);

let ramadan = new Date(2026, 1, 19);
let now = new Date();
let difference = now - ramadan;
let ramadamDays = Math.floor(difference / (1000 * 60 * 60 * 24));
document.write(`${ramadamDays} days have passed since 1st Ramadan, 2026`);
