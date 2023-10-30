crearCheckbox(eventosSinDuplicados)
const contenedorSearch = document.getElementById("search");



//-activo el escuchador de eventos para el div de checkbox//
//- creo función que me retorna las categorias chequeadas//
//-guardo en variable los valores checked//
//-creo las cards con los valores checked



contenedorCheckbox.addEventListener('change',()=>{
    let filtroEventosChecked = filtrarEventos(todosLosEventos)
    crearCards(filtroEventosChecked)
}

);

function filtrarEventos(eventos) {
    checboxActivados = Array.from(document.querySelectorAll('input[type="Checkbox"]:checked')).map(checkbox => checkbox.value)
    if (checboxActivados.length > 0) {
        return todosLosEventos.filter(categoria => checboxActivados.includes(categoria.category))
    } return eventos

}
let filtroEventosChecked= filtrarEventos(todosLosEventos)
crearCards(filtroEventosChecked)


console.log(contenedorSearch);
function filtroTextoIngresado(eventos) {
    return todosLosEventos.filter(evento=> evento.name.toLowerCase().includes(contenedorSearch.value.toLowerCase()))
}
contenedorSearch.addEventListener('keyup',()=>{
    let filtrobusquedaTexto= filtroTextoIngresado(todosLosEventos)
    crearCards(filtrobusquedaTexto)
    console.log(filtrobusquedaTexto);
});

