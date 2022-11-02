import {generateImgTag, convertDate} from "./utils";

export const renderError = ({ status_code, status_message }, text) => (`
    <section>
    <h2 class="section-title">${text}</h2>
    <div class="error">
      <h2>Something went wrong...can't render section!</h2>
      <p>Status code: ${status_code}</p>
      <p>Status message: ${status_message}</p>
    </div>
    </section>
`);


export const renderMovies = (movies, text) => (`
    <section>
      <h2 class="section-title">${text}</h2>
      <div class="popular d-flex">
        ${movies.map(movie => renderMovie(movie)).join('')}
      </div>
    </section>
  </div>
`);

export const renderMovie = movie => (`
    <div class='card'>
      <a href="#movieId=${movie.id}">
         ${generateImgTag(movie.poster_path, movie.original_title, '200')}
      </a>
      <div class="movie_title">${movie.original_title}</div>
      <div class="bage">${Math.round(movie.vote_average * 10)}</div>
    </div>
`);


export const renderMovieDetails = movie => (`
    <section class="movie">
      <div class='grid'>
        ${generateImgTag(movie.poster_path, movie.original_title, '500')}
        <div class='movie-detailes'>
            <h1 class="movie-title">${movie.original_title}</h1>

            <h3>Release date: <span>${convertDate(movie.release_date) }</span></h3>

            <h3>Rate: <span>${ movie.vote_average.toFixed(1) }</span> </h3>

            <h3>Duration: <span>${ movie.runtime } min</span> </h3>

            <h3>Overview:</h3>
            <p>${ movie.overview }</p> 
        </div>
      </div>
  </section>
`);

