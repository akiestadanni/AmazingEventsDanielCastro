// pintar card ditails
const urlParams= new URLSearchParams(window.location.search)
console.log(urlParams);
const idEvento=urlParams.get("_id")
console.log(idEvento);
const eventos= data.events
let eventoBuscado= eventos.find(evento=>evento._id==idEvento)
console.table(eventoBuscado);

// esta funcion pinta la card de details
function crearCard(deLoseventos) {
  const contenedorCardDetails= document.getElementById("card-details")
  const estructuraCardDetails= document.createElement("div")
  estructuraCardDetails.classList.add("row","g-0")
  estructuraCardDetails.innerHTML= `<div class="col-md-6 d-flex justify-content-between border border-light">
  <img src="${deLoseventos.image} " class="img-fluid rounded-start object-fit-cover"
      alt="music_concert.jpg">
  </div>
  <div class="col-md-6 justify-content-center bg-danger-subtle p-2">
  <div class="card-body">
  <h4 class="card-title p-1 m-3 d-flex justify-content-evenly">${deLoseventos.name}</h4>
  
  <h5>Date:</h5>
  <p class="card-text"><small class="text-body-secondary"></small>
  ${deLoseventos.date}
  </p>
  
  <h5 class="description">Description:</h5>
  <p class="card-text">
  ${deLoseventos.description}
  </p>
  
  <h5>Category:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${deLoseventos.category}
  </small></p>
  
  <h5>Place:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${deLoseventos.place}
  </small></p>
  
  <h5>Capacity :</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${deLoseventos.capacity}
  </small></p>
  
  <h5>Estimate:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${deLoseventos.estimate}
  </small></p>
  
  <h5>assistance:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${deLoseventos.assistance}
  </small></p>
  
  <h5>Price:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${deLoseventos.price}></p>
  </div>
  </div>`;
  contenedorCardDetails.appendChild(estructuraCardDetails)
  }
crearCard(eventoBuscado)