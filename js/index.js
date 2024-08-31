//QuerySelector(): este selector va a recibir un string que indica el selector del elemento del DOM

let titulo = document.querySelector('h1');


const navbar = document.querySelector('.navbar');
console.log(navbar)


//QuerySelectorALL(): este selector va a recibir un string que indica el selector del elemento del DOM, y va a retornar un listado

let parrafos = document.querySelectorAll('p');

for (let parrafo of parrafos) {
    console.log(parrafo);
}

let strong = document.querySelector('.especial strong');

if (strong != null) {
    console.log(strong)
}


//getElementByID(): este selector recibe un string unicamente que tenga un id del elemento del DOM

let marca = document.getElementById('marca');
console.log(marca);
