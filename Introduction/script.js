let title= (document.getElementsByTagName("title")[0]);
console.log(title.innerText);

title.innerText = "Modifying the DOM";

let body=document.body;

// let color= "#FF69B4";


let color= createRdmRgb();
body.style.backgroundColor = color;

for (let child of body.children){
    
    console.log(child.nodeName);
}
function rdm(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function createRdmRgb(){
    
    let r = rdm(0,256);
    let g = rdm(0,256);
    let b = rdm(0,256);
    
    return `rgb(${r},${g},${b})`;
}

// changeBackground(color);
// function changeBackground(color) {
//     document.body.style.background = color;
// }