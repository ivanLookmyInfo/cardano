/**
 * Created by user on 31.05.2015.
 */
'use strict';
var Cardano = (function($){
    return {
        clearInput: function(selector){
            this.
            addEvent('focus',selector,function(){
                var input = $(this);
                if(input.val() == input.attr('data-default')){
                    input.val('');
                }
            }).
            addEvent('blur',selector,function(){
                var input = $(this);
                if(input.val() == ''){
                    input.val(input.attr('data-default'));
                }
            });

            return this;

        },
        addEvent: function(event,selector,func){
            var fn = func || function(){console.log('cardano.js')};
            if(typeof selector == 'string'){
                $(document).on(event,selector,fn);
            } else{
                $(document).on(event,function(){

                })
            }
            return this;
        }
    };

})(jQuery);

Cardano
    .clearInput('.input-form')
    .addEvent('submit','#registrationForm',function(e){
        var mail = $('#emailAddress'),
            firstName = $('#firstName'),
            lastName = $('#lastName'),
            flag = false;

        if(!isValidEmail(mail.val(),true)){
            printError('email address contains invalid characters');
            flag = true;
        }
        if(firstName.val() == 'First Name' || firstName.val() == ''){
            printError('First Name contains invalid characters');
            flag = true;
        }
        if(lastName.val() == 'Last Name' || lastName.val() == ''){
            printError('Last Name contains invalid characters');
            flag = true;
        }

        if(flag){
            e.preventDefault();
            return false;
        }
        //$(this).subarray();

        e.preventDefault();

        $(this).find('.row').hide();
        $('.success-message-form').show();
    })
    .addEvent('hover',document,function(){
        
    });


function isValidEmail (email, strict){
    if ( !strict ) email = email.replace(/^\s+|\s+$/g, '');
    return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(email);
}

function printError(mes){
    $('#error-message').text(mes);
}