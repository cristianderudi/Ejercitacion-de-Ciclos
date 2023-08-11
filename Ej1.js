/* Crear una programa que pida un valor y muestre los 10
números siguientes. */


const prompt = require("prompt-sync")({ sigint: true});

let num = prompt("Introduce un número:"); // Pide al usuario que introduzca un número y lo guarda en la variable "num"
num = parseInt(num); // Convierte el valor introducido por el usuario a un número entero
for (let i = 1; i <= 10; i++) { // Crea un bucle que se ejecutará 10 veces
    console.log(num + i); // Muestra en la consola el valor de "num" más el valor de "i" en cada iteración del bucle
}