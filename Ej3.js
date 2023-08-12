/* Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100 */

// Inicializar una variable para almacenar la sumatoria
var sumatoria = 0;

// Utilizar un bucle for para recorrer los números del 0 al 100
for (var i = 0; i <= 100; i++) {
  // Sumar el valor actual de 'i' a la sumatoria existente
  sumatoria += i;
}

// Imprimir la sumatoria en la consola
console.log("La sumatoria es: " + sumatoria);