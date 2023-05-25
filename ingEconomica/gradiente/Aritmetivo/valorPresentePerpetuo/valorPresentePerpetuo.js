let interes = document.getElementById("interes");
let inicial = document.getElementById("inicial");
let gradiente = document.getElementById("gradiente");
let p = document.getElementById("p");

function validar() {
 
  p.innerHTML =
    "Intereses(i): " +
    interes.value +
    "% | Monto inicial(P): $" +
    inicial.value +
    " | Gradiente(g): $" +
    gradiente.value +
    "<br><br>" +
    "El Valor Presente perpetuo de este problema es: $" +
    calcularValorPresetePerpetuoAritmetico(
      inicial.value,
      interes.value,
      gradiente.value
    );

  document.getElementById("interes").value = null;
  document.getElementById("inicial").value = null;
  document.getElementById("gradiente").value = null;
}

function calcularValorPresetePerpetuoAritmetico(valor, interes, gradiente) {
  interes = interes / 100;
  vpp = valor / interes + gradiente / Math.pow(interes, 2);
  return vpp.toFixed(2);
}

// console.log(calcularValorPresetePerpetuoAritmetico(200000,2.5,10000));//! 24.000.000
// console.log(calcularValorPresetePerpetuoGeometrico(300000,20,10));//! 3.000.000
