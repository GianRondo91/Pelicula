//Constante para aceder a la fila de mis imagenes

const row = document.querySelector('.content-carousel');
const films = document.querySelectorAll('film');

const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

//EventListener para la flecha derecha
arrowRight.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;

    const indicatorActive = document.querySelector('.indicators .active');

    //Preguntar si a la drecha tiene un elemento
    if (indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});

//EventListener para la flecha izquierda
arrowLeft.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

    const indicatorActive = document.querySelector('.indicators .active');

    //Preguntar si a la izquierda tiene un elemento -> previousSibling
    if (indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add('active');
        indicatorActive.classList.remove('active');
    }
});


//----------------PAGINACION - INDICADORES--------------------------
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
        row.scrollLeft = i * row.offsetWidth;

        //Si hemos selecciona una pagina, que se marque i desmarque pagina anterior
        document.querySelector('.indicators .active').classList.remove('active');
        //Accedemos a (e), el indicador que fue seleccionado. 
        e.target.classList.add('active');
    });
};

//----------------HOVER--------------------------
//Iteramos por cada una de las peliculas
films.forEach((film) => {
    //Por cada pelicula, agregamos un event listener, para que cuando pasemos el cursor, obtengamos el elemento al cual pasamos el cursor
    film.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;

        setTimeout(() => {
            //Busca todas las peliculas y por cada una de ella, le va a quitar el hover
            films.forEach(film => film.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    })
});

row.addEventListener('mouseleave', () => {
    films.forEach(film => film.classList.remove('hover'));
});