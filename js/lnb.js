// lnb
$(function(){
    var menu = 0;
    $('#lnb > .lnb > li > a').removeClass();
    $('#lnb > .lnb > li > a').eq(menu).addClass('active');

    $('#lnb > .lnb > li > a').click(function(){
        $('#lnb > .lnb > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
})