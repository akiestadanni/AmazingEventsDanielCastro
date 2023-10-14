console.log("que pasa");
const fechaActual = data.currentDate
console.log(fechaActual);
let todosLosEventos = data.events
let eventosPasados = []
console.log(todosLosEventos);
for (let idEvento of todosLosEventos) {
    if (idEvento.date < fechaActual) {
        eventosPasados.push(idEvento)
    }
}

console.table(eventosPasados);
crearCards(eventosPasados)
