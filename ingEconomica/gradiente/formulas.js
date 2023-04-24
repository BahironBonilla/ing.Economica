let anualidadUno = 2500000;
let tasaDeInteres = 3;
let interes = tasaDeInteres / 100;
let periodos = 18;
let gradiente = 10000;

console.log(
  calcularValorPresenteCreciente(anualidadUno, interes, periodos, gradiente)
);
// console.log(
//   calcularValorPresenteDecreciente(anualidadUno, interes, periodos, gradiente)
// );

// console.log(calcularCuotaCreciente(anualidadUno, gradiente, periodos));
// console.log(calcularCuotaDecreciente(anualidadUno, gradiente, periodos));
// console.log(
// calcularValorPresenteInfinitoCreciente()

// );
// console.log(
// calcularValorPresenteInfinitoDecreciente()

// );



/*
!Aritmetrica  
*/

function calcularValorPresenteCreciente(
  anualidadUno,
  interes,
  periodos,
  gradiente
) {
  c =
    anualidadUno * ((1 - Math.pow(1 + interes, -periodos)) / interes) +
    (gradiente / interes) *
      ((1 - Math.pow(1 + interes, -periodos)) / interes -
        periodos / Math.pow(1 + interes, periodos));
        console.log(c);



  return c;
}
function calcularValorPresenteDecreciente(
  anualidadUno,
  interes,
  periodos,
  gradiente
) {
  c =
    anualidadUno * ((1 - Math.pow(1 + interes, -periodos)) / interes) -
    (gradiente / interes) *
      ((1 - Math.pow(1 + interes, -periodos)) / interes -
        periodos / Math.pow(1 + interes, periodos));
  return c;
}
function calcularCuotaCreciente(anualidadUno, gradiente, periodos) {
  rk = anualidadUno + gradiente * (periodos - 1);
  return rk;
}

function calcularCuotaDecreciente(anualidadUno, gradiente, periodos) {
  rk = anualidadUno - gradiente * (periodos - 1);
  return rk;
}

function calcularValorPresenteInfinitoCreciente(
  anualidadUno,
  interes,
  gradiente
) {
  g = anualidadUno / interes + gradiente / Math.pow(interes, 2);
  return g;
}
function calcularValorPresenteInfinitoDecreciente(
  anualidadUno,
  interes,
  gradiente
) {
  g = anualidadUno / interes - gradiente / Math.pow(interes, 2);
  return g;
}


