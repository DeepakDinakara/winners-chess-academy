$(function() {

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

});
