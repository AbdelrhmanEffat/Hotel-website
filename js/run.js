/*global $, alert, console*/

// Scroll 

$(function () {
   
    'use strict';
    
    $('html').niceScroll();
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


// Simple Clock 

/* function showTime() {
    
    'use strict';
    

    var now = new Date(),

        hours = now.getHours(),

        minutes = now.getMinutes(),

        seconds = now.getSeconds();

    if (hours < 10) {
        
        hours = '0' + hours;
       
    }
    
    if (hours < 10) {
        
        minutes = '0' + minutes;
       
    }
    
    if (hours < 10) {
        
        seconds = '0' + seconds;
       
    }
    
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

}

window.onload = function () {
    
    'use strict';
    
    setInterval(showTime, 500);
    
}; */