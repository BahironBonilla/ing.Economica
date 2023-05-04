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

    const descuento = monto / numeroPeriodos;

    var nuevoCalculoAmortizacion = tablaAmotizacionAleman.insertRow(-1);
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(0);
    nuevaCelda.textContent = 'Numero de Cuota';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
    nuevaCelda.textContent = 'Capital';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
    nuevaCelda.textContent = 'Interes';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
    nuevaCelda.textContent = 'Cuota a pagar';
    var nuevaCelda = nuevoCalculoAmortizacion.insertCell(4);
    nuevaCelda.textContent = 'Capital Residual';

    console.log(periodos);
    for (let i = 1; i <= periodos; i++) {

        var interes = montoInicial - (montoInicial * (1 + (tasaInteres / 100)));
        var cuota = interes + descuento;
        var cuotaPagar = (monto * (tasaInteres / 100)) / (1 - Math.pow(1 + (tasaInteres / 100), -numeroPeriodos));
        var nuevoCalculoAmortizacion = tablaAmotizacionAleman.insertRow(-1);
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(0);
        nuevaCelda.textContent = i;

        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(1);
        var capital = cuotaPagar + interes;
        nuevaCelda.textContent = capital.toFixed(2);

        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(2);
        nuevaCelda.textContent = interes.toFixed(2);

        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(3);
        nuevaCelda.textContent = cuotaPagar.toFixed(2);

        montoInicial = montoInicial - capital;
        var nuevaCelda = nuevoCalculoAmortizacion.insertCell(4);

        nuevaCelda.textContent = montoInicial.toFixed(2);
        /*  var nuevaCelda=nuevoCalculoAmortizacion.insertCell(5);        
          nuevaCelda.textContent= cuota;
          var nuevaCelda=nuevoCalculoAmortizacion.insertCell(6);        
          nuevaCelda.textContent=montoInicial ;*/
    }
})
