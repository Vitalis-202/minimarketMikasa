//Expresión para validar un correo electrónico
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    //función click

    $("#btnRegistrar").click(function(){
        //Guardar en variables el valor que tengan las cajas de texto
        //Por medio de los id's
        //Y tener mejor manipulación de dichos valores
        var name = $("#txtNombre").val();
        var email = $("#txtEmail").val();

        // --- Condicionales anidados ----
        //Si nombre está vacío
        //Muestra el mensaje
        //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
        if(name == ""){
            $("#mensaje1").fadeIn("slow");
            return false;
        }
        //en otro caso, el mensaje no se muestra
        else{
            $("#mensaje1").fadeOut();

            //Si correo está vacío y la expresión NO corresponde -test es función de JQuery
            //Muestra el mensaje
            //Con false sale de los if's y espera a que sea pulsado de nuevo el botón de enviar
            if(email == "" || !expr.test(email)){
                $("#mensaje2").fadeIn("slow");
                return false;
            }
            else{
                $("#mensaje2").fadeOut();
                $(".container-producto").fadeIn("slow");
  
            }
        }

    });//click

    $("#btnCalcular").click(function(){
      
      var cantidad = $("#txtCantidad").val();
      var precio = $("#txtPrecio").val();
      var resultado;

      resultado = cantidad*precio*1.19;

      if(cantidad==""){

        $("#mensaje3").fadeIn("slow");
        return false;

      }
      else{

            $("#mensaje3").fadeOut();
            
      
            if(precio==""){

                $("#mensaje4").fadeIn("slow");
                return false;

            }else{

                console.log(resultado);
                $("#mensaje4").fadeOut();
                $("#pResultado").text(resultado);
                $("#btnEnviar").fadeIn("slow");
                
            }

        }
          
  });//click



});//ready