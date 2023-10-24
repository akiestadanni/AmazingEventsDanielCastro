crearCards(todosLosEventos)

const catFoodFair=[]
const catMuseum=[]
const catCostumeParty=[]
const catMusicConcert=[]
const catRace=[]
const catBookExchange=[]
const catCinema=[]
const restoEventos=[]

for (let categoria of todosLosEventos) {
  if (categoria.category==="Food Fair"){
 catFoodFair.push(categoria)
  }else if(categoria.category==="Museum"){
    catMuseum.push(categoria)
  }else if(categoria.category==="Costume Party"){
    catCostumeParty.push(categoria)
  }else if(categoria.category==="Music Concert"){
  catMusicConcert.push(categoria)  
  }else if(categoria.category==="Race"){
  catRace.push(categoria)  
  }else if(categoria.category==="Book Exchange"){
  catBookExchange.push(categoria)  
  }else if(categoria.category==="Cinema"){
  catCinema.push(categoria)
}
}
// console.table(catFoodFair);
// console.log(catFoodFair);
// console.table(restoEventos);
// console.table(catMuseum);
// console.table(catCostumeParty);
// console.table(catRace);
// console.table(catBookExchange);
// console.table(catCinema);
// console.table(catMusicConcert);
// _______  apendando checkbox a las paginas  __________ 
// 1 entrar al contenedor de la barra de navegacion checkBox y search; guardar en variable
// 2 crear el div para checkbox
// 3 apendar la estructura de los checkbox al html
let contenedorCheckBox= document.getElementById("contenedor-checkbox");

// creo la funcion y no me aplica el for
// function crearCheckbox(catFoodFair)
for (categoria of catFoodFair)
{
  let estructuraCheckbox = document.createElement("div");
  contenedorCheckBox.appendChild(estructuraCheckbox)
  estructuraCheckbox.classList.add("container-fluid","col","row")
  estructuraCheckbox.innerHTML = 
  `<div class="checbox col border border-dark-subtle">
  <label class="form-check-label text-primary" for="defaultCheck1">Category</label    >
  <input class="form-check-input" type="checkbox" value="defaultCheck1" id="defaultCheck1">
</div>`
}
// crearCheckbox(catFoodFair)
// crearCheckbox(catMuseum)
// crearCheckbox(catCostumeParty)
// crearCheckbox(catMusicConcert)
// crearCheckbox(catRace)
// crearCheckbox(catBookExchange)
// crearCheckbox(catCinema)
