/*global $, alert, console*/



$(function () {
   
    'use strict';
    
    var userError = true,
        
        emailError = true,
        
        msgError = true;
    
    
    $('.username').blur(function () {
       
        if ($(this).val().length < 4) {
            
            $(this).css('border', '1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            
        } else {
            
            $(this).css('border', '1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            
        }
        
    });
    
    
    $('.email').blur(function () {
       
        if ($(this).val() === '') {
            
            $(this).css('border', '1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            
        } else {
            
            $(this).css('border', '1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            
            emailError = false;
            
        }
        
    });
    

    $('.message').blur(function () {
       
        if ($(this).val().length < 10) {
            
            $(this).css('border', '1px solid #F00');
            
            $(this).parent().find('.custom-alert').fadeIn(200);
            
        } else {
            
            $(this).css('border', '1px solid #080');
            
            $(this).parent().find('.custom-alert').fadeOut(200);
            
            msgError = false;
            
        }
        
    });


    // submit 

    $('leaf.form').submit(function (e) {
   
        if (userError === true || emailError === true || msgError === true) {
        
            e.preventDefault();
        }
    
    });
    
});