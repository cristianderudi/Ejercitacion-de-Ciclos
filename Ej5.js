/* Muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */

const prompt = require("prompt-sync")({ sigint: true});
// Función que genera la secuencia de Fibonacci hasta el valor ingresado
function fibonacciSequence(limit) {
  var sequence = [0, 1]; // Inicializar la secuencia con los primeros dos números
  var nextNumber = 1;

  while (nextNumber <= limit) {
    // Agregar el siguiente número a la secuencia sumando los dos anteriores
    nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextNumber <= limit) {
      sequence.push(nextNumber);
    }
  }

  return sequence;
}

// Pedir al usuario que ingrese un valor para el límite
var limite = parseInt(prompt("Ingresa un valor para el límite:"));

// Obtener la secuencia de Fibonacci hasta el límite ingresado
var secuenciaFibonacci = fibonacciSequence(limite);

// Mostrar la secuencia en la consola
console.log("Secuencia de Fibonacci hasta " + limite + ": " + secuenciaFibonacci.join(", "));