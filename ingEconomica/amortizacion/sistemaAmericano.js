const form = document.getElementById("formularioFrances");
var datosFormulario
var tablaAmotizacionAleman = document.getElementById("calculoAmortizacionTable");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    tablaAmotizacionAleman.innerHTML = "";
    var formularioData = new FormData(form);
    var periodos = parseInt(formularioData.get("periodos"));
    var montoInicial = parseInt(formularioData.get("monto"));
    var tasaInteres = parseInt(formularioData.get("tasaInteres"));

    const numeroPeriodos = periodos;
    const monto = montoInicial;

    var nuevoCalculoAmortizacion = tablaAmotizacionAleman.insertRow(-1);
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(0);
    nuevaCelda.textContent = 'Numero de Cuota';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
    nuevaCelda.textContent = 'Interes';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
    nuevaCelda.textContent = 'Cuota a Pagar';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
    nuevaCelda.textContent = 'Capital Residual';

    console.log(periodos);
    for (i = 1; i <= periodos; i++) {

        var interes = (montoInicial * (tasaInteres / 100));
        var cuotaPagar = interes;
        var nuevoCalculoAmortizacion = tablaAmotizacionAleman.insertRow(-1);
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(0);
        nuevaCelda.textContent = i;

        if (i < numeroPeriodos) {
            var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
            nuevaCelda.textContent = interes.toFixed(2);
            var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
            nuevaCelda.textContent = cuotaPagar.toFixed(2);
            var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
            nuevaCelda.textContent = montoInicial.toFixed(2);
        } else {
            var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
            nuevaCelda.textContent = interes.toFixed(2);

            var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
            cuotaPagar = cuotaPagar + montoInicial;
            nuevaCelda.textContent = cuotaPagar.toFixed(2);

            var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
            montoInicial = 0;
            nuevaCelda.textContent = montoInicial.toFixed(2);
        }
        /*  var nuevaCelda=nuevoCalculoAmortizacion.insertCell(5);        
          nuevaCelda.textContent= cuota;
          var nuevaCelda=nuevoCalculoAmortizacion.insertCell(6);        
          nuevaCelda.textContent=montoInicial ;*/
    }
})