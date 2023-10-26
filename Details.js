// pintar card ditails
const urlParams= new URLSearchParams(window.location.search)
console.log(urlParams);
const id=urlParams.get("_id")
console.log(id);
const eventos= data.events
let eventoBuscado= eventos.find(evento=>evento._id==id)
console.table(eventoBuscado);

function crearCard(eventoBuscado) {
  const contenedorCardDetails= document.getElementById("card-details")
  const estructuraCardDetails= document.createElement("div")
  contenedorCardDetails.appendChild(estructuraCardDetails)
  estructuraCardDetails.classList.add("row","g-0")
  estructuraCardDetails.innerHTML= `<div class="col-md-6 d-flex justify-content-between border border-light">
  <img src="./Recursos_Amazing_Events_Task_1/music_concert.jpg" class="img-fluid rounded-start object-fit-cover"
      alt="music_concert.jpg">
  </div>
  <div class="col-md-6 justify-content-center bg-danger-subtle p-2">
  <div class="card-body">
  <h4 class="card-title p-1 m-3 d-flex justify-content-evenly">Metallica in concert</h4>
  
  <h5>Date:</h5>
  <p class="card-text"><small class="text-body-secondary"></small>
  ${eventoBuscado.date}
  </p>
  
  <h5 class="description">Description:</h5>
  <p class="card-text">
  ${eventoBuscado.description}
  </p>
  
  <h5>Category:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${eventoBuscado.category}
  </small></p>
  
  <h5>Place:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${eventoBuscado.place}
  </small></p>
  
  <h5>Capacity :</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${eventoBuscado.capacity}
  </small></p>
  
  <h5>Estimate:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${eventoBuscado.estimate}
  </small></p>
  
  <h5>assistance:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${eventoBuscado.assistance}
  </small></p>
  
  <h5>Price:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${eventoBuscado.price}></p>
  </div>
  </div>`;
  }
  crearCard(eventoBuscado)
