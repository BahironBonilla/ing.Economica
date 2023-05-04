const form = document.getElementById("formularioAleman");
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

    const descuento = monto / numeroPeriodos;

    var nuevoCalculoAmortizacion = tablaAmotizacionAleman.insertRow(-1);
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(0);
    nuevaCelda.textContent = 'Numero de Cuota';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
    nuevaCelda.textContent = 'Monto Inicial';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
    nuevaCelda.textContent = 'Monto Final';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
    nuevaCelda.textContent = 'Capital';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(4);
    nuevaCelda.textContent = 'Interes';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(5);
    nuevaCelda.textContent = 'Cuota a Pagar';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(6);
    nuevaCelda.textContent = 'Total';

    console.log(periodos);
    for (i = 1; i <= periodos; i++) {
        var interes = (montoInicial * (tasaInteres / 100));
        var cuota = interes + descuento;

        var nuevoCalculoAmortizacion = tablaAmotizacionAleman.insertRow(-1);
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(0);
        nuevaCelda.textContent = i;
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
        nuevaCelda.textContent = montoInicial.toFixed(2);
        montoInicial = montoInicial - descuento;
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
        nuevaCelda.textContent = montoInicial.toFixed(2);
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
        nuevaCelda.textContent = descuento * -1;
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(4);
        nuevaCelda.textContent = interes.toFixed(2);
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(5);
        nuevaCelda.textContent = cuota.toFixed(2);
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(6);
        nuevaCelda.textContent = montoInicial.toFixed(2);
    }
})