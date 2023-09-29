

let p = document.createElement('p');
p.classList.add("section-p__ExerciseText_Exercise1");
document.querySelector(".section__Exercise1").appendChild(p);

let text = "Keller";
let array = text.split("");


let count = 0;


const i = setInterval(function(){
    p.innerText+=array[count];
    count++;
    
    if(count === array.length){
        clearInterval(i);
    }
},1000);