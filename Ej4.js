/* Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número. */

const prompt = require("prompt-sync")({ sigint: true});
// Pedir al usuario que ingrese un número entero positivo
var numero = parseInt(prompt("Ingresa un número entero positivo: "));

// Validar que el número ingresado sea positivo
if (numero < 0) {
  console.log("Ingresa un número entero positivo válido.");
} else {
  // Inicializar una variable para almacenar el factorial
  var factorial = 1;

  // Calcular el factorial del número ingresado
  for (var i = 1; i <= numero; i++) {
    factorial *= i;
  }

  // Mostrar el factorial en la consola
  console.log("El factorial de " + numero + " es: " + factorial);
}
