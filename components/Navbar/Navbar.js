import "./Navbar.css";

// Alternar entre modo oscuro / modo claro
export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

// Cambia el texto en función del tema que se aplica

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

// Muestra el inicio de sesión

export const showLoginModal = () => {
  const modalBg = document.querySelector(".modal-bg");
  modalBg.style.display = "flex"; 
};

// Oculta el inicio de sesión

export const closeLoginModal = () => {
  const modalBg = document.querySelector(".modal-bg");
  modalBg.style.display = "none"; 
};

// Requisitos y comportamiento de inicio de sesión

export const handleLogin = () => {
  const loginBtn = document.querySelector("#loginBtn");
  loginBtn.addEventListener("click", showLoginModal);

  const closeModalBtn = document.querySelector(".modal-close");
  closeModalBtn.addEventListener("click", closeLoginModal);

  const modalForm = document.querySelector("#loginForm");
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "admin" && password === "1234") {
      alert("¡Inicio de sesión exitoso!");
      closeLoginModal();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
};

// Barra de búsqueda

export const handleSearch = () => {
  const searchBtn = document.querySelector("#searchBtn");
  const searchBar = document.querySelector("#searchBar");

  searchBtn.addEventListener("click", () => {
    const query = searchBar.value.trim();
    if (query) {
      alert(`Buscando: ${query}`);
    } else {
      alert("Por favor, ingresa un término de búsqueda.");
    }
  });
};

// Estructura del Navbar

export const Navbar = () => `
  <nav>
    <h2>FindFun</h2>
    <ul>
      <li>
        <a href="#" id="iniciolink">Inicio</a> 
      </li>
      <li>
        <a href="#" id="filmlink">Peliculas</a> 
      </li>
      <li>
        <a href="#" id="serieslink">Series</a> 
      </li>
      <li>
        <input type="text" id="searchBar" placeholder="Busca tu película/serie"/>
        <button id="searchBtn">Buscar</button>
      </li>
      <li>
        <button id="loginBtn">Iniciar sesión</button> 
      </li>
      <li>
        <button id="themeBtn">☀</button> 
      </li> 
    </ul>
  </nav>
  <div class="modal-bg">
    <div class="modal">
      <button class="modal-close">&times;</button>
      <h2>Iniciar sesión</h2>
      <form id="loginForm">
        <input type="text" id="username" placeholder="Nombre de usuario" required />
        <input type="password" id="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  </div>
`;

