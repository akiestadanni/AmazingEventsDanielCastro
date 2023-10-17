let todosLosEventos = data.events;
const fechaActual = data.currentDate;
let eventosPasados = []
let eventosFuturos = []
for (let idEvento of todosLosEventos) {
  if (idEvento.date < fechaActual) {
    eventosPasados.push(idEvento)
  } else { eventosFuturos.push(idEvento) }

}

let sectionDeCard = document.getElementById("cards");

function crearCards(todosLosEventos) {
  for (let idEvento of todosLosEventos) {
    let estructuraCard = document.createElement("div");
    sectionDeCard.appendChild(estructuraCard)

    // como pasar todas las clases en una linea ??¡?
    // estructuraCard.classList.add(`${card text-center h-100 mt-3 mb-3 bg-primary-subtle}`);

    estructuraCard.classList.add("card")
    estructuraCard.classList.add("text-light")
    estructuraCard.classList.add("bg-success")
    estructuraCard.classList.add("text-center")
    estructuraCard.classList.add("card-grup")
    estructuraCard.classList.add("m-3")
    estructuraCard.classList.add("bg-gradient")
   
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