// Q1
let todayDate = new Date();
document.write(`${todayDate}<br><br>`);

// Q2
let months = ["January", "February", "March", "April","May", "June", 
    "July", "August","September", "October", "November", "December"];

let currentMonth = new Date().getMonth();
alert(`Current Month: ${months[currentMonth]}`);

// Q3
let days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
let today = new Date().getDay();
alert(`Today is: ${days[today]}`);

// Q4
let funday = new Date().getDay();
if (funday === 0 || funday === 6) {
    alert(`It's Fun Day`);
}else{
    alert(`It's a Working Day`);
}

// Q5
let fifteenth = new Date().getDate();
if (fifteenth < 16) {
    alert('First fifteen days of the month');
}else{
    alert('Last days of the month');
}

// Q6
let date = new Date();
let millesecond = Math.floor(date.getTime());
let minutes = Math.floor(date.getTime() / (1000 * 60));
document.write(`Elapsed milliseconds since January 1, 1970: ${millesecond}<br><br>`);
document.write(`Elapsed minutes since January 1, 1970: ${minutes}<br><br>`);

// Q7
let dateformatt = new Date();
let hours = dateformatt.getHours();
if (hours < 12) {
    alert(`It's AM`);
}else{
    alert(`It's PM`);
}

// Q8
let laterDate = new Date(2020, 11, 31);
document.write(`${laterDate}<br><br>`);

// Q9
let ramadan = new Date(2026, 1, 19);
let now = new Date();
let difference = now - ramadan;
let ramadamDays = Math.floor(difference / (1000 * 60 * 60 * 24));
document.write(`${ramadamDays} days have passed since 1st Ramadan, 2026 <br><br>`);

// Q10
let elapsedDate = new Date(2015, 0, 1);
let todayDate1 = new Date();
let elapsedSeconds = (todayDate1 - elapsedDate) / 1000;
document.write(`On reference date ${todayDate1}, ${elapsedSeconds} seconds have passed since the beginning of 2015 <br><br>`);

// Q11
let currentDate = new Date();
document.write(`current date: ${currentDate} <br><br>`);
let hours1 = currentDate.getHours();
currentDate.setHours(hours1 - 1);
document.write(`1 hour ago, it was ${currentDate} <br><br>`);

// Q12
let currentDate1 = new Date();
let year = currentDate1.getFullYear();
alert("current date: " + currentDate1 +"\n100 years back, it was " + new Date(year - 100, currentDate1.getMonth(), currentDate1.getDate(),currentDate1.getHours(), currentDate1.getMinutes(), currentDate1.getSeconds()));

// Q13
let userAge = prompt("Enter Your Date of Birth (DD-MM-YYYY)");
let parts = userAge.split("-");
let day = Number(parts[0]);
let month = Number(parts[1]) - 1;
let year1 = Number(parts[2]);

let dob = new Date(year1, month, day);
let today1 = new Date();

let age = today1.getFullYear() - dob.getFullYear();

if (
  today1.getMonth() < dob.getMonth() ||
  (today1.getMonth() === dob.getMonth() && today1.getDate() < dob.getDate())
) {
  age--;
}

document.write(`Your age is: ${age}<br>`);
document.write(`Your Birth year is: ${year}`);
