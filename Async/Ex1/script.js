let btn = document.querySelector(".generatesData");

btn.addEventListener('click', () =>
    fetch('./data.json').then((response) => response.json())
        .then(res => LoadData(res)));

function LoadData(data){
    let list = document.createElement('ul');
    for (let item of data){
        let li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    }

    document.querySelector('body').appendChild(list);
}