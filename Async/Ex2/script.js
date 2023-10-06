function Display(json) {
    let div = document.createElement('div');
    div.innerText = `country=${json.country_id},
    name: ${json.name}
count: ${json.count},
age : ${json.age}`;
    div.classList.add("card");
    document.querySelector('body').appendChild(div);
}

let btn = document.querySelector(".sendName");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    SendName()});


function SendName() {
    let name = document.querySelector("input#name").value;
    let country = document.querySelector(".countrySelect").value;
    let request = new Request(`https://api.agify.io/?name=${name}&country_id=${country}`);
    fetch(request).then((response) => response.json())
        .then((json) => Display(json))
        .catch((e) => console.log(e.message))
}