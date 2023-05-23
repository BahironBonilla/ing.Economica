function calcularAnualidadCreciente(valor, interes, tiempo, gradiente) {
  interes = interes / 100
  console.log( interes,"interes");
  valor = parseInt(valor)
  console.log(valor,"valor");
  console.log(tiempo,"tiempo");
  console.log(gradiente,"gradiente");
  let potencia = Math.pow(1 + interes, -tiempo)
  console.log(potencia,"potencias");
  let potencia2 = Math.pow(1 + interes, tiempo)
  console.log(potencia);
  console.log(potencia2);
  let primeraParte  = (1-potencia)/interes
  let segundaParte = primeraParte - (tiempo/potencia2)
  let terceraParte = primeraParte
  let cuartaParte = (gradiente/interes)*segundaParte
  let quintaParte = valor - cuartaParte
  let sestaParte = quintaParte / terceraParte

  console.log(potencia,"potencia");
  console.log(cuartaParte,"cuarta parte g/i  * resto");
  console.log(primeraParte,"primera ");
  console.log(segundaParte,"segunda ");
  anualidad = sestaParte
  

  return anualidad.toFixed(2);
}

console.log(calcularAnualidadCreciente(40000000,7.3,5,225000))