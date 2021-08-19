//menu
$(document).ready(function(){
    $(".menu>ul>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".menu>ul>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
});


//slide
$(document).ready(function(){
    function slider(){
        var num =0;
        var result;
        setInterval (function(){
            result = num * -1200;
            num++;
            console .log(num);
            console .log(result);
            if(num==3){
                num=0;
            }
            console .log(num);
            $(".slider").stop().animate({
                left : result + 'px'
            });
        },1000);
    }
    slider();
});


//tab
$(document).ready(function () {
    var tabBtn = $(".tab_btn > ul > li");
    var tabCon = $(".tab_con > div");

    tabCon.hide().eq(0).show(); 

    tabBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabCon.css("display", "none");
        tabCon.eq(index).css("display", "block");
    })
});
//popup
$(document).ready(function () {

    $(".tab_con .contents li:first").click(function () {
        $(".layer").show();
        $(".layer-bg").show();
       
    });

    $(".close-btn").click(function () {
        $(".layer").hide();
        $(".layer-bg").hide();
        
    });
});




























