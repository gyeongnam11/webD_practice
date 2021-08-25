//menu
//$(document).ready(function(){
//    $(".menu>ul>li").mouseover(function(){
//        $(".menu>ul>li>ul").stop().slideDown(200);
//    });
//    $(".menu>ul>li").mouseout(function(){
//        $(".menu>ul>li>ul").stop().slideUp(200);
//    });
//});

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
        var num=0;
        setInterval(function(){
            if(num==3){
                num=0;
            }
            $('.slider p').hide();
            $('.slider p').eq(-num).fadeOut();
            $('.slider p').eq(-num).fadeIn();
            console.log(num);
            num++;
        },1000);
    }
    slider();
});

$(document).ready(function(){
    var tabBtn = $(".tab_btn>ul>li");
    var tabCon = $(".tab_con>div");
    
    tabCon.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault();
        
        var target = $(this);
        var index = target.index();
        
        tabCon.css("display","none");
        tabCon.eq(index).css("display","block");
    })
});

$(document).ready(function(){
    $(".tab_con li:first").click(function(){
        $(".layer").show();
        $(".layer_bg").show();
    });
    $(".close_btn").click(function(){
        $(".layer").hide();
        $(".layer_bg").hide();
    });
});