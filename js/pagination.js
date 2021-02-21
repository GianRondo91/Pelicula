//Constante para aceder a la fila de mis imagenes
let attachCarouselEvents = (element) => {
    const row = element.querySelector('.content-carousel');

    const arrowLeft = element.querySelector('#arrow-left');
    const arrowRight = element.querySelector('#arrow-right');

    //EventListener para la flecha derecha
    arrowRight.addEventListener('click', () => {
        row.scrollLeft += row.offsetWidth;

        const indicatorActive = element.querySelector('.indicators .active');

        //Preguntar si a la drecha tiene un elemento
        if (indicatorActive.nextElementSibling) {
            indicatorActive.nextElementSibling.classList.add('active');
            indicatorActive.classList.remove('active');
        }
    });

    //EventListener para la flecha izquierda
    arrowLeft.addEventListener('click', () => {
        row.scrollLeft -= row.offsetWidth;

        const indicatorActive = element.querySelector('.indicators .active');

        //Preguntar si a la izquierda tiene un elemento -> previousSibling
        if (indicatorActive.previousElementSibling) {
            indicatorActive.previousElementSibling.classList.add('active');
            indicatorActive.classList.remove('active');
        }
    });
}


//----------------PAGINACION - INDICADORES--------------------------
let createPagination = (films, indicatorsElement) => {
    //Borrar los films de la busqueda anterior
    let buttons = indicatorsElement.querySelectorAll('button');

    buttons.forEach(button => {
        button.remove();
    });

    //Paginacion - CALCULAR cuantas paginas tenemos
    const paginationNumber = Math.ceil(films.length / 4);

    //Por cada página, queremos crear un botón
    for (let i = 0; i < paginationNumber; i++) {

        const indicator = document.createElement('button');

        //si estamos en la primera ejecución
        if (i === 0) {
            indicator.classList.add('active');
        }

        indicatorsElement.appendChild(indicator);

        indicator.addEventListener('click', (e) => {
            //Multilicamos el ancho por 2
            row.scrollLeft = i * row.offsetWidth;

            //Si hemos selecciona una pagina, que se marque i desmarque pagina anterior
            indicatorsElement.querySelector('.active').classList.remove('active');

            //Accedemos a (e), el indicador que fue seleccionado. 
            e.target.classList.add('active');
        });
    };
};

//----------------HOVER--------------------------
// //Iteramos por cada una de las peliculas
// films.forEach((film) => {
//     //Por cada pelicula, agregamos un event listener, para que cuando pasemos el cursor, obtengamos el elemento al cual pasamos el cursor
//     film.addEventListener('mouseenter', (e) => {
//         const element = e.currentTarget;

//         setTimeout(() => {
//             //Busca todas las peliculas y por cada una de ella, le va a quitar el hover
//             films.forEach(film => film.classList.remove('hover'));
//             element.classList.add('hover');
//         }, 300);
//     })
// });

// row.addEventListener('mouseleave', () => {
//     films.forEach(film => film.classList.remove('hover'));
// });