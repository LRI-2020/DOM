
let input = Number(prompt("Enter a number of hours : "));
displayDateTime(input);

function displayDateTime(hours) {
    let currentElement = createElement(`futureDateIn${hours}Hours`);
    currentElement.innerText = `In ${hours} hours, we will be the ${GetDateTime(hours)}`
}

function createElement(title) {
    let element = document.createElement('p');
    element.classList.add("displayText__" + title);
    document.querySelector('body').appendChild(element);
    return element;
}

function GetDateTime(hours) {

    return new Date(Date.now() + (hours * 3600 * 1000));

}

