/*********************       **********************/

let search = document.getElementById('search');
let searchButton = document.getElementById('searchButton');

let recurso = "search";

let clickSearch = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    doSearch();
};

searchButton.addEventListener('click', clickSearch);

//Buscar por nombre de movie
let doSearch = () => {
    let query = search.value;

    if (query.trim() === "") {
        alert('Escribe texto en el buscador');
        return;
    }

    //Busqueda por ID- numero
    let filmId = parseInt(query);

    if (!isNaN(filmId)) {
        searchMovieById(query);
        return;
    }

    //Ocultar feature-movie por haber buscado
    document.querySelector('.featured-movie').classList.add('hidden');

    //Ocultar movie-detail 
    document.querySelector('.movie-detail').classList.add('hidden');

    //
    fetch(`${base_url}/${recurso}/${criterio}?api_key=${key}&query=${query}`)
        .then(res => res.json())
        .then(data => {
            //Borrar los films de la busqueda anterior
            let films = document.querySelectorAll('.search-results .film');

            films.forEach(film => {
                film.remove();
            });

            //
            let searchContainer = document.querySelector('.search-results');

            if (data.total_results === 0) {
                searchContainer.classList.add("hidden");
                alert('No se encontraron peliculas');
                return;
            }

            searchContainer.classList.remove("hidden");

            let carousel = document.querySelector('.search-results .carousel');

            data.results.forEach(pelicula => {
                let imagePath = 'img/no-image.png';

                if (pelicula.poster_path) {
                    imagePath = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
                }

                carousel.innerHTML += `<div class='film'><a href="#"><img src='${imagePath}' class='img-fluid float-end'></img></a></div>`
                    // console.log(pelicula.poster_path);
            });
            createPagination(data.results, document.querySelector('.search-results .indicators'));
        });
};

attachCarouselEvents(document.querySelector('.search-results'));

search.addEventListener('keydown', evt => {
    if (evt.key === 'Enter') {
        doSearch();
    }
})