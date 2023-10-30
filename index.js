crearCheckbox(eventosSinDuplicados)
const contenedorSearch = document.getElementById("search");

//-activo el escuchador de eventos para el div de checkbox//
//- creo función que me retorna las categorias chequeadas//
//-guardo en variable los valores checked//
//-creo las cards con los valores checked

function filtrarEventosChecked(eventos) {
    checboxActivados = Array.from(document.querySelectorAll('input[type="Checkbox"]:checked')).map(checkbox => checkbox.value)
    if (checboxActivados.length > 0) {
        return todosLosEventos.filter(categoria => checboxActivados.includes(categoria.category))
    } return eventos
}

contenedorCheckbox.addEventListener('change',()=>{
    let filtroEventosChecked = filtrarEventosChecked(todosLosEventos)
    crearCards(filtroEventosChecked)
});

console.log(contenedorSearch);
function filtroTextoIngresado(eventos) {
   console.log(contenedorSearch.value);
    return eventos.filter(evento=> evento.name.toUpperCase().includes(contenedorSearch.value.toUpperCase()))
}

contenedorSearch.addEventListener('keyup',()=>{
    let filtrobusquedaTexto= filtroTextoIngresado(todosLosEventos)
    crearCards(filtrobusquedaTexto)
    console.log(filtrobusquedaTexto);
});