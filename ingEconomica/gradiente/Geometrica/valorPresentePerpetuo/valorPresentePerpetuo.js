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
    calcularValorPresetePerpetuoGeometrico(
      inicial.value,
      interes.value,
      gradiente.value
    );

  document.getElementById("interes").value = null;
  document.getElementById("inicial").value = null;
  document.getElementById("gradiente").value = null;
}

function calcularValorPresetePerpetuoGeometrico(valor, interes, gradiente) {
  interes = interes / 100
  gradiente = gradiente / 100
  vpp = 0
  if(gradiente<interes){
    vpp = valor / (interes-gradiente)
  }

  return vpp.toFixed(2);
}


// console.log(calcularValorPresetePerpetuoAritmetico(200000,2.5,10000));//! 24.000.000
// console.log(calcularValorPresetePerpetuoGeometrico(300000,20,10));//! 3.000.000
