// Para este Sprint necesitarás el contenido proporcionado en estos talleres:
// _Introducción a JavaScript
// _Funciones
// _Condicionales
// _Arrays y objetos
// _Loops
// _DOM



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
let todosLosEventos = data.events;
const fechaActual = data.currentDate;
console.log(fechaActual);
console.table(todosLosEventos);

// {<div id="box-card" class="card text-center card h-100 mt-3 mb-3 bg-primary-subtle" style="width: 18rem;">
// <h4 class="card-title font-monospace p-2 m-3">Festival of the collectivities</h4>
// <img src="./Recursos_Amazing_Events_Task_1/food_fair.jpg" class="card-img-bottom" alt="food_fair.jpg">
// <div class="card-body">
//     <p class="card-text">Enjoy your favorite dishes from different countries in a unique event for the
//         whole
//         family.</p>
//     <a href="#" class="btn btn-primary">more information</a>
// </div>
// </div>}
let sectionDeCard = document.getElementById("cards");

function crearCards(todosLosEventos) {
for (let idEvento of todosLosEventos) {
    let estructuraCard = document.createElement("div");
    sectionDeCard.appendChild(estructuraCard)

    // como pasar todas las clases en una linea ??¡?
    // estructuraCard.classList.add(`${"card text-center h-100 mt-3 mb-3 bg-primary-subtle"}`);

    estructuraCard.classList.add("card")
    estructuraCard.classList.add("text-center")
    estructuraCard.classList.add("h-100")
    estructuraCard.classList.add("mt-3")
    estructuraCard.classList.add("mb-3")
    estructuraCard.classList.add("bg-primary-subtle")
    estructuraCard.style.width = "18rem";
    estructuraCard.innerHTML = `<h4 class="card-title font-monospace p-2 m-3">Festival of the collectivities</h4>
 <img src="./Recursos_Amazing_Events_Task_1/food_fair.jpg" class="card-img-bottom" alt="food_fair.jpg">
 <div class="card-body">
    <p class="card-text">Enjoy your favorite dishes from different countries in a unique event for the
        whole
       family.</p>
    <a href="#" class="btn btn-primary">more information</a>`
}
}
crearCards(todosLosEventos)