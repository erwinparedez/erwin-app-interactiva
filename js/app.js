//Consumo de la API para armar la galeria de comics

const HTMLResponse = document.querySelector("#galeria");
const ul = document.createElement("ul");
const urlAPI = "./marvel-comics.json";

fetch(urlAPI)
  .then((response) => response.json())
  .then((comics) => {
    comics.forEach((comic) => {
      let li = document.createElement("li");
      li.className = "item";
      //Portada del comic
      let img = document.createElement("img");
      img.src = `${comic.img}`;
      img.className = "portadas";
      img.alt = `${comic.character}`;
      li.appendChild(img);

      //Titulo del comic
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(`${comic.title}`));
      li.appendChild(div);
      ul.appendChild(li);
    });
    HTMLResponse.appendChild(ul);
  });
