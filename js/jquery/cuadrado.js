$(document).ready(function(){
    $("#btnleft").click(function(){
        $("#cuadrado").animate({
            height: '-=150px', 
            left: '-=500px',
            opacity: '0.7',
            top: '0px',
            width: '-=150px'
        }, 1500);
    });
    $("#btnright").click(function(){
        $("#cuadrado").animate({
            height: '+=100px', 
            left: '+=500px',
            opacity: '0.7',
            top: '0px',
            width: '+=100px'
        }, 1500);
    });
});