let moles = document.getElementsByClassName("moleCircle");
let scoreContainer = document.querySelector(".scoreText");

let score = 0;
SetMoleListeners();
let to = 1000;
let scoreTemp;

function AdaptInterval(score, to) {
    if (score>0 && score !== scoreTemp && score%3 === 0) {
        scoreTemp = score;
        if (to> 500){
            to-=100;
        }
    }
    
    return to;
}

function isEnd(score) {
    return score >= 10;
}

function DisplayWin() {
    let win = document.querySelector(".win");
    win.classList.remove("hidden");
}

const i = setInterval(function () {
    
    to = AdaptInterval(score,to);
    
   if(isEnd(score)){
       clearInterval(i);
       DisplayWin();
   }   
    
    let mole = GetRdmMole(moles);
    selectMole(mole);
    
    
    unselectMole(mole,to);


}, to);

function selectMole(mole) {
    mole.classList.add("selected");
}

function unselectMole(mole,to) {
    
    setTimeout(function(){
        mole.classList.remove("selected");
    },to);
   
}

function GetRdmMole(moles) {

    let index = Math.floor(Math.random() * moles.length);
    return moles[index];
}

function SetMoleListeners() {
    for (let m of moles) {
        m.addEventListener('click', function () {
            if (m.classList.contains("selected")) {
                score++;
                scoreContainer.innerText = score;
            }
        })
    }
}