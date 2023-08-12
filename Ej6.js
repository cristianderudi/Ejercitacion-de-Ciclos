/* Leer 20 números y encontrar el mayor y el menor valor leídos. */

var numeros = []; // Array para almacenar los números

// Generar 20 números aleatorios entre 0 y 100 y agregarlos al array
for (var i = 0; i < 20; i++) {
  var numeroAleatorio = Math.floor(Math.random() * 101); // Generar número aleatorio entre 0 y 100
  numeros.push(numeroAleatorio);
}

var mayor = numeros[0]; // Inicializar la variable 'mayor' con el primer número
var menor = numeros[0]; // Inicializar la variable 'menor' con el primer número

// Encontrar el mayor y el menor valor en el array
for (var i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

// Mostrar los números generados, el mayor y el menor valor en la consola
console.log("Números generados: " + numeros.join(", "));
console.log("El mayor valor es: " + mayor);
console.log("El menor valor es: " + menor);
