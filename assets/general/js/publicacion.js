const galeria = document.querySelector('.galeria-imagenes>div');
const imagenes_galeria = document.querySelectorAll('.item-imagen');
const btn_left = document.querySelector('.body .publicacion .contenedor-galeria-imagenes>.btn-left');
const btn_rigth = document.querySelector('.body .publicacion .contenedor-galeria-imagenes>.btn-rigth');
const btnComentar = document.getElementById('btnComentar');
const btnRegresar = document.querySelector('.preheader button');

btnRegresar.addEventListener('click', () => {
    if(!history.go(-1)){
        window.location='index.html';
    }
});

btnComentar.addEventListener('click', () => {
    comentar();
});

btn_left.addEventListener('click', () => {
    scrollToLeft();
});

btn_rigth.addEventListener('click', () => {
    scrollToRight();
});

tamanioGaleria(imagenes_galeria.length);

function tamanioGaleria(nImagenes) {
    galeria.style.width = `${nImagenes*190}px`;
}

function scrollToLeft() {
    document.querySelector('.galeria-imagenes').scrollLeft -= 190;
}

function scrollToRight() {
    document.querySelector('.galeria-imagenes').scrollLeft += 190;
}

function comentar() {
    document.querySelector('.formulario #editMe').focus();
}