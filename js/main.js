$(function(){
    // 2단계 메뉴 안보임(초기화)
    $('.depth2').hide();

    $('.depth1 li').hover(
        function(){
            // 마우스 오버
            $(this)
            .find('.depth2').slideDown(200);
        },
        function(){
            // 마우스 아웃
            $(this)
            .find('.depth2').slideUp(20);
        }
    );
})

$(function(){
    var img_num=0;
    var img_width=100;
    var duration=3000;
    //img_width*img_num
  
    var play_slider=setInterval(function(){
        if(img_num>=3){ img_num=0;}
        $('.sliders').css('margin-left',-(img_width*img_num)+'%');
        img_num++;
    },duration);
})