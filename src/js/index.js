let container = document.getElementById('container');
let modalLogin = document.getElementById('login');
let modalRegister = document.getElementById('registro');
let modalRecuperar = document.getElementById('recuperar');
let btn_login = document.getElementById('btn_login');
let btn_register = document.getElementById('btn_registro');
let btn_recuperar = document.getElementById('btn_recuperar');

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

//EVENTOS
container.addEventListener('click',changeModal)
