import "./Inicio.css";
import { cleanPage } from "../../utils/cleanPage";
import { films } from "../../data/film"; 

// Función principal

export const Inicio = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `

    <!-- Sección de bienvenida -->

    <section class="inicio">
      <div class="inicio-content">
        <h1>¡Bienvenidos a la mejor experiencia cinematográfica!</h1>
        <p>Explora nuestro catálogo de películas y vive la magia del cine desde la comodidad de tu hogar.</p>
      </div>
    </section>

      <!-- Galería de películas -->

      <div class="gallery">
        <button id="prevBtn" class="gallery-arrow">❮</button>
        <div class="gallery-track">
          ${films
            .slice(0, 10) 
            .map(
              (film) => `
              <div class="gallery-item">
                <img src="${film.image}" alt="${film.title}" />
                <div class="gallery-info">
                  <h2>${film.title}</h2>
                  <p>${film.description}</p>
                  <p class="ad">¡Disponible ahora en nuestra plataforma!</p>
                </div>
              </div>
              `
            )
            .join("")}
        </div>
          <button id="nextBtn" class="gallery-arrow">❯</button>
      </div>

      <!-- Sección de géneros -->

      <section class="generos">
        <h2>Elige tu Género de Película</h2>
        <div class="genero-lista">
          <div class="genero-item" style="background-image: url('https://media.gq.com.mx/photos/5be9df325c1fcbd1504c3507/16:9/w_2560%2Cc_limit/john_whick_327.jpg');" data-genero="Acción">
            <span>Acción</span>
          </div>
          <div class="genero-item" style="background-image: url('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/10/mejores-peliculas-humor-absurdo_0.jpg?tf=1200x1200.jpg');" data-genero="Comedia">
            <span>Comedia</span>
          </div>
          <div class="genero-item" style="background-image: url('https://www.cinepremiere.com.mx/wp-content/uploads/2021/08/pride-and-prejudice-1200-1200-675-675-crop-000000-900x506.jpeg');" data-genero="Drama">
            <span>Drama</span>
          </div>
          <div class="genero-item" style="background-image: url('https://35mm.es/wp-content/uploads/2021/06/peliculas-fantasia.jpg.webp');" data-genero="Fantasía">
            <span>Fantasía</span>
          </div>
        </div>
      </section>
    </section>
  `;

  // Galería de películas

  const track = document.querySelector(".gallery-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  const updateGallery = () => {
    const itemWidth = document.querySelector(".gallery-item").offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < films.slice(0, 10).length - 1) {
      currentIndex++;
      updateGallery();
    }
  });

  // Interacción de los géneros

  const generoItems = document.querySelectorAll(".genero-item");
  generoItems.forEach((item) => {
    item.addEventListener("click", () => {
      const genero = item.getAttribute("data-genero");
      alert(`Has seleccionado el género: ${genero}`);
    });
  });

  window.addEventListener("resize", updateGallery);
};

