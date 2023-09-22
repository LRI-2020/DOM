import{CreateAlert} from "./helpers.js";

function DeleteSquares() {
    let squaresWrapper = document.querySelector('.displayedsquare-wrapper');
    while(squaresWrapper.children.length>0){
        squaresWrapper.removeChild(squaresWrapper.firstElementChild);
    }
}


function CreateSquare(parent, classNames) {

    let div = CreateDiv(classNames);
    parent.append(div);
    return div;
}

function CreateDiv(classNames) {
    let div = document.createElement('div');
    for (let className of classNames) {
        div.classList.add(className);

    }
    return div;
}



function DisplaySquareColor(square){
    
    let color = square.classList[(square.classList.length)-1];    
    CreateAlert(color);   
}

export {CreateSquare,DeleteSquares, DisplaySquareColor}