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