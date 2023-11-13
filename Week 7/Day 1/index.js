// index.js

console.log('JS connected - Hola'); // <== just a quick check up to make sure js doc is connected properly
//alert('Funciona!');

// TO GET THE ELEMENT FROM DOM YOU CAN USE "getElementById"
let theCatDiv = document.getElementById('cat');

/*console.log(theCatDiv); // <== what can you see in browser's console

console.log(document);
let element = document.getElementById('cat');
let elements = document.getElementsByClassName('mouse');

console.log(element,elements);*/

// TO ADD TEXT TO DOM USE "innerHTML"
theCatDiv.innerHTML = "I'm a cat";

let otherElement = document.getElementById('other');
//alert('Cambio el fondo a rojo!');

const timeID = setTimeout(() => {
    alert('cambio los estilos');
}, 5000);

theCatDiv.style.backgroundColor = 'red';

// set the HTML content of "otherElement" to "I'm a cat"
otherElement.innerHTML = theCatDiv.innerHTML;


theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '50px';
theCatDiv.style.marginTop = '30px';
theCatDiv.style.paddingBottom = '30px'