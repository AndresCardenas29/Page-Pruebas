/* Contenedores */
const contenedor_formulario = document.querySelector(".form-container");
const contenedor_login = document.querySelector('.screen-login');
/* Fin contenedores */

/* Botones */
const btn_entrar = document.querySelector('.login');
const btn_registro = document.getElementById("btn_registro");
const btn_inicio_secion = document.getElementById("btn_inicio_secion");
const btn_cerrar_login = document.querySelector('.btn-cerrar');
const btn_registrarse = document.querySelector(".register-form input[type='button']");
/* Fin botones */

/* Input */
const repass = document.querySelector(".register-form input[name='repass']");

/* Fin input */


/* Event Listener */

/* Boton abrir ventana login */
btn_entrar.addEventListener('click', abrirCerrarLogin);
btn_cerrar_login.addEventListener('click', abrirCerrarLogin);

/* Boton ir a registro */
btn_registro.addEventListener('click', cambiarVentana);
/* Boton ir a inicio de sesión */
btn_inicio_secion.addEventListener('click', cambiarVentana);

/* Formulario registro */
btn_registrarse.addEventListener('click', () => {
  const name = document.querySelector(".register-form input[name='name']").value;
  const user = document.querySelector(".register-form input[name='user']").value;
  const email = document.querySelector(".register-form input[name='email']").value;
  const pass = document.querySelector(".register-form input[name='pass']").value;
  const terminos = document.querySelector(".register-form input[name='terminos']").checked;

  form_registro(name,user,email,pass,repass,terminos);

});


/* Fin event listener */


/* Funciones */

function cambiarVentana() {
  contenedor_formulario.classList.toggle('show');
}

function abrirCerrarLogin() {
  contenedor_login.classList.toggle('showLogin');
  estadoScroll();
}

function estadoScroll() {
  document.body.classList.toggle('noScroll');
}

function form_registro(name,user,email,pass,repass,terminos) {
  if(!name){
    msgError('Opss...','El campo nombre es obligatorio.');
    return;
  }else if(!user) {
    msgError('Opss...','El campo usuario es obligatorio.');
    return;
  }else if(!email){
    msgError('Opss...','El campo email es obligatorio.');
    return;
  }else if(!pass) {
    msgError('Opss...','El campo contraseña es obligatorio.');
    return;
  }else if(!repass.value){
    msgError('Opss...','El campo confirmar contraseña es obligatorio.');
    return;
  }else if(pass != repass.value){
    msgError('Opss...','Las contraseñas no coinciden.');
    repass.classList.toggle('error');
    repass.addEventListener('keyup', e => {
      console.log(e);
    });
    return;
  }else if(!terminos){
    msgError('Opss...','Acepta los terminos para poder registrarte.');
    return;
  }
}

function msgError(title,text) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
  });
}

/* Fin funciones */
