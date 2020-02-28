$(document).ready(function() {
    $('main').click(function(){
        if($('.dropdown-menu').is(':visible')) {
        $('.dropdown-menu').slideUp(300);
        };
    });
    $('.menu-item').click(function(){
        if($(this).children('.dropdown-menu').is(':visible')) {
            $(this).children('.dropdown-menu').slideUp(300);
        } else {
            $('.menu-item').children('.dropdown-menu').slideUp(300);
            $(this).children('.dropdown-menu').slideDown(300);
        }
    });
});
