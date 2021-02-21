<a name="top"></a>

# Buscador de Peliculas :clapper:
Este es mi primer proyecto utilizando una API externa, en este caso TMDB.
[Verlo en GithubPages](https://gianrondo91.github.io/Pelicula/).


# 🛠️ Construido con: 
<img src="img/html5.png" width="40"><img src="img/css3.png" width="40"><img src="img/js.png" width="42"><img src="img/bootstrap.png" width="50"><img src="img/tmdb.png" width="45">

# 🚀 Introducción: 
La página web, la tengo dividida en 4 puntos principales:
- [**Maquetación**](#item1).
- [**Cartelera Principal**](#item2).
- [**Busqueda por Id**](#item3).
- [**Buqueda por Titulo**](#item4).


# :book: Funcionalidades: 

- #### <a name="item1"></a>Maquetación
    Como se ve, la página esta dividida en 3 parte.
    En la parte superior, un menú en el cual el que tiene funcionalidad de momento, es solo el buscador.
    Luego una cartelera y al final un carousel en el cual muestra las peliculas recomendadas.
    </br>
    <img src="img/pelicula.png" width="50%">
    </br>

- #### <a name="item1"></a>Cartelera Principal
    <img src="img/Portada.png" width="50%">
    
    Por defecto aparece una pelicula al azar.
    ```js
    let movie = data.results[Math.floor(Math.random() * (data.results.length - 1))];
    ```
    
- #### <a name="item3"></a>Buscador por Id
    Al buscar por Id, la pelicula al ser una sola, se mostrara directamente en la cartelera principal.
    <img src="img/Portada.png" width="50%">

    Comprobación si hubo error al introducir el id de una pelicula.
    ```js
    if (data.success === false) {
        alert('Codigo de pelicula invalido');
        return;
    }
    ```
    Seteo el titulo, la imagen y el detalle de la pelicula buscada.
    ```js
    detailElement.querySelector('.title').innerHTML = data.title;
    detailElement.querySelector('.description').innerHTML = data.overview;
    detailElement.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${data.backdrop_path}')`;
    ```
    Convierto lo que se introduce por el input en un entero para poder luego comparar si lo que se introjudo es numero o no, se ser correcto, entonces entra en la funcion **searchMovieById**
    ```js
    let filmId = parseInt(query);

    if (!isNaN(filmId)) {
        searchMovieById(query);
        return;
    }
    ```

- #### <a name="item4"></a>Buscador por titulo
    Al hacer la busqueda por el nombre de una pelicula, la cartelera se ocultara y en lugar de esta aparecera un nuevo carousel con la busqueda hecha.
    </br>
    <img src="img/busquedaName.png" width="50%">
    </br>

    Creo una variable en la cual le introduje una imagen de **Imagen no disponible**, para las peliculas que no disponian de imagenes.
    ```js
    data.results.forEach(pelicula => {
        let imagePath = 'img/no-image.png';
       if (pelicula.poster_path) {
            imagePath = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        }
        carousel.innerHTML +=`<div class='film'><a href="#"><img src='${imagePath}'class='img-fluid float-end'></img></a></div>`});
     ``` 

     Ocultando la cartelera y mostrando el carousel con el resultado de la busqueda.
    ```js
    document.querySelector('.featured-movie').classList.add('hidden');
    detailElement.classList.remove('hidden');
    ```

# Licencia 📄

Este proyecto está bajo la Licencia **MIT Licence** - mira el archivo [LICENSE.md](LICENSE.md) para detalles.


[Subir](#top)
