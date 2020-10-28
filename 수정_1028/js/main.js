// main.js

// gnb
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

// lnb(가맹문의, 매장찾기)
$(function(){
    var menu = 0;
    // $('#lnb > .lnb > li > a').removeClass();
    // $('#lnb > .lnb > li > a').eq(menu).addClass('active');

    $('#lnb > .lnb > li > a').click(function(){
        $('#lnb > .lnb > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
})


// 매장찾기
$(function(){
    var menu = 0;
    $('.search > .section > .list > li > a').removeClass();
    $('.search > .section > .list > li > a').eq(menu).addClass('active');

    $('.search > .section > .list > li > a').click(function(){
        $('.search > .section > .list > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
})

$(function() {
    $('#map > .search').draggable();
  });

