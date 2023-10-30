// extrayendo datos de la data
const todosLosEventos = data.events;
const fechaActual = data.currentDate;
let eventosPasados = []
let eventosFuturos = []

for (Evento of todosLosEventos) {
  if (Evento.date < fechaActual) {
    eventosPasados.push(Evento)
  } else {
    eventosFuturos.push(Evento)
  }
}
let contenedorDeCards = document.getElementById("cards");

// esta funcion crea las card 
function crearCards(todosLosEventos) {
  if (todosLosEventos.length == 0) {
    contenedorDeCards.innerHTML = `<h2>"No sé encontró lo que ingresaste, prueba elegir una categoría"</h2>`
  } else {
    for (let idEvento of todosLosEventos) {
      let estructuraCard = document.createElement("div");
      contenedorDeCards.appendChild(estructuraCard)
      estructuraCard.classList.add("card", "text-light", "bg-success", "text-center", "card-grup", "m-3", "bg-gradient")
      estructuraCard.style.width = "18rem";
      estructuraCard.innerHTML =
        `<h5 class="card-title ">${idEvento.name}</h5>
      <img src=${idEvento.image} class="card-img-bottom p-3 style="H-50" alt="...">
    <div class=" card-body">
    <p class="card-text f-2">${idEvento.description}</p>
    <a href="./Details.html?_id=${idEvento._id}" class="btn btn-primary">more information</a>
    </div>`
    }
  }
}
// // Sprint #3


// pintar checkbox
const filtroPorEventos = todosLosEventos.map(categoria => categoria.category);
let filtroParaCheckbox = new Set(filtroPorEventos)
let eventosSinDuplicados = Array.from(filtroParaCheckbox)
let contenedorCheckbox = document.getElementById("contenedor-checkbox");
function crearCheckbox(todosLosEventos) {
  todosLosEventos.forEach(categoria => {
    let estructuraCheckbox = document.createElement("div");
    estructuraCheckbox.classList.add("container-fluid", "d-flex", "col", "row")
    estructuraCheckbox.innerHTML = `
    <div class="checbox col container-fluid justify-content-center border border-dark-subtle d-flex">
      <label class="form-check-label text-primary for="${categoria}">${categoria}</label>
      <input class="form-check-input" type="checkbox" id="${categoria}"value="${categoria}">
    </div>
        `;
    contenedorCheckbox.appendChild(estructuraCheckbox);
  });
}