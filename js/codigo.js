
//jQuery
 /* $(document).ready(

    function(){
        $("#btnAceptar").click(

            function(){
                $("div").animate({left: '250px'});
               
                var msg = $("#txtMensaje").val();
                console.log(msg);
                $("#pMensaje").text("Ejemplo loco");
            }
        );

    }); */

$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        }
      }
    });
  });