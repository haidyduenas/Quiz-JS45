// Ejercicio 1
var n1 = prompt("Ingrese el primer numero");
var n2 = prompt("Ingrese el segundo numero");
var n3 = prompt("Ingrese el tercer nuero");

var maximo = Math.max(n1,n2,n3);
var minimo = Math.min(n1,n2,n3);

console .log("Máximo =" + maximo + "\n" + "Mínimo = "+ minimo);

// Ejercicio 2
  var indicePar = [];
  var indiceImpar =[];
function indicesPar_Impar(array){

  for( var i in array){
    if (i%2 == 0){
      indicePar.push(array[i]);
    }else{
      indiceImpar.push(array[i]);
    }
  }
  
}
indicesPar_Impar([15,29,78,29,40,20,18,100,78,68]);
console.log("Elementos en la posicion par : " + indicePar + "\n" + "Elementos en la posicion impar :" + indiceImpar);

// Ejercicio 3
function reverso (array){
  return array.reverse().join(" ");
  
  
}
console.log(reverso([1,2,3,4,5,6,7,8,9,0]));

//Ejercicio 4
