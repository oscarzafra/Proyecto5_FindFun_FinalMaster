import "./Series.css";
import { cleanPage } from "../../utils/cleanPage";
import { series } from "../../data/serie";
import { SeriesCard } from "../../components/SeriesCard/SeriesCard";

// Función principal

export const Series = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  // Definición de géneros
  const genres = ["Drama", "Suspense", "Ciencia ficción", "Aventura", "Acción", "Fantasía", "Crimen"];
  
  // El género de drama es el que queda almacenado

  let genreFilter = "Drama"; 

  // Estructura dinámica de HTML para series
  
  main.innerHTML = `
    <section class="series">
      <h2 class="series-title">Series</h2>
      <div class="filter">
        <select id="genreFilter">
          ${genres.map(genre => `<option value="${genre}" ${genre === genreFilter ? "selected" : ""}>${genre}</option>`).join("")}
        </select>
      </div>
      <div class="series-container"></div>
    </section>
  `;

  // Selector de géneros
  
  const genreSelect = document.querySelector("#genreFilter");
  genreSelect.addEventListener("change", (event) => {
    genreFilter = event.target.value;
    displaySeries(filterSeriesByGenre(genreFilter));
  });

  // Filtrar películas por género

  const filterSeriesByGenre = (genre) => {
    return series.filter(serie => serie.genre.toLowerCase() === genre.toLowerCase());
  };

  // Muestra las películas en la página

  const container = document.querySelector(".series-container");

  const displaySeries = (filteredSeries) => {
    container.innerHTML = ''; 
    filteredSeries.forEach(serie => {
      const figure = document.createElement("figure");
      figure.innerHTML = SeriesCard(serie);
      container.appendChild(figure);
    });
  };

  displaySeries(filterSeriesByGenre(genreFilter));
};