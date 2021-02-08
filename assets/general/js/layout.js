/* Contenedores */
const contenedor_formulario = document.querySelector(".form-container");
const contenedor_login = document.querySelector('.screen-login');

/* Botones */
const btn_entrar = document.querySelector('.login');
const btn_registro = document.getElementById("btn_registro");
const btn_inicio_secion = document.getElementById("btn_inicio_secion");

/* Event Listener */

/* Boton abrir ventana login */
btn_entrar.addEventListener('click', abrirCerrarLogin);
contenedor_login.addEventListener('click', abrirCerrarLogin)

/* Boton ir a registro */
btn_registro.addEventListener('click', cambiarVentana);
/* Boton ir a inicio de sesión */
btn_inicio_secion.addEventListener('click', cambiarVentana);



/* Clases */

function cambiarVentana() {
  contenedor_formulario.classList.toggle('show');
}

function abrirCerrarLogin(e) {
  contenedor_login.classList.toggle('showLogin');
  
}

function estadoScroll() {
  document.body.classList.toggle('noScroll');
}