
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];


let dayName = document.querySelector(".cardText__dayName");
let dayNumber = document.querySelector(".cardText__dayNumber");
let month = document.querySelector(".cardText__month");
let year = document.querySelector(".cardText__year");
let time = document.querySelector(".timeText");

setInterval(function(){
    let now = new Date(Date.now());
    dayName.innerText = days[now.getDay()].toUpperCase();
    dayNumber.innerText = now.getDay();
    month.innerText= months[now.getMonth()].toUpperCase();
    year.innerText= now.getFullYear();
    time.innerText=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
},1000)




