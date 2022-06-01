/*global $, alert, console*/

// Nice Scroll

$('html').niceScroll({
        
    cursorcolor: '#da9e31',
    
    cursorwidth: '5px',
        
    cursorborder: 'none'
    
});


// funny text 

$(function () {
    
    'use strict';
    
	$('.p').funnyText({
		speed: 400,
		direction: 'both'
	});
});

// Smooth scroll to div 
    
$('.links li a').click(function () {
    
    'use strict';
        
    $('html, body').animate({
            
        scrollTop: $('#' + $(this).data('value')).offset().top
            
    }, 1000);
        
});

// team slider code!

(function autoSlider() {
    
    'use strict';
   
    $('.slider .active').each(function () {
       
        if (!$(this).is(':last-child')) {
               
            $(this).delay(3000).fadeOut(1000, function () {
                
                $(this).removeClass('active').next().addClass('active').fadeIn();
                
                autoSlider();
                
            });
            
        } else {
            
            $(this).delay(3000).fadeOut(1000, function () {
                
                $(this).removeClass('active');
                
                $('.slider div').eq(0).addClass('active').fadeIn();
                
                autoSlider();
                
            });
        }
        
    });
    
}());