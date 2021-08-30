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

//$(document).ready(function () {
//    function slider() {
//        var num = 0;
//        var result;
//        setInterval(function () {
//            result = num * -350;
//            num++;
//            console.log(num);
//            if (num == 3) {
//                num = 0;
//            }
//            console.log(num);
//            $(".slider").stop().animate({
//                top: result + 'px'
//            });
//        }, 2000);
//    }
//    slider();
//});

$(document).ready(function(){
    function slider(){
        var num = 0;
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

$(document).ready(function () {
    var tabBtn = $(".tab_btn>ul>li");
    var tabCon = $(".tab_con>div");

    tabCon.hide().eq(0).show();
    tabBtn.click(function (e) {
        e.preventDefault

        var target = $(this);
        var index = target.index();

        tabCon.css("display", "none");
        tabCon.eq(index).css("display", "block");
    });
});

$(document).ready(function () {
    $(".tab_con li:first").click(function () {
        $(".layer").show();
        $(".layer_bg").show();
    });
    $(".close_btn").click(function(){
         $(".layer").hide();
        $(".layer_bg").hide();
    });
});
