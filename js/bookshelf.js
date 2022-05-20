// Mostrar/Ocultar la caja Bookshelf

const icon = document.getElementById("bookshelf-icon");
const caja = document.getElementById("bookshelf");
let imagenes;

//Mostrar
icon.onclick = () => {
  caja.classList.toggle("hide-bookshelf");

  // Carga todos los comics agregados
  const portadas = document.querySelectorAll(".agregado");
  if (!caja.classList.contains("hide-bookshelf")) {
    portadas.forEach((comic) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = comic.src;
      img.className = "portada-mini";
      div.appendChild(img);
      caja.appendChild(div);
    });
  }
  // ----------------------------------------------------Experimental------------------------------------------------------------
  imagenes = document.querySelectorAll(".portada-mini");
  // Agregamos un evento ONCLICK a todas las imagenes para abrir la info respectiva
  imagenes.forEach((comic) => {
    comic.onclick = () => {
      // bookshelf.classList.toggle("invisible");
      // portada.src = comic.getAttribute("src");
      // personaje.innerHTML = comic.getAttribute("alt");
      // titulo.innerHTML = comic.nextElementSibling.innerHTML;
      console.log("Apurate mijo!");
      // contenedor.classList.toggle("invisible");
    };
  });
  // ----------------------------------------------------Experimental------------------------------------------------------------
  if (caja.classList.contains("hide-bookshelf")) {
    setTimeout(() => (caja.innerHTML = ""), 600);
  }
};

//Ocultar
window.addEventListener("click", (e) => {
  if (
    !caja.classList.contains("hide-bookshelf") &&
    e.target != caja &&
    e.target != icon &&
    e.target != imagenes
  ) {
    setTimeout(() => (caja.innerHTML = ""), 600);
    caja.classList.toggle("hide-bookshelf");
  }
});
