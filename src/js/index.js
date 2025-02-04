let container = document.getElementById('container');
let modalLogin = document.getElementById('login');
let modalRegister = document.getElementById('registro');
let modalRecuperar = document.getElementById('recuperar');
let btn_login = document.getElementById('btn_login');
let btn_register = document.getElementById('btn_registro');
let btn_recuperar = document.getElementById('btn_recuperar')
let logPass = document.getElementById('login_password');
let regPass = document.getElementById('register_password');
let regPass2 = document.getElementById('register_password2');
let btnShowPass = document.getElementById('login_show-pass')
let btnShowPassReg = document.getElementById('register_show-pass')
let btnShowPassReg2 = document.getElementById('register_show-pass2')
//FUNCIONES

//Cambiar de modal
const changeModal = (event) =>{
    let aux = event.target;
    //Controlamos si pulsa en un link
    if (aux.tagName === "A") {
        if(aux.textContent === "Login"){
        modalLogin.style.display = "flex";
        modalRegister.style.display = "none"
        modalRecuperar.style.display = "none"
    }else if(aux.textContent === "Registrate"){
        modalRegister.style.display = "flex";
        modalLogin.style.display = "none"
        modalRecuperar.style.display = "none"
    }else if(aux.textContent === "contraseña"){
        modalRecuperar.style.display = "flex";
        modalRegister.style.display = "none"
        modalLogin.style.display = "none"
    }
    }
}
//Mostrar contraseña 
const showPass = (input) =>{
    if (input.type === 'password') {
        input.type = 'text';
    }else if (input.type === 'text') {
        input.type = "password";
    }
}
//Cambiar icono 
const changeIconEye = (btn) =>{
    let spanEye = btn.children[0];
    spanEye.classList.toggle('mdi-eye-outline');
    spanEye.classList.toggle('mdi-eye-off-outline');
}

//EVENTOS
container.addEventListener('click',changeModal);
btnShowPass.addEventListener('click', () => {
    showPass(logPass);
    changeIconEye(btnShowPass);
});
btnShowPassReg.addEventListener('click', () => {
    showPass(regPass);
    changeIconEye(btnShowPassReg);
});
btnShowPassReg2.addEventListener('click', () => {
    showPass(regPass2);
    changeIconEye(btnShowPassReg2);
});
