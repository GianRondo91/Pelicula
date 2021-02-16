//Constante para aceder a la fila de mis imagenes

const fila = document.querySelector('.content-carousel');
const films = document.querySelectorAll('film');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

//EventListener para la flecha derecha
arrowRight.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

//EventListener para la flecha izquierda
arrowLeft.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});


//Paginacion
const pages = films.length;
//min46