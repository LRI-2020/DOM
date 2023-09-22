//put last child as first child

let olElement = document.getElementsByTagName('ol')[0];
let lastChild = olElement.lastElementChild
lastChild.parentNode.insertBefore(lastChild, lastChild.parentNode.firstChild);

//Move the <h2> of the third section in the second one and vice-versa

let thirdSection = document.querySelectorAll('section')[2];
let secondSection = document.querySelectorAll('section')[1];

let h2ThirdSection = thirdSection.querySelector('h2');
let h2SecondSection = secondSection.querySelector('h2');

secondSection.insertBefore(h2ThirdSection,secondSection.firstChild);

thirdSection.firstElementChild.insertBefore(h2SecondSection,thirdSection.firstElementChild.firstElementChild);

//remove last section

// let lastSection = document.querySelectorAll('section');
// lastSection[(lastSection.length)-1].remove();
//
