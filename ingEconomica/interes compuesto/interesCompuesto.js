
console.log("inicio");
function validar() {
  let periodos = document.getElementById("tiempo");
  let tasa =parseFloat( document.getElementById("interes"));
  tasa = tasa / 100;
  let futuro = document.getElementById("final");
  let presente = document.getElementById("inicial");
  let p = document.getElementById("p");
  console.log("Periodos",periodos.value);
  console.log("Tasa",tasa.value);
  console.log("Presente",presente.value);
  console.log("Futuro",futuro.value);
  if (periodos.value && tasa.value && presente.value && !isNaN( futuro.value) ){
    console.log("valor futuro");
    p.innerHTML =
      "Tiempo(n): " +
      periodos.value +
      " meses | Intereses(i): " +
      tasa.value +
      "% | Monto inicial(P): $" +
      presente.value +
      "<br><br>" +
      "El monto final de este problema es: $" +
      calcularValorFuturo(presente.value, tasa.value, periodos.value);
  }
  if (periodos.value && tasa.value && !presente.value && futuro.value) {
    p.innerHTML =
      "Tiempo(n): " +
      periodos.value +
      " meses | Intereses(i): " +
      tasa.value +
      "% | Monto final(F): $" +
      futuro.value +
      "<br><br>" +
      "El monto inicial de este problema es: $" +
      calcularValorPresente(final.value, interes.value, tiempo.value);
  }
  if (periodos.value && !tasa.value && presente.value && futuro.value) {
    p.innerHTML =
      "Tiempo(n): " +
      periodos.value +
      " meses | Monto inicial(P): $" +
      presente.value +
      " | Monto final(F): $" +
      futuro.value +
      "<br><br>" +
      "El interes de este problema es: " +
      calcularInteres(final.value, inicial.value, tiempo.value) * 100 +
      "%";
  }
  if (!periodos.value && tasa.value && presente.value && futuro.value) {
    p.innerHTML =
      " Intereses(i): " +
      tasa.value +
      "% | Monto inicial(P): $" +
      presente.value +
      " | Monto final(F): $" +
      futuro.value +
      "<br><br>" +
      "El tiempo requerido es: " +
      calcularTiempo(final.value, inicial.value, interes.value) +
      " meses";
  }
  if (periodos.value && tasa.value && presente.value && futuro.value) {
    p.innerHTML =
      "Tiempo(n): " +
      periodos.value +
      " meses | Intereses(i): " +
      tasa.value +
      "% | Monto inicial(P): $" +
      presente.value +
      "Monto final(F): $" +
      futuro.value +
      "<br><br>No necesitas calcular nada";
  }

  document.getElementById("tiempo").value = null;
  document.getElementById("interes").value = null;
  document.getElementById("inicial").value = null;
  document.getElementById("final").value = null;
}
function calcularValorFuturo(presente, tasa, periodos) {
  valorFuturo = presente * Math.pow(1 + tasa, periodos);
  console.log(valorFuturo);
  return valorFuturo;
}
function calcularValorPresente(futuro, tasa, periodos) {
  valorPresente = futuro / Math.pow(1 + tasa, periodos);
  return valorPresente;
}
function calcularInteres(futuro, presente, tasa) {
  tasaI = Math.pow(futuro / presente, 1 / periodos);

  return tasaI;
}
function calcularTiempo(futuro, presente, tasa) {
  tiempo = Math.log(futuro / presente) / Math.log(1 + tasa);
  return tiempo;
}
