//Days Since my BirthDate
let refDate = new Date(1989, 10, 21);
displayNumberOfDays(refDate);

//Days since any date

let input = (prompt("Enter a date with the format : yyyy,mm,dd")).split(',').map(i => Number(i));
let date = new Date(input[0], input[1] - 1, input[2]);

displayNumberOfDays(date);

function displayNumberOfDays(refDate, element) {
    let currentElement = createElement("");
    currentElement.innerText = `There are  ${GetDays(refDate)} days passed since ${refDate}`
}

function createElement(title) {
    let element = document.createElement('p');
    element.classList.add("displayText__" + title);
    document.querySelector('body').appendChild(element);
    return element;
}

function GetDays(refDate) {

    let now = new Date(Date.now());
    return Math.floor(Math.abs(now - refDate) / (1000 * 60 * 60 * 24));

}

