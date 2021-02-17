//Buscar por ID -> Botón micro
//https://api.themoviedb.org/3/movie/53865?api_key=bb78e4cf3442e302d928f2c5edcdbee1&language=en-US

let criterio = "movie";
let key = 'bb78e4cf3442e302d928f2c5edcdbee1';
let base_url = `http://api.themoviedb.org/3`;

let searchMovieById = (id) => {

    fetch(`${base_url}/${criterio}/${id}?api_key=${key}&language=en-US`)
        .then(res => res.json())
        .then(data => {

            //si success da false
            if (!data.success) {
                alert('Codigo de pelicula invalido');
                return;
            }

            let detailElement = document.querySelector('.movie-detail');

            //Setear imagen, titulo y detalle
            detailElement.querySelector('.title').innerHTML = data.title;
            detailElement.querySelector('.description').innerHTML = data.overview;
            detailElement.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${data.backdrop_path}')`;

            //Ocultar feature-movie 
            document.querySelector('.featured-movie').classList.add('hidden');

            //Muestro movie-detail 
            detailElement.classList.remove('hidden');
        });
};