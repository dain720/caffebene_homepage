$(function(){
    $('#gnb > .depth1 > li').hover(
        function(){
            $('.depth2').stop().show();
        },
        function(){
            $('.depth2').stop().hide();
        }
    )
});