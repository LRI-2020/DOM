
let logsContainer =    document.querySelectorAll('section')[2].querySelector('ul');


function DeleteLogs() {
    while(logsContainer.children.length>0){
        logsContainer.removeChild(logsContainer.firstElementChild);
    }
}
function AddLog(msg, start) {

    let li = document.createElement('li');
    let time = ((new Date().getTime()) - start) / 1000;
    li.innerText = `[${time}] ${msg}`;
    logsContainer.appendChild(li);
}

export{AddLog,DeleteLogs}