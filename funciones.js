// extrayendo datos de la data
const todosLosEventos = data.events;
const fechaActual = data.currentDate;
export let eventosPasados = []
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
export function crearCards(eventos) {
  if (eventos.length == 0) {
 contenedorDeCards.innerHTML = `<h2>"No sé encontró lo que ingresaste, prueba elegir una categoría"</h2>`
  }
  contenedorDeCards.innerHTML = ''
  eventos.forEach (evento => {
    const estructuraCard = document.createElement("div");
        estructuraCard.classList.add("card", "text-light", "bg-success", "text-center", "card-grup", "m-3", "bg-gradient")
    estructuraCard.style.width = "18rem";
    estructuraCard.innerHTML =
      `<h5 class="card-title ">${evento.name}</h5>
      <img src=${evento.image} class="card-img-bottom p-3 style="H-50" alt="...">
    <div class=" card-body">
    <p class="card-text f-2">${evento.description}</p>
    <a href="./Details.html?_id=${evento._id}" class="btn btn-primary">more information</a>
    </div>`;
    contenedorDeCards.appendChild(estructuraCard);
  })
};
// // Sprint #3


// pintar checkbox
const filtroPorEventos = todosLosEventos.map(categoria => categoria.category);
let filtroParaCheckbox = new Set(filtroPorEventos)
export let eventosSinDuplicados = Array.from(filtroParaCheckbox)
let contenedorCheckbox = document.getElementById("contenedor-checkbox");

export function crearCheckbox(eventos) {
  eventos.forEach(categoria => {
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

// Sprint #4

// url
const urlApi="https://mindhub-xj03.onrender.com/api/amazing"
const newTodosLosEventos= data.events
const newFechaActual=data.currentDate
console.table(data.events);
console.table(data.currentDate);