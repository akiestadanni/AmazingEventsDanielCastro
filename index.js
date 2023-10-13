// Para este Sprint necesitarás el contenido proporcionado en estos talleres:
// _Introducción a JavaScript
// _Funciones
// _Condicionales
// _Arrays y objetos
// _Loops
// _DOM

// ◾Tendrás que filtrar los eventos en los datos por fecha,
//  usando js, ​​según en qué página te encuentres:

// -Home mostrará todos los eventos.

// -Pasado mostrará los eventos realizados 

// antes de la “fecha actual” en los datos.

// -Próximo mostrará los eventos que se realizarán después de la 
// “fecha actual” en los datos.


// ◾Tendrás que mostrar la información de los eventos en cada página
// tal como lo hiciste para el 1er sprint usando JavaScript.


// ◾ Intente ordenar su código en funciones de responsabilidad únicas.


// ◾Esté atento a espacios y comentarios innecesarios en el código.


// ◾ Una vez que haya terminado con su trabajo, agregue,
//  confirme y envíe su proyecto a la rama (sprint2).


// ◾Envía tu sprint dejando el enlace a tu repositorio de GitHub.

// ________________ lo que hice para el Sprin 2

// 1 guardar en variante fechaActual
//  esta me muestra la "clave"=id  y "Valor" areglo  
// guarde en variable todos los eventos 
let eventosPasados = []
let eventosFuturos = []
let todosLosEventos= data.events;

const fechaActual = data.currentDate;
console.log("la fecha actual es " + fechaActual);
let events
console.log("data es un array y el contenido que es un " + data + "que contiene objetos");



console.log("son los eventos con fecha mayor a fecha actual");
for( let idEvento of todosLosEventos){
    if(idEvento.date>fechaActual){
    eventosFuturos.push(idEvento)
} else{
    eventosPasados.push(idEvento)
}
}
console.table(eventosFuturos);


console.log("son los eventos con fechas menores a fecha actual");
console.table(eventosPasados);