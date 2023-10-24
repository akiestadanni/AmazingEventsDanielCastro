const todosLosEventos = data.events;
const fechaActual = data.currentDate;
let eventosPasados = []
let eventosFuturos = []

for (idEvento of todosLosEventos) {
  if (idEvento.date < fechaActual) {
    eventosPasados.push(idEvento)
  }else {
    eventosFuturos.push(idEvento)}
}
let contenedorDeCards = document.getElementById("cards");

function crearCards(todosLosEventos) {
  for (let idEvento of todosLosEventos) {
    let estructuraCard = document.createElement("div");
    contenedorDeCards.appendChild(estructuraCard)
    estructuraCard.classList.add("card","text-light","bg-success","text-center","card-grup","m-3","bg-gradient")
    estructuraCard.style.width = "18rem";
    estructuraCard.innerHTML = 
    `<h5 class="card-title ">${idEvento.name}</h5>
      <img src=${idEvento.image} class="card-img-bottom p-3 style="H-50" alt="...">
    <div class=" card-body">
    <p class="card-text f-2">${idEvento.description}</p>
    <a href="#" class="btn btn-primary">more information</a>
    </div>`
  }
}

// // Sprint #3

