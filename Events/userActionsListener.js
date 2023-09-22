import {ChangePageBackground} from "./helpers.js";
import{AddLog, DeleteLogs} from "./LogsManager.js";
import{CreateSquare,DeleteSquares, DisplaySquareColor} from "./SquaresManager.js";


let start = new Date().getTime();

function ListenToPressKey() {
    let body = document.querySelector('body');
    body.addEventListener('keydown', function (event) {
        switch (event.code) {
            case("Space"):
                ChangePageBackground();
                AddLog("Press the Space key", start);
                break;
            case("KeyL"):
                DeleteLogs();
                break;
            case("KeyS"):
                DeleteSquares();
                break;
            default:
                break;
        }

    })
}

// function AddClickListener(createdSquare, f) {
//     createdSquare.addEventListener('click', f);
// }

function ListenToSquares() {
    let clickableDivs = document.getElementsByClassName('actionsquare');
    let parentDiv = document.getElementsByClassName("displayedsquare-wrapper")[0];

    for (let div of clickableDivs) {
        div.addEventListener('click', function () {
            //create the list of needed classes for the new square
            let classesToAdd = ["displayedsquare"];
            classesToAdd.push(div.classList[(div.classList.length) - 1]);
            
            //create the new square
            let createdSquare = CreateSquare(parentDiv, classesToAdd);
            
            //Add an event listener to the new square
            // AddClickListener(createdSquare, DisplaySquareColor(createdSquare));


            createdSquare.addEventListener('click', function(){
                DisplaySquareColor(createdSquare);
            });
            
            //Add a log for the square creation
            let msg = `Created a new ${div.classList[(div.classList.length) - 1]} square.`
            AddLog(msg, start);
        })
    }

}

export{ListenToPressKey, ListenToSquares}