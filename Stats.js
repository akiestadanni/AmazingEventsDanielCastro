const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(urlApi).then(response => response.json()).then(data => {
    console.table(data.events);
    console.table(data.currentDate);
    
    //aqui van las tareas con urlApi dentro del fetch//
})
    .catch(error => {
        console.log("Error ", error);
    })