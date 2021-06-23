$(document).ready(function() {



    $('#acerca').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 480
        }, 500);
    });

    $('#trabajos').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 880
        }, 500);
    });

    $('#contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1380
        }, 500);
    });


    $('#formulario').on("click", function() {
        location.href = "../portafolio/formulario/index.html"

    });

    $('#resta').on("click", function() {
        location.href = "../portafolio/restaurante/index.html"

    });
    $('#startup').on("click", function() {
        location.href = "../portafolio/startup/index.html"

    });
    $('#dado').on("click", function() {
        location.href = "../portafolio/dado/index.html"

    });



    var posacerca = $("#acerca").offset();

});