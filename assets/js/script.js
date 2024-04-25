
//Requerimiento 2 Tooltip.
$(function () {
    $("#enviarCorreo").tooltip();
    $("#agregaFavoritos").tooltip();
});



//Requerimiento 3 Evento. Generar alert al hacer click sobre boton.
$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});



//Requerimiento 4 Selectores de etiqueta. Cambio de color de texto al hacer doble click sobre texto.
$(document).ready(function () {
    var toggle = true;
    $("section h3").on({
        dblclick: function () {
            if (toggle) {

                
                $(this).css("color", "red");
                toggle = false;
            } else {

                
                $(this).css("color", "black");
                toggle = true;
            }
        }
    });
});

//Requerimiento 5 Selectores de clase. Aparece y desaparece contenido de tarjetas al hacer click sobre titulos.
$('.card-title').on('click', function (event) {
    event.preventDefault();
    $('.card-img-top, .card-text').toggle()
})