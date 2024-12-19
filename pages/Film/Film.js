import "./Film.css";
import { cleanPage } from "../../utils/cleanPage";
import { films } from "../../data/film";
import { FilmCard } from "../../components/FilmCard/FilmCard";


// Función principal

export const Films = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  // Definición de géneros
  const genres = ["Ciencia ficción", "Acción", "Crimen", "Aventura", "Drama", "Fantasía", "Suspense"];

  // El género de ciencia ficción es el que queda almacenado

  let genreFilter = "Ciencia ficción";
  
  // Estructura dinámica de HTML para películas

  main.innerHTML = `
    <section class="films">
      <h2 class="films-title">Películas</h2>
      <div class="filter">
        <select id="genreFilter">
          ${genres.map(genre => `<option value="${genre}" ${genre === genreFilter ? "selected" : ""}>${genre}</option>`).join("")}
        </select>
      </div>
      <div class="films-container"></div>
    </section>
  `;

  // Selector de géneros

  const genreSelect = document.querySelector("#genreFilter");
  genreSelect.addEventListener("change", (event) => {
    genreFilter = event.target.value;
    displayFilms(filterFilmsByGenre(genreFilter));
  });

  // Filtra películas por género

const filterFilmsByGenre = (genre) => {
  return films.filter(film => film.genre.toLowerCase() === genre.toLowerCase());
};

  // Muestra las películas en la página

  const container = document.querySelector(".films-container");

  const displayFilms = (filteredFilms) => {
    container.innerHTML = ''; 
    filteredFilms.forEach(film => {
      const figure = document.createElement("figure");
      figure.innerHTML = FilmCard(film);
      container.appendChild(figure);
    });
  };

  displayFilms(filterFilmsByGenre(genreFilter));
};
