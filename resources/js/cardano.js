/**
 * Created by user on 31.05.2015.
 */
'use strict';
var Cardano = (function($){
    return {
        getObj: function(selector){
            return $(selector);
        },
        isValidEmail : function(email, strict){
            if ( !strict ) email = email.replace(/^\s+|\s+$/g, '');
            return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(email);
        },
        printError: function(mes){
            $('#error-message').text(mes);
        },
        centerLogo: $('.big-logo'),
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
                $(document).on(event,fn);
            }
            return this;
        }
    };

})(jQuery);

Cardano
    .clearInput('.input-form')
    .addEvent('submit','#registrationForm',function(e){
        var mail = Cardano.getObj('#emailAddress'),
            firstName = Cardano.getObj('#firstName'),
            lastName = Cardano.getObj('#lastName'),
            flag = false;

        if(!Cardano.isValidEmail(mail.val(),true)){
            Cardano.printError('email address contains invalid characters');
            flag = true;
        }
        if(firstName.val() == 'First Name' || firstName.val() == ''){
            Cardano.printError('First Name contains invalid characters');
            flag = true;
        }
        if(lastName.val() == 'Last Name' || lastName.val() == ''){
            Cardano.printError('Last Name contains invalid characters');
            flag = true;
        }

        if(flag){
            e.preventDefault();
            return false;
        }

        // Send form
        // Cardano.getObj(this).submit();
        // or send ajax and ...

        e.preventDefault();

        // success
        Cardano.getObj(this).find('.row').hide();
        Cardano.getObj('.success-message-form').show();
    });
(function(){
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone"),
        isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if(isiPhone == -1 || isAndroid == -1){
        $('.big-logo').plaxify({"xRange":15,"yRange":15});
        $('.center-image').plaxify({"xRange":5,"yRange":5,"invert":true});
        $.plax.enable();

    }
})();