// Mostrar/Ocultar la caja Bookshelf

const icon = document.getElementById("bookshelf-icon");
const caja = document.getElementById("bookshelf");

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

  if (caja.classList.contains("hide-bookshelf")) {
    setTimeout(() => (caja.innerHTML = ""), 600);
  }
};

//Ocultar
window.addEventListener("click", (e) => {
  if (
    !caja.classList.contains("hide-bookshelf") &&
    e.target != caja &&
    e.target != icon
  ) {
    setTimeout(() => (caja.innerHTML = ""), 600);
    caja.classList.toggle("hide-bookshelf");
  }
});
