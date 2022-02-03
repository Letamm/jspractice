document.getElementById("name").innerHTML = "Hello! My name is Akzhol, I'm from group CS-2116";

let year = new Date();
document.getElementById("year").innerHTML = "Year: " + year.getFullYear();

let day = new Date;
let days = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday", "Friday", "Saturday"];
document.getElementById("day").innerHTML = "Day: " + days[day.getDay()];

const date = new Date();
document.getElementById("date").innerHTML = "Date: " + date.getDate();

const month = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = "Month: " + months[month.getMonth()];

const hour = new Date();
const minute = new Date();
const second = new Date();
document.getElementById("time").innerHTML = "Time: " + hour.getHours() + ":" + minute.getMinutes() + ":" + second.getSeconds();


const end = 877;
document.getElementById("end").innerHTML = end + " days 'til the end.";

var result;
var box1 = document.getElementById("first").value;
var box2 = document.getElementById("second").value;
function multiply() {
  var first = Number(box1.value);
  var second = Number(box2.value);
  result = first * second;
  document.getElementById("result").innerHTML = result;
}
function divide() {
  var first = Number(box1.value);
  var second = Number(box2.value);
  result = first / second;
  document.getElementById("result").innerHTML = result;
}
