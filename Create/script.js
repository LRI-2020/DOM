let learners = ["Alexandre Va", "Alexandre Ve", "Antoine", "Bastien", "Carole", "Dorian", "Elisabeth", "Elodie", "Justin", "Justine F", "Justine M","Kimi", "Layla", "Lidwine","Lucas","Marie","Mathias","Okly","Pierre","Robin","Rosalie","Stephane","Tim","Tom","Valentin","Virginie"];
let sections = [];


for(let learner of learners){    
    
    let currentSection = createSection(learner);    
    let para = createParagraph(learner);
    
    para.style.color = isLightColor(currentSection.style.backgroundColor)? "black" :"white";
     
    currentSection.appendChild(para);    
    sections.push(currentSection);
    sections.sort((a, b) => 0.5 - Math.random());
    
}

for(let section of sections){
    
    let parentNode = document.querySelector("article");
    parentNode.appendChild(section);
}

//functions
function createSection(learner) {
    let section = document.createElement("section");
    section.setAttribute("id", learner);
    section.style.backgroundColor = createRdmRgb();
    return section;
}

function createParagraph(learner) {
    let para = document.createElement("p");
    para.innerText = learner;
    return para;
}

function isLightColor(color){

    return computeBrightness(color) > 127.5;
}


// function rdm(max){
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

function createRdmRgb(){

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function computeBrightness(color){

    let rgb = rgbToObj(color);
    //sqrt( .299 R2 + .587 G2 + .114 B2 )
    return Math.sqrt(0.299 * (Math.pow(rgb.red,2)) + 0.587 * (Math.pow(rgb.green,2)) + 0.114 * (Math.pow(rgb.blue,2)) )
}


function rgbToObj(rgb) {

    let colors = ["red", "green", "blue", "alpha"]

    let colorArr = rgb.slice(
        rgb.indexOf("(") + 1,
        rgb.indexOf(")")
    ).split(", ");

    let obj = {};

    colorArr.forEach((k, i) => {
        obj[colors[i]] = k
    })

    return obj;
}