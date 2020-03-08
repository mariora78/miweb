/* Full Screen for Top Banner */
 
$(document).ready(fullSize);
$(window).resize(fullSize);

function fullSize(){
  var winHeight = $(window).height();
  var winWidth = $(window).width();

  $('#top-banner').height(winHeight);
  $('#site-nav').height(winHeight);
  $('.nav-container').height(winHeight);
  
};

/* Mobile Menu */
	$('.btn-menu').click(function(){
        $('#site-content, #site-nav').toggleClass('menu-on');

         var menuWidth = $('.site-nav').width();
        // $('.nav-overlay').fadeToggle(300);
        if ( $('.btn-menu').hasClass('menu-on') ) {
           
            $("#site-content").stop().animate({right: menuWidth + 'px'}, 600, 'easeInOutQuart');                  
        } else {
            $("#site-content").stop().animate({right: '0'}, 600, 'easeInOutQuart');
        }
	});


/* Project Slider */

$(function() {

    var slideNum = $('.handle .slide').length;
    console.log(slideNum);

    new Dragdealer('project-show', {
        steps: slideNum,
        speed: 0.3,
        loose: true,
        requestAnimationFrame: true,
        callback: function(x) {
        // Get Current Project #
            if (x >= 0) {
                var currentProject = ('0' + this.getStep());
                var currentProjectBG = ('n-0' + this.getStep());
                var textCurrent = $('.current-project').text(currentProject.substr(0, 2));
                var textCurrentBG = $('.info').text(currentProjectBG.substr(0, 4));
                var classText = $(textCurrent).text();
                var classTextBG = $(textCurrentBG).text();

                $('#project-deck').attr('class', ''+ classTextBG +'');

                $(textCurrent).text();
                
                

                

            } 

        } 
    });

});

/* Pagination */

/** Total Projects */

$(function(){
    var slidePag = $('.handle .slide').length;
    function numPag(){
        if(slidePag < 10){
            return '0' + slidePag
        } else {
            return slidePag
        }
    }
    
    console.log(numPag());
    $('.total-projects').text(numPag())
});

/* Text Color according to Background 


var rgb = ['0', '0', '0'];
    
$(function(){
    
    var c = 'rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')';
    
    //http://www.w3.org/TR/AERT#color-contrast
    
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
    
    //console.log(o);
    
    if(o > 125) {
        $('#project-info').css('color', 'black');
    }else{ 
        $('#project-info').css('color', 'white');
    }

    $('#project-deck').css('background-color', c);
    
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);

    rgb[0] = r;
    rgb[1] = g;
    rgb[2] = b;                
  

}); */