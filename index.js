// crearCards(todosLosEventos)

// pintar checkbox
console.log(todosLosEventos);
const filtroPorEventos = todosLosEventos.map(categoria => categoria.category);
let filtroParaCheckbox = new Set(filtroPorEventos)
let eventosSinDuplicados = Array.from(filtroParaCheckbox)
console.table(filtroParaCheckbox);
console.table(eventosSinDuplicados);
let contenedorCheckbox = document.getElementById("contenedor-checkbox");
console.log(contenedorCheckbox);
function crearCheckbox(todosLosEventos) {
  todosLosEventos.forEach(categoria => {
    let estructuraCheckbox = document.createElement("div");
    estructuraCheckbox.classList.add("container-fluid", "d-flex", "col", "row")
    estructuraCheckbox.innerHTML = `
    <div class="checbox container-fluid col border border-dark-subtle">
    <label class="form-check-label text-primary for="${categoria}">"${categoria}"</label>
    <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">
    </div>
    `;
    contenedorCheckbox.appendChild(estructuraCheckbox);
    console.log(estructuraCheckbox);
  });
}
  crearCheckbox(eventosSinDuplicados);
  console.log(eventosSinDuplicados);