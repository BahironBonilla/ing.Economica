function calcularValorFuturoCreciente(inicial, interes, tiempo,gradiente) {

    let primeraParte = ((Math.pow(1+(interes/100),tiempo)-1)/(interes/100))
    let segundaParte = (gradiente/(interes/100))
    let terceraParte =((Math.pow(1+(interes/100),tiempo)-1)/(interes/100))-tiempo
   
    console.log(primeraParte);
    console.log(segundaParte);
    console.log(terceraParte);
    let valorFuturo = (inicial*primeraParte)+(segundaParte*terceraParte)
    return valorFuturo
}

function calcularValorFuturoDecreciente(inicial, interes, tiempo,gradiente) {

    let primeraParte = ((Math.pow(1+(interes/100),tiempo)-1)/(interes/100))
    let segundaParte = (gradiente/(interes/100))
    let terceraParte =((Math.pow(1+(interes/100),tiempo)-1)/(interes/100))-tiempo
   
    console.log(primeraParte);
    console.log(segundaParte);
    console.log(terceraParte);
    let valorFuturo = (inicial*primeraParte)-(segundaParte*terceraParte)
    return valorFuturo.toFixed(2)
  }
let inicial = 450
let interes = 2.8
console.log(interes);
let tiempo = 4
let gradiente = 25

let resultado = calcularValorFuturoDecreciente(inicial,interes,tiempo,gradiente)
console.log(resultado);