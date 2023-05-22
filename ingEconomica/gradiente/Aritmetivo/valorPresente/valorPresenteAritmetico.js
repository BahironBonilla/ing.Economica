let tiempo = document.getElementById("tiempo");
let interes = document.getElementById("interes");
let inicial = document.getElementById("inicial");
let final = document.getElementById("final");
let gradiente = document.getElementById("gradiente");
let p = document.getElementById("p");
let tipo = document.getElementById("tipoGradiente1").value;
let tipo2 = document.getElementById("tipoGradiente2").value;
function validar() {
  let opcion = $("input:radio[name=tipoGradiente]:checked").val();
  console.log(opcion);

  if (opcion == "creciente") {
    p.innerHTML =
      "Tiempo(n): " +
      tiempo.value +
      " cuotas | Intereses(i): " +
      interes.value +
      "% | Monto inicial(P): $" +
      inicial.value +
      " | Gradiente(g): $" +
      gradiente.value +
      " | Creciente" +
      "<br><br>" +
      "El Valor Presente de este problema es: $" +
      calcularValorPresenteCreciente(
        inicial.value,
        interes.value,
        tiempo.value,
        gradiente.value
      );
  } else {
    p.innerHTML =
      "Tiempo(n): " +
      tiempo.value +
      " cuotas | Intereses(i): " +
      interes.value +
      "% | Monto inicial(P): $" +
      inicial.value +
      " | Gradiente(g): $" +
      gradiente.value +
      " | Decreciente" +
      "<br><br>" +
      "El Valor Presente de este problema es: $" +
      calcularValorPresenteDecreciente(
        inicial.value,
        interes.value,
        tiempo.value,
        gradiente.value
      );
  }

  document.getElementById("tiempo").value = null;
  document.getElementById("interes").value = null;
  document.getElementById("inicial").value = null;
  document.getElementById("gradiente").value = null;
}

function calcularValorPresenteCreciente(inicial, interes, tiempo, gradiente) {
interes = interes/100
console.log(interes);

let primeraParte = tiempo / Math.pow(1 + interes, tiempo)
let segundaParte = (1 - Math.pow(1 + interes, -tiempo)) / interes
let terceraParte =(gradiente / interes)
let cuartaParte = ((1 - Math.pow(1 + interes, -tiempo)) / interes)
let quintaParte = (segundaParte -  primeraParte);
let sestaParte = terceraParte * quintaParte
let septimaParte = inicial * cuartaParte
 let c =
 septimaParte + sestaParte
    
      
  console.log(c);

  return c.toFixed(2);
}
function calcularValorPresenteDecreciente(inicial, interes, tiempo, gradiente) {
  interes = interes/100
  console.log(interes);
  
  let primeraParte = tiempo / Math.pow(1 + interes, tiempo)
  let segundaParte = (1 - Math.pow(1 + interes, -tiempo)) / interes
  let terceraParte =(gradiente / interes)
  let cuartaParte = ((1 - Math.pow(1 + interes, -tiempo)) / interes)
  let quintaParte = (segundaParte -  primeraParte);
  let sestaParte = terceraParte * quintaParte
  let septimaParte = inicial * cuartaParte
   let c =
   septimaParte - sestaParte
      
   console.log(septimaParte);
   console.log(sestaParte);
        
    console.log(c);
  
    return c.toFixed(2);
}