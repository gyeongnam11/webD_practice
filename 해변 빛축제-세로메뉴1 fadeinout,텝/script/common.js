//menu
$(document).ready(function () {
    $(".menu>ul>li").hover(
        function () {
            $(this).find(".submenu").stop().slideDown(200);
        },
        function () {
            $(this).find(".submenu").stop().slideUp(200);
        }
    );
});

//slide
$(document).ready(function(){
    function slider(){
        var num=0;
        setInterval(function(){
            if(num==3){
                num=0;
            }
            $('.slider p').hide();
            $('.slider p').eq(-num).stop().fadeOut();
            $('.slider p').eq(-num).stop().fadeIn();
            console.log(num);
            num++;
        },2000);
    }
    slider();
});

//popup
$(document).ready(function(){
    $(".tab_con li:first").click(function(){
        $(".layer_bg").show();
        $(".layer").show();
    });
    $(".close_btn").click(function(){
        $(".layer_bg").hide();
        $(".layer").hide();
    });
});
