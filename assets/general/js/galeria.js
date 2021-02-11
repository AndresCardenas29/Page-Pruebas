const contenedor_galeria = document.querySelector('.galeria');
const btn_generar = document.getElementById('btnGenerar');
const letrero = document.querySelector('.botonera span');
const open_img = document.querySelector('.open-img');
const close_img = document.querySelector('.open-img .btn-close');
const contenedor_img = document.querySelector('.open-img .contenedor');
let contador = 0;

addItems();
addItems();
addItems();

btn_generar.addEventListener('click', () => {
    if (contador <= 5) {
        contador++;
        addItems();
        if (contador > 5 ) {
            btn_generar.style.display = "none";
            letrero.style.display = "block";
        }
    }
}); 

close_img.addEventListener('click', verImagen);

window.addEventListener('keydown', e => {
    if (open_img.classList.contains('show')) {
        if(e.code == 'Escape') {
            verImagen();
        }
    }
});

function getRandom(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function addItems() {
    items();
    items();
    items();    
    items();    
}

function items() {
    let url_img = `https://picsum.photos/${getRandom(1080, 1920)}/${getRandom(1080, 1920)}`;
    const postElement = document.createElement('a');
    postElement.setAttribute('data-img','');

    postElement.innerHTML = `
        <img src="${url_img}">
        <div class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, reiciendis.
        </div>
	`;
    contenedor_galeria.appendChild(postElement);
    postElement.addEventListener('click', e => {
        contenedor_img.innerHTML = `<img src="${url_img}">`;
        verImagen();
    });
}

function verImagen() {
    open_img.classList.toggle('show');
    estadoScroll();
}

function estadoScroll() {
    document.body.classList.toggle('noScroll');
  }