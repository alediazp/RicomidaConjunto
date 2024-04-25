$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

$(function () {
    $("#enviarCorreo").tooltip();
    $("#agregaFavoritos").tooltip();
});


$('.card-title').on('click', function (event) {
    event.preventDefault();
    $('.card-img-top, .card-text').toggle()
})