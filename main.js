
function calcular(operador, num1, num2) {
  switch (operador) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: No se puede dividir por cero";
      }
    default:
      return "Operador inválido";
  }
}


let numero1 = Number(prompt("Ingrese el primer número:"));
let operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");
let numero2 = Number(prompt("Ingrese el segundo número:"));

let resultado = calcular(operacion, numero1, numero2);
alert("El resultado es: " + resultado);
