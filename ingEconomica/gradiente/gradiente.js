$(document).ready(function(){


    $("#menu").hide();
    
    $("#opcion-1").click(function(){
        $("#menu").show();
        $("#main").hide();

    });

    $("#atras-menu").click(function(){
        $("#menu").hide();
        $("#main").show();

    });

    
  });