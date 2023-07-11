
function calcular(operador, num1, num2) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: No se puede dividir por cero";
      }
    default:
      return "Operador inválido";
  }
}

let rta = ""
do {
  let num1 = Number((prompt("Ingrese el primer número:")));
  let operador = prompt("Ingrese la operación a realizar");
  let num2 = Number((prompt("Ingrese el segundo número:")));
  let resultado = calcular(operador, num1, num2)
  alert(resultado)
  rta = prompt("¿Desea Salir?(Escriba 'ESC' para salir)").toUpperCase()
} while (rta != "ESC")


