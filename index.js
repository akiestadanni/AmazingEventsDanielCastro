crearCheckbox()
const contenedorSearch = document.getElementById("search");

function filtrarEventosChecked(eventos) {
    checboxActivados = Array.from(document.querySelectorAll('input[type="Checkbox"]:checked')).map(checkbox => checkbox.value)
    if (checboxActivados.length > 0) {
        return todosLosEventos.filter(categoria => checboxActivados.includes(categoria.category))
    } return eventos
}

function filtrarTextoIngresado(eventos) {
   console.log(contenedorSearch.value);
    return eventos.filter(evento=> evento.name.toUpperCase().includes(contenedorSearch.value.toUpperCase()))
}
contenedorCheckbox.addEventListener('change',()=>{


});

contenedorSearch.addEventListener('keyup',()=>{
    let filtroEventosChecked= filtrarEventosChecked(todosLosEventos)
    let filtroCoincidencias=filtrarTextoIngresado(filtroEventosChecked)
   crearCards(filtroCoincidencias)
});