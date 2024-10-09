/** 
 
let elemento = document;

elemento = document.title;

console.log(elemento);

let elementoW = window;

console.log(`ELEMENTOS DE WINDOWS ${elementoW}`);

////

let elementoE = document.styleSheets; //hojas de estilo
console.log(elementoE);


let elementoID = document.getElementById("tituloDOM");
console.log(elementoID);


let opID1 = document.getElementById("p1");
opID1.innerHTML = "Python";

let opID2 = document.getElementById("p2");
opID2.innerHTML = "C++";

let opID3 = document.getElementById("p3");
opID3.innerHTML = "JavaScript";



let elementoClase = document.getElementsByClassName("lista");
console.log(elementoClase);

*/

//Clase 08 de octubre

/** 
let elementoTag = document.getElementsByTagName("h1");
console.log(elementoTag);

*/

//En querySelector para indicar clase se utiliza el . y para ID el #

//let elementoQ = document.querySelector("ul");
//console.log(elementoQ.childElementCount);
//console.log(elementoQ.children);
//console.log(elementoQ.children[1]);
//console.log(elementoQ.firstElementChild);
//console.log(elementoQ.lastElementChild);

 /** 
let elementosCl = document.getElementsByTagName('p');
console.log(elementosCl.length);

for(let i = 0; i< elementosCl.length; i++){
    console.log(elementosCl[i].textContent);
}

elementosCl[3].innerHTML = "Acerca de"

let opId5 = document.getElementById(p2)

*/

//Trabajando en la Section Button

//Ver Fecha

function verFecha(){
    let fecha = document.getElementById("resultado");
    fecha.innerHTML = Date();
}

//Quitar Fecha

function quitarFecha(){
    let Qfecha = document.getElementById("resultado");
    Qfecha.innerHTML = "Fecha";
}


function temperatura(){
    let numero = parseFloat(document.getElementById("dato1").value);

    let calculo = numero-273.5;

    let res1 = document.getElementById("res");
    res1.innerHTML = (`Resultados = ${calculo}`);
}







