let tiempo = document.getElementById("tiempo");
let interes = document.getElementById("interes");
let inicial = document.getElementById("inicial");
let final = document.getElementById("final");
let p = document.getElementById("p");

function validar() {
   
    if (tiempo.value && interes.value && inicial.value && !final.value) {
        p.innerHTML = "Tiempo(n): "+tiempo.value+" | Intereses(i): "+interes.value+" | Monto inicial(P): "+inicial.value+"<br>"+"El monto final de este problema es: $"+calcularValorFuturo(inicial.value, interes.value, tiempo.value);
    }
    if (tiempo.value && interes.value && !inicial.value && final.value) {
        p.innerHTML = "Tiempo(n): "+tiempo.value+" | Intereses(i): "+interes.value+" | Monto final(F): "+final.value+"<br>"+"El monto inicial de este problema es: $"+calcularValorPresente(final.value, interes.value, tiempo.value);
    }
    if (tiempo.value && !interes.value && inicial.value && final.value) {
        p.innerHTML = "Tiempo(n): "+tiempo.value+" | Monto inicial(P): "+inicial.value+" | Monto final(F): "+final.value+"<br>"+"El interes de este problema es: "+calcularInteres(final.value, inicial.value, tiempo.value)+"%";
    }
    if (!tiempo.value && interes.value && inicial.value && final.value) {
        p.innerHTML = " Intereses(i): "+interes.value+" | Monto inicial(P): "+inicial.value+" | Monto final(F): "+final.value+"<br>"+"El tiempo requerido es: "+calcularTiempo(final.value, inicial.value, interes.value)+" meses";
    }
    if (tiempo.value && interes.value && inicial.value && final.value) {
        p.innerHTML = "Tiempo(n): "+tiempo.value+" | Intereses(i): "+interes.value+" | Monto inicial(P): "+inicial.value+"Monto final(F): "+final.value+"<br>No necesitas calcular nada";
    }
    document.getElementById("tiempo").value = null;
    document.getElementById("interes").value = null;
    document.getElementById("inicial").value = null;
    document.getElementById("final").value = null;
}
function calcularValorFuturo(inicial, interes, tiempo) {
    return inicial * (1 + (interes/100) * tiempo);
}
function calcularValorPresente(final, interes, tiempo) {
    return final / (1 + tiempo * (interes/100));
}
function calcularInteres(final, inicial, tiempo) {
  if (tiempo === 0) {
    return 0; 
  }
  if (inicial === 0) {
    return 'Valor inicial no puede ser cero'; 
  }
  const tasaDeInteresSimple = (1 / tiempo) * ((final / inicial) - 1);
  return tasaDeInteresSimple;
}
function calcularTiempo(final, inicial, interes) {
    return 1 / (interes/100) * ((final / inicial) - 1);
}