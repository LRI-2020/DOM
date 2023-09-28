///////////////////////////////////////////////////////////// NAME
let firstName = document.getElementById("firstname");

firstName.addEventListener('keyup', function () {

    let span = document.getElementById("display-firstname");
    span.innerText = firstName.value;
})

///////////////////////////////////////////////////////////// AGE
let age = document.getElementById("age");

age.addEventListener('keyup', function () {
    let section = document.getElementById("a-hard-truth");

    if (Number(age.value) >= 18) {
        section.style.visibility = "visible";
    } else {
        section.style.visibility = "hidden"
    }
});
///////////////////////////////////////////////////////////// PASSWORDS

let passwordInput = document.getElementById("pwd");
let pwdConfirmInput = document.getElementById("pwd-confirm");

passwordInput.addEventListener('keyup', function () {

    CheckPwdInput(passwordInput);
    if (pwdConfirmInput.value > 0)
        CheckConfirmationInput(passwordInput, pwdConfirmInput);
});


pwdConfirmInput.addEventListener('keyup', function () {

    CheckConfirmationInput(passwordInput, pwdConfirmInput);

})

function CheckPwdInput(pwd) {
    if (pwd.value.length < 6 && pwd.value.length > 0) {
        UpdateStyle(pwd, "error");

    } else {
        UpdateStyle(pwd, "ok");
    }
}

function CheckConfirmationInput(pwd, confirmation) {
    if (pwd.value === confirmation.value) {
        UpdateStyle(confirmation, "ok");
    } else {
        UpdateStyle(confirmation, "error");
    }
}


function UpdateStyle(element, styleType, styleDeclaration = null) {

    switch (styleType.toLowerCase()) {
        case"ok":
            element.classList.remove("error");
            break;
        case"error":
            element.classList.add("error");
            break;
        default:
            throw Error("Unknown Style Type")
    }
}

///////////////////////////////////////////////////////////// TOGGLE

let select = document.getElementById("toggle-darkmode");

select.addEventListener('change', function(){
    if(select.value === "dark"){
        document.querySelector('body').classList.add("darkMode");
    }
    
    else{
        document.querySelector('body').classList.remove("darkMode");
    }
})
