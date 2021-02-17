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


//----------------PAGINACION--------------------------
//Paginacion - CALCULAR cuantas paginas tenemos
const paginationNumber = Math.ceil(films.length / 5);

//Por cada página, queremos crear un botón
for (let i = 0; i < paginationNumber; i++) {

    const indicator = document.createElement('button');

    //si estamos en la primera ejecución
    if (i === 0) {
        indicator.classList.add('active');
    }

    document.querySelector('.indicators').appendChild(indicator);

    indicator.addEventListener('click', (e) => {
        //Multilicamos el ancho por 2
        fila.scrollLeft = i * fila.offsetWidth;

        //Si hemos selecciona una pagina, que se marque i desmarque pagina anterior
        document.querySelector('.indicators .active').classList.remove('active');
        //Accedemos a (e), el indicador que fue seleccionado. 
        e.target.classList.add('active');
    });
};