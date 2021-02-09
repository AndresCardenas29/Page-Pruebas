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
const btn_iniciar_sesion = document.querySelector(".login-form input[type='button']");
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
  form_registro(name, user, email, pass, repass, terminos);
});

/* Formulario inicio de sesión */
btn_iniciar_sesion.addEventListener('click', () => {
  const user = document.querySelector(".login-form input[name='user']").value;
  const pass = document.querySelector(".login-form input[name='password']").value;
  const recordar = document.querySelector(".login-form input[name='recordar']").checked;
  form_login(user, pass, recordar);
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

function form_registro(name, user, email, pass, repass, terminos) {
  if (!name) {
    msgError('Opss...', 'El campo nombre es obligatorio.');
    return;
  }
  if (!user) {
    msgError('Opss...', 'El campo usuario es obligatorio.');
    return;
  }
  if (!email) {
    msgError('Opss...', 'El campo email es obligatorio.');
    return;
  }
  if (!pass) {
    msgError('Opss...', 'El campo contraseña es obligatorio.');
    return;
  }
  if (!repass.value) {
    msgError('Opss...', 'El campo confirmar contraseña es obligatorio.');
    return;
  }
  if (pass != repass.value) {
    msgError('Opss...', 'Las contraseñas no coinciden.');
    repass.classList.toggle('error');
    return;
  }
  if (pass == repass.value) {
    repass.classList.remove('error');
  }
  if (!terminos) {
    msgError('Opss...', 'Acepta los terminos para poder registrarte.');
    return;
  }
  msgSuccess(
    1,
    '¡Buen trabajo!',
    'Registro completado',
    'index.html',
    'OK'
  );
}

function form_login(user, pass, check) {
  if (!user) {
    msgError('Opss...', 'Es necesario el nombre de usuario.');
    return;
  }
  if (!pass) {
    msgError('Opss...', 'Es necesario la contraseña.');
    return;
  }
  if (check) {
    sessionStorage.setItem(
      'userdata', JSON.stringify({
        user: user,
        pass: pass
      })
    );
  } else {
    if (sessionStorage.getItem('userdata')) {
      sessionStorage.removeItem('userdata');
    }
  }
  abrirCerrarLogin();
}

function msgError(title, text) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
  });
}

function msgSuccess(type, title, text, url, textBtn) {
  switch (type) {
    case 1:
      Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: `<a href="${url}" class="text-light">${textBtn}</a>`
      });
      break;
    case 2:
      Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonText: textBtn,
      }).then( () => {
        abrirCerrarLogin();
      });
      break;
  }
}

/* Fin funciones */

if (sessionStorage.getItem('userdata')) {
  let data = JSON.parse(sessionStorage.getItem('userdata'));
  document.querySelector(".login-form input[name='user']").value = data.user;
  document.querySelector(".login-form input[name='password']").value = data.pass;
  document.querySelector(".login-form input[name='recordar']").checked = true;
} else {
  document.querySelector(".login-form input[name='user']").value = '';
  document.querySelector(".login-form input[name='password']").value = '';
  document.querySelector(".login-form input[name='recordar']").checked = false;
}