$(function() {

    var globals = {};
    globals.addressText = 'Aruna Dinakara,<br>#31, "Skanda",<br>1st A Cross, Silver Oak Street,<br>JP Nagar 7th Phase,<br>Bangalore-560078';

    $('a[title]').tooltip();

    $('div.contents-div').each(function(){
         $(this).hide();
        if($(this).attr('id') === 'homePage') {
            $(this).show();
        }
    });


    $('.main-nav-bar li>a').on( 'click', function(e) {
        e.preventDefault();
        var id = $(this).attr('data-related');
        $('div.contents-div').each(function(){
            $(this).hide();
            if($(this).attr('id') === id) {
                $(this).show();
            }
        });
    });

    $('.main-nav-bar li').on( 'click', function(e) {
        e.preventDefault();
        $('.main-nav-bar li').each(function(){
            $(this).removeClass('active');
        })
        $(this).addClass('active');

    });

    /*function typeAddressInfo(){
        var dest = $('#addressInfo');
        if (dest)
        {
            var text = '';
            if(globals.addressText[globals.currentChar-1] === '<'){
                text = globals.addressText.substr(0, globals.currentChar+3);
                globals.currentChar += 4;
            }
            else{
                text = globals.addressText.substr(0, globals.currentChar);
                globals.currentChar++ ;
            }
            dest.html(text);

            if (globals.currentChar <= globals.addressText.length)
            {
                setTimeout(typeAddressInfo, 20);
            }
        }
    }


    $('body').on( 'click', '#contactsLink', function(e) {
        globals.currentChar = 1;
        typeAddressInfo();
    });*/

});
