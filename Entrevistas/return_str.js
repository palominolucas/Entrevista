'use strict'


/*
document.getElementById("boton").addEventListener("click", resolucion);

function resolucion(){
    document.getElementsByClassName("respuestas").innerHTML = respuestas;
};

*/

var uno = "abba";
var dos = "aaabbbccccaa";
var tres = "aajjjjiiiikkkkeeeeaaiiiijjjjkkkeee";

function sinRepetir(x){
    var arr = Array.from(x);
    var result; 
    console.log(arr);

    for(let i = 0; i < arr.length; i++){
         if(arr[i] == arr[i+1]){
            delete arr[i];
        }
    }
    result = Array.from(arr).join('');
    return result;
}




document.querySelector("#uno").addEventListener("click", function() {
    document.querySelector(".uno").innerHTML = sinRepetir(uno);
  });
document.querySelector("#dos").addEventListener("click", function() {
    document.querySelector(".dos").innerHTML = sinRepetir(dos);
  });
document.querySelector("#tres").addEventListener("click", function() {
    document.querySelector(".tres").innerHTML = sinRepetir(tres);
  });


document.querySelector("#fin").addEventListener("click", function(){
    let prueba = prompt("Escribe tu prueba: ", "Pon letras repetidas");
    let resul = sinRepetir(prueba);
    document.querySelector(".persona").innerHTML = resul;
});

