//Exercice1

displayDateTimeForCity("Brussels","Europe/Brussels");
displayDateTimeForCity("Anchorage","America/Anchorage");
displayDateTimeForCity("Reykjavik","Atlantic/Reykjavik");
displayDateTimeForCity("SaintPetersburg","Europe/Moscow");

function displayDateTimeForCity(city, timeZone){
    let currentCity = createElementForTimeZone(city);
    setInterval(function(){
        currentCity.innerText = `The current Time at ${city} is : ${getCurrentTimeForTZ(timeZone)}`
    },1000)
}

function createElementForTimeZone(city){
   let element = document.createElement('p');
   element.classList.add("tzDisplay__"+city);
   document.querySelector('body').appendChild(element);
   return element;
}
function getCurrentTimeForTZ(timeZone) {
    return new Date(Date.now()).toLocaleString(undefined, {timeZone: timeZone});
}