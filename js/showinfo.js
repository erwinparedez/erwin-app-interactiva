// Mostrar info de cada comic al hacer click en la portada que deseemos

const contenedor = document.querySelector("#info-comic");
//Info del comic
const portada = document.querySelector("#portada-grande");
const titulo = document.querySelector("#comic-title");
const personaje = document.querySelector("#comic-character");
// Boton
const boton = document.querySelector("#agregarA");
const colorVerde = "rgb(57, 126, 57)";
const colorRojo = "rgb(233, 45, 45)";
//Iconos
const exit = document.querySelector("#exit-icon");
const bookshelf = document.getElementById("bookshelf-icon");
const message = document.getElementById("added-message");

setTimeout(() => {
  const imagenes = document.querySelectorAll(".portadas");

  // Agregamos un evento ONCLICK a todas las imagenes para abrir la info respectiva
  imagenes.forEach((comic) => {
    comic.onclick = () => {
      bookshelf.classList.toggle("invisible");

      if (comic.classList.contains("agregado")) {
        boton.innerHTML = "Retirar de tu estantería";
        boton.style.backgroundColor = colorRojo;
      }

      boton.onclick = () => {
        comic.classList.toggle("agregado");
        if (comic.classList.contains("agregado")) {
          boton.innerHTML = "Retirar de tu estantería";
          boton.style.backgroundColor = colorRojo;
          comic.style.filter = "grayscale(1)";
          itemagregado("Comic agregado! 💚");
        } else {
          boton.innerHTML = "Agregar a tu estantería";
          boton.style.backgroundColor = colorVerde;
          comic.style.removeProperty("filter");
          itemagregado("Comic retirado! 💔");
        }
      };

      portada.src = comic.getAttribute("src");
      personaje.innerHTML = comic.getAttribute("alt");
      titulo.innerHTML = comic.nextElementSibling.innerHTML;

      contenedor.classList.toggle("invisible");
    };
  });
}, 1000);

// Elemento agregado al estante de comics
function itemagregado(texto) {
  setTimeout(cerrarInfo, 800);
  setTimeout(() => {
    message.innerHTML = texto;
    message.classList.toggle("invisible");
    setTimeout(() => {
      message.classList.toggle("invisible");
    }, 2500);
  }, 800);
}

//Boton para cerrar la ventana de INFO
exit.addEventListener("click", cerrarInfo);

function cerrarInfo() {
  contenedor.classList.toggle("invisible");
  bookshelf.classList.toggle("invisible");
  portada.src = "";
  boton.innerHTML = "Agregar a tu estantería";
  boton.style.backgroundColor = colorVerde;
}
