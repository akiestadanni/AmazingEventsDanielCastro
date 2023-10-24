crearCards(todosLosEventos)

const filtroPorEventos = todosLosEventos.map(categoria=>categoria.category);
console.table(filtroPorEventos);
let filtroParaCheckbox= new Set(filtroPorEventos)
console.table(filtroParaCheckbox);
let contenedorCheckbox=document.getElementById("contenedor-checkbox");
console.log(contenedorCheckbox);
filtroParaCheckbox.forEach(categoria=>{categoria
let estructuraCheckbox = document.createElement("div");
contenedorCheckbox.appendChild(estructuraCheckbox)
estructuraCheckbox.classList.add("container-fluid","d-flex","col-2","row")
estructuraCheckbox.innerHTML = 
`<div class="checbox col border border-dark-subtle">
<label class="form-check-label text-primary" for="defaultCheck1">Category</label    >
<input class="form-check-input" type="checkbox" value="defaultCheck1" id="defaultCheck1">
</div>`})