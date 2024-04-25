$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

$(function () {
    $("#enviarCorreo").tooltip();
    $("#agregaFavoritos").tooltip();
});


$(document).ready(function () {
    $(".container .recetas").click(function () {
        $(this).parent()
            .find(".recetas").toggle();
    });
});