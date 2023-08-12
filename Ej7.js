/* Se ofrece un trabajo que pague un centavo en la primera semana y dobla su salario cada semana, es decir, $0.01 la primera semana; $0.02 la segunda semana; $0.04 la tercera semana;

$2^(n-1)/100 la n-ésima semana. Determine el salario por cada semana y el salario pagado hasta
la fecha por espacio de n semanas. */

const prompt = require("prompt-sync")({ sigint: true});
// Pedir al usuario que ingrese el número de semanas n
var n = parseInt(prompt("Ingresa el número de semanas:"));

// Inicializar el salario y el salario acumulado
var salario = 0.01;
var salarioAcumulado = 0;

// Imprimir encabezado
console.log("Semana\tSalario por semana\tSalario acumulado");

// Calcular y mostrar el salario por cada semana y el salario acumulado
for (var semana = 1; semana <= n; semana++) {
  salarioAcumulado += salario;
  console.log(semana + "\t$" + salario.toFixed(2) + "\t\t$" + salarioAcumulado.toFixed(2));
  
  salario *= 2; // Duplicar el salario para la siguiente semana
}
