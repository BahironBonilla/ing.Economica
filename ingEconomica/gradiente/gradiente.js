$(document).ready(function () {
  ocultar("#menuAritmetico");
  ocultar("#menuGeometrico");
  ocultar("#valorPresenteAritmeticoCreciente");

  $("#opcion-aritmetrica").click(function () {
    mostrar("#menuAritmetico");
    ocultar("#main");
  });
  $("#opcion-geometrica").click(function () {
    mostrar("#menuGeometrico");
    ocultar("#main");
  });

  $("#opcionValorPresenteAritmetico").click(function () {
    ocultar("#menuAritmetico");
    mostrar("#valorPresenteAritmeticoCreciente");
  });

  $("#atrasValorPresenteAritmetico").click(function () {
    event.preventDefault();
    mostrar("#menuAritmetico");
    ocultar("#valorPresenteAritmeticoCreciente");
  });
  $("#atras-menuAritmetico").click(function () {
    ocultar("#menuAritmetico");
    mostrar("#main");
  });
  $("#atras-menuGeometrico").click(function () {
    ocultar("#menuGeometrico");
    mostrar("#main");
  });

  $("#salir").click(function () {
    redireccionar("/ingEconomica/index.html");
  });


  $("#calcularValorPresente").click(function () {
    event.preventDefault();
    let validar = validarCampos();
    if (validar == 1) {
      obenetDatosValorPresente();
    }
  });
});

function redireccionar(url) {
  window.location.href = url;
}
function ocultar(id) {
  $(id).hide();
}
function mostrar(id) {
  $(id).show();
}

function obenetDatosValorPresente() {
  let anualidadUno = $("#anualidad").val();
  let tasaDeInteres = $("#interes").val();
  let interes = tasaDeInteres / 100;
  let periodos = $("#numeroFlujos").val();
  let gradiente = $("#gradiente").val();
  let opcion = $("input:radio[name=tipoGradiente]:checked").val();
  let resultado;
  if (opcion == "creciente") {
    resultado = calcularValorPresenteCreciente(
      anualidadUno,
      interes,
      periodos,
      gradiente
    );
  } else if (opcion == "decreciente") {
    resultado = calcularValorPresenteDecreciente(
      anualidadUno,
      interes,
      periodos,
      gradiente
    );
  } else {
    resultado = 0;
  }

  $("#valorPresenteAritmetico").val(
    "$" + Math.trunc(resultado).toLocaleString(["ban", "id"])
  );
}

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
  console.log(c);
  return c;
}

function validarCampos() {
  let anualidadUno = $("#anualidad").val();
  let tasaDeInteres = $("#interes").val();
  let interes = tasaDeInteres / 100;
  let periodos = $("#numeroFlujos").val();
  let gradiente = $("#gradiente").val();
  let opcion = $("input:radio[name=tipoGradiente]:checked").val();

  if (anualidadUno <= 0) {
    alert("Digite una anualidad mayor a 0");
    $("#anualidad").focus()
  } else if (tasaDeInteres <= 0) {
    alert("Digite una tasa de interes mayor a 0");
    $("#interes").focus()

  } else if (periodos <= 0) {
    alert("Digite un periodo mayor a 0");
    $("#numeroFlujos").focus()

  } else if (gradiente <= 0) {
    alert("Digite una gradiente mayor a 0");
    $("#gradiente").focus()

  } else {
    return 1;
  }
}
