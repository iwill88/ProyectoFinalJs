//Interaccion con el DOM

carruselImagenes = [
  {imagen:"Imagenes/Imagen_carrusel1.jpg"},
  {imagen:"Imagenes/Imagen_carrusel2.jpg"},
  {imagen:"Imagenes/Imagen_carrusel3.jpg"},
  {imagen:"Imagenes/Imagen_carrusel4.jpg"},
]


let primeraSeccion = document.getElementById("primera-seccion");
primeraSeccion.innerHTML = '<h1 class="titulo">El Vinilo de Vasiliy</h1>';

let parrafoInicio = document.createElement("p");
parrafoInicio.innerHTML = '<p class="parrafo">La música que trasciende...</p>';

primeraSeccion.append(parrafoInicio);

primeraSeccion.className ="primera-seccion";

let segundaSeccion = document.getElementById("segunda-seccion");
segundaSeccion.innerHTML = '<div class="d-flex flex-row justify-content-around segunda-seccion flex-wrap"><div class="d-flex flex-column align-items-center py-4"><i class="fa-solid fa-plane-departure pb-3"></i><p>ENVIOS A DOMICILIO</p></div><div class="d-flex flex-column align-items-center py-4"><i class="fa-solid fa-lock pb-3"></i><p>DATOS 100% PROTEGIDOS</p></div><div class="d-flex flex-column align-items-center py-4"><i class="fa-solid fa-phone pb-3"></i><p>+51 984043705</p></div></div>';

const contenedorCarrusel = document.getElementById("contenedor-carrusel");
carruselImagenes.forEach((carrusel) => {

  let componente = document.createElement("div");
  let html = `<div class="carousel-item active" data-bs-interval="5000">
  <img src="${carrusel.imagen}" class="d-block w-100 carrusel-imagen" alt="Vinilos-carrusel">
</div>`;
  componente.innerHTML = html;
  contenedorCarrusel.appendChild(componente);
});

const contenedor2 = document.getElementById("containerMasVendidos");
vinilosLista.forEach((producto,indice) => { 
if (producto.masVendido == 1) {
  let card = document.createElement("div");
  card.classList.add("col-12", "mb-2", "col-md-4");
  let html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`;
  card.innerHTML = html;
  contenedor2.appendChild(card);
}
 
});

function cancelar(){
  const contenedor3 = document.getElementById("tributoTheBeatles");
  contenedor3.innerHTML=`<div class="d-flex justify-content-center"><button class="btn btn-success boton-Beatles mb-5 " onClick="listaAlbums()">Lista de Albumes</button></div>`;
}

function listaAlbums(){
  const contenedor3 = document.getElementById("tributoTheBeatles");
  contenedor3.innerHTML="";
  let botonCancelar = document.createElement("div");
  botonCancelar.classList.add("d-flex", "justify-content-center");
  let cancelar= `<button class="btn btn-danger boton-Beatles mb-5 " onClick="cancelar()">Cancelar</button>`;
  botonCancelar.innerHTML=cancelar;
  contenedor3.appendChild(botonCancelar);
  console.log(contenedor3);
  fetch('https://the-beatles-api.herokuapp.com/api/v1/albums')
  .then((response)=>response.json())
  .then((data)=>{
    data.forEach((producto) => { 
        let card = document.createElement("div");
        card.classList.add("col-12", "mb-2", "col-md-4");
        let html = `<div class="card card-beatles"><div class="card-body"><h3>"${producto.albumName}"</h3><p>Genero: ${producto.genre}</p><p>Fecha de lanzamiento: ${producto.releaseDate}</p><p>Cantidad de canciones: ${producto.trackCount}</p></div></div>`;
        card.innerHTML = html;
        contenedor3.appendChild(card);
  
    })
  });
  
}

