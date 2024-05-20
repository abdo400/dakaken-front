let passwordField = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');


function hidePasswordFun(event){
    event.preventDefault()
    passwordField.focus()
    if(passwordField.type == "text"){
        passwordField.type = "password"
    }else{
        passwordField.type = "text"
    }
    }

function hideRepeatPasswordFun(event){
    event.preventDefault()
    repeatPassword.focus()
    if(repeatPassword.type == "text"){
        repeatPassword.type = "password"
    }else{
        repeatPassword.type = "text"
    }
    }