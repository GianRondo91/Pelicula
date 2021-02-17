/*PELICULAS RECOMENDADAS*/
let getRecommendMovies = () => {
    fetch(`http://api.themoviedb.org/3/movie/upcoming?api_key=bb78e4cf3442e302d928f2c5edcdbee1`)
        .then(res => res.json())
        .then(data => {
            let carousel = document.querySelector('.recommended-films .carousel');

            data.results.forEach(pelicula => {
                let imagePath = 'img/no-image.png';

                if (pelicula.poster_path) {
                    imagePath = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
                }

                carousel.innerHTML += `<div class='film'><a href="#"><img src='${imagePath}' class='img-fluid float-end'></img></a></div>`
                    // console.log(pelicula.poster_path);
            });
            createPagination(data.results, document.querySelector('.recommended-films .indicators'));
        });
};

attachCarouselEvents(document.querySelector('.recommended-films'));

let getPopularMovie = () => {

    fetch(`${base_url}/${criterio}/popular?api_key=${key}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            let movie = data.results[Math.floor(Math.random() * (data.results.length - 1))];
            let detailElement = document.querySelector('.featured-movie');

            //Setear imagen, titulo y detalle
            detailElement.querySelector('.title').innerHTML = movie.title;
            detailElement.querySelector('.description').innerHTML = movie.overview;
            detailElement.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')`;

            //Ocultar feature-movie 
            document.querySelector('.featured-movie').classList.add('hidden');

            //Muestro movie-detail 
            detailElement.classList.remove('hidden');
        });
};

getRecommendMovies();
getPopularMovie();