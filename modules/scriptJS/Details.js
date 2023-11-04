// pintar card ditails
const urlParams= new URLSearchParams(window.location.search)
const idEvento=urlParams.get("_id")
let eventoBuscado= todosLosEventos.find(evento=>evento._id==idEvento)
console.log(urlParams);
console.log(idEvento);
console.log(eventoBuscado);

// esta funcion pinta la card de details
function crearCard(ArrayDeEvento) {
  const contenedorCardDetails= document.getElementById("card-details")
  const estructuraCardDetails= document.createElement("div")
  estructuraCardDetails.classList.add("row","contain-fluid")
  estructuraCardDetails.innerHTML= `<div class="col-md-6 d-flex justify-content-between border border-light">
  <img src=${ArrayDeEvento.image}class="img-fluid rounded-start object-fit-cover"
      alt="music_concert.jpg">
  </div>
  <div class="col-md-6 justify-content-center bg-danger-subtle p-2">
  <div class="card-body">
  <h4 class="card-title p-1 m-3 d-flex justify-content-evenly">${ArrayDeEvento.name}</h4>
  
  <h5>Date:</h5>
  <p class="card-text"><small class="text-body-secondary"></small>
  ${ArrayDeEvento.date}
  </p>
  
  <h5 class="description">Description:</h5>
  <p class="card-text">
  ${ArrayDeEvento.description}
  </p>
  
  <h5>Category:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${ArrayDeEvento.category}
  </small></p>
  
  <h5>Place:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${ArrayDeEvento.place}
  </small></p>
  
  <h5>Capacity :</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${ArrayDeEvento.capacity}
  </small></p>
  
  <h5>Estimate:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${ArrayDeEvento.estimate}
  </small></p>
  
  <h5>assistance:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${ArrayDeEvento.assistance}
  </small></p>
  
  <h5>Price:</h5>
  <p class="card-text"><small class="text-body-secondary">
  ${ArrayDeEvento.price}</p>
  </div>
  </div>`;
  contenedorCardDetails.appendChild(estructuraCardDetails)
  console.log(estructuraCardDetails);
  };
crearCard(eventoBuscado);
