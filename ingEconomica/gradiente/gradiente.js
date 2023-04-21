$(document).ready(function(){


    ocultar("#menu");
    
    $("#opcion-aritmetrica").click(function(){
        mostrar("#menu");
        ocultar("#main");

    });
    $("#opcion-geometrica").click(function(){
        mostrar("#menu");
        ocultar("#main");

    });

    $("#atras-menu").click(function(){
        ocultar("#menu")
        mostrar("#main");


    });

    $("#salir").click(function(){
       
        redireccionar("/ingEconomica/index.html")
    });
    
  });

  function redireccionar(url) {
    window.location.href = url;

  }
  function ocultar(id){
    $(id).hide();
  }
  function mostrar(id){
    $(id).show();
  }