//Slider o Carrusel de imagenes
const images = [
  "https://www.gamerfocus.co/wp-content/uploads/2019/04/lego_marvel_collection.jpg",
  "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HMUPCPZLLBBMNFO4O7CXX6FNUM.png",
  "https://cdn.shopify.com/s/files/1/0251/9220/2300/products/moon-knight_marvel_gallery_624dc1a1e6329.jpg?v=1649355135",
  "https://i0.wp.com/lanoticia.com/wp-content/uploads/2020/10/marvel-triple-a-funko.jpg?fit=1180%2C773&ssl=1",
  "https://resources.diariolibre.com/images/binrepository/fb6af489961c4bb2aa32c6b6908edf7d-5ebadbb322_13875472_20200512132706.jpg",
];

const img = document.querySelector("#img-slider");
const menu = document.querySelector("#menu-slider");

// Imagen inicial
img.src = images[0];

// Botones para cargar las imagenes
for (let i = 0; i < images.length; i++) {
  const li = document.createElement("li");
  li.className = "item-slider";
  li.id = images[i];
  menu.appendChild(li);
}

const lis = document.querySelectorAll(".item-slider");

// Evento para cambiar el "src" del slider o carrusel
lis.forEach((item) => {
  item.addEventListener("click", () => {
    img.src = item.id;
  });
});
