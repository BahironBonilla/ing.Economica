document.getElementById("resultado").addEventListener("click", function() {
  var ingresos = parseInt(document.getElementsByName("ingreso1")[0].value);
  var egresos = parseInt(document.getElementsByName("egreso1")[0].value);

  if (isNaN(ingresos) && isNaN(egresos)) {
    calcular();
  } else {
    alert("¡Ya valió!");
  }
});

function calcular() {
  var periodos = parseInt(document.getElementsByName("periodos")[0].value);
  var presente = parseFloat(document.getElementsByName("presente")[0].value);
  var tasa = parseFloat(document.getElementsByName("tasa")[0].value) / 100;
  var futuro = parseFloat(document.getElementsByName("futuro")[0].value);

  var valorInteresCompuesto = futuro - presente;

  var valorFuturo = presente * Math.pow(1 + tasa, periodos);
  var valorPresente = futuro / Math.pow(1 + tasa, periodos);
  var tiempo = Math.log(futuro / presente) / Math.log(1 + tasa);
  var tasaI = Math.pow(futuro / presente, 1 / periodos);
  tasaI = (tasaI - 1) * 100;

  if (!isNaN(valorFuturo)) {
    document.getElementsByName("futuro")[0].value = Math.round(valorFuturo);
  }
  if (!isNaN(valorPresente)) {
    document.getElementsByName("presente")[0].value = Math.round(valorPresente);
  }
  if (!isNaN(tiempo)) {
    document.getElementsByName("periodos")[0].value = Math.round(tiempo);
  }
  if (!isNaN(tasaI)) {
    document.getElementsByName("tasa")[0].value = Math.round(tasaI);
  }
  /*
  alert("Valor del interés compuesto: " + Math.round(valorInteresCompuesto));
  alert("Valor futuro: " + Math.round(valorFuturo));
  alert("Valor presente: " + Math.round(valorPresente));
  alert("Tiempo: " + Math.round(tiempo));
  alert("Tasa: "+ Math.round(tasaI));*/
}
