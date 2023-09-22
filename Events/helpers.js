function getRdmNumber(max) {
    return Math.floor(Math.random() * max)
}

function GetRdmRgb() {

    return `rgb(${getRdmNumber(256)},${getRdmNumber(256)},${getRdmNumber(256)})`;

}

function ChangePageBackground() {
    let body = document.querySelector('body');
    body.style.backgroundColor = GetRdmRgb();

}

function CreateAlert(msg) {
    let box = document.createElement('div');
    box.classList.add("alert");

    let span = document.createElement('span');
    span.innerText="X";
    span.classList.add("closebtn");
    span.setAttribute('onClick',"this.parentElement.style.display='none';");
    box.innerText=msg;
    box.appendChild(span);

    let main = document.querySelector('main');
    main.insertBefore(box,main.firstElementChild);

}
export {getRdmNumber,GetRdmRgb, ChangePageBackground, CreateAlert};