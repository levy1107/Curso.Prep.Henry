// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array = ['primer numero', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var primer = array[0];
    return primer; 
  }
  


function devolverUltimoElemento(array = ['primer numero', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = array.pop();
  return ultimo;
}


function obtenerLargoDelArray(array = [0, 1, 2, 3, 4, 5]) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array = [0, 1, 2]) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array2 = [];
  for(var i = 0; i < array.length; i++){
    var valor = array[i] + 1;    
    array2.push(valor);
    
    }
    return array2;
   }


function agregarItemAlFinalDelArray(array = [1, 2, 3], elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array = [1, 2], elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}




function dePalabrasAFrase(palabras = ['hola', 'mundo']){
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
var array = [];
var x = palabras.length;
for(var i = 0; i < x ;i++ ){
if (i < x ){
  valor = palabras[i];
  array.push(valor);
}
}
var str = array[0];
console.log(array);
for(var e = 1; e< x;e++) {
    if(e < x){
   str = str + ' ' + array[e];
  }
}
return str;
}



function arrayContiene(array = [1, 5], elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  var valor = array.length;
  console.log(valor + "  tamaño del array");
  for(var i = 0; i < valor; i++){
    var x = array[i];
    if (x == elemento){
      return true;
    } 
    console.log(i);       
  }
  return false;
}
   



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for(var i=0; i < numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var promedio;
  for(var i = 0; i < resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
     
  }
  return promedio = suma / resultadosTest.length;
}


function numeroMasGrande(numeros) { 
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande = numeros[0];
  for(var i=1; i < numeros.length; i++){
    if(numeros[i] > grande){
      grande  = numeros[i];
    }
  }
  return grande;
}


function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var x = 0;
  for(var i =0; i < arreglo.length;i++){
    if(arreglo[i] > 19){
      x++;
    }
  }
  return x;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
   if(numeroDeDia == 1 ||numeroDeDia == 7){
    return 'Es fin de semana';
  }
  else{
    return 'Es dia laboral';
  }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
