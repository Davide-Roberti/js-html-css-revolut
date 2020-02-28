$(document).ready(function() {
    // PRIMA PARTE SENZA class question
    // $('h3').click(function() {
    //     $(this).next('p').slideToggle();
    // });
    // Seconda parte con class question
    $('.question').click(function(){

        if($(this).children('p').is(':visible')) {
            $(this).children('p').slideToggle(500);

            $('.question').children('h3').removeClass('ruota');
        } else {
            $('.question').children('p').slideUp(500);
            $(this).children('p').slideToggle(500);

            $(this).children('h3').addClass('ruota');
        }

    });





});
