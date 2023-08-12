/* Ingrese un valor numérico correspondiente a un mes y a continuación muestre todos los meses en
letras que restan para llegar a diciembre del mismo año (por ejemplo, si ingresa 10 debe mostrar
octubre, noviembre y diciembre). Validar que se ingrese un número de mes válido y el proceso
finaliza cuando el operador ingresa el valor cero. Muestre también los valores correctos e
incorrectos ingresados por el usuario. */

const prompt = require("prompt-sync")({ sigint: true});
var meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  
  var mesIngresado;
  var mesesRestantes = [];
  
  do {
    mesIngresado = parseInt(prompt("Ingresa un número de mes (1-12) o 0 para salir: "));
  
    if (mesIngresado >= 1 && mesIngresado <= 12) {
      mesesRestantes = meses.slice(mesIngresado - 1);
      console.log("Meses restantes hasta diciembre: " + mesesRestantes.join(", "));
    } else if (mesIngresado !== 0) {
      console.log("Valor ingresado no válido.");
    }
  
  } while (mesIngresado !== 0);
  
  console.log("Valores ingresados correctamente: " + mesesRestantes.join(", "));
  