

let input = document.querySelector("input#hours");

input.addEventListener('keyup',function(){
    displayDateTime(input.value);
})



function displayDateTime(hours) {
    let currentElement = document.getElementById(`futureDateTime`);
    currentElement.innerText = `In ${hours} hours, we will be the ${GetDateTime(hours)}`
}
function GetDateTime(hours) {

    return new Date(Date.now() + (hours * 3600 * 1000));

}

