let importantElements = document.querySelectorAll(".important");

for(let el of importantElements){
    el.setAttribute("title","This is an important item");
}

let imgs = document.querySelectorAll("img");

for(let img of imgs){
    
    if(!img.classList.contains("important")){
        img.style.display="none";
    }
}

let paragraphs= document.querySelectorAll("p")
{

    for (let p of paragraphs) {
        
        console.log("PARAGRAPH CONTENT : " + p.innerText);
        
        if (p.classList.length > 0) {
            console.log("PARAGRAPH CLASSES : " + p.classList.value);
        }
        
        else{
            p.style.color= createRdmRgb();
        }
    }
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