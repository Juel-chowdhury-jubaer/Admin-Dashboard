$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
    $('.mybtn1').click(function(){
        $('.more-less1').toggleClass('fa-plus fa-minus');
    });
    $('.mybtn2').click(function(){
        $('.more-less2').toggleClass('fa-plus fa-minus').slideDown(3000);
    });
    $('.mybtn3').click(function(){
        $('.more-less3').toggleClass('fa-plus fa-minus').slideDown(3000);
    });
    $('.mybtn4').click(function(){
        $('.more-less4').toggleClass('fa-plus fa-minus').slideDown(3000);
    });
    
    
    
});
//for Accordion plus minus
    