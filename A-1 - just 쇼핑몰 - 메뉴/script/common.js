//menu
$(document).ready(function(){
    
    $(".menu > ul > li").mouseover(function (){
        $(".menu > ul > li > ul").stop().slideDown(200);
    });
    $(".menu > ul > li").mouseout(function (){
        $(".menu >ul> li > ul").stop().slideUp(200);
    });
});

//slide
$(document).ready(function(){
    function slider(){
        var num =0;
        var result;
        setInterval (function(){
            result = num * -300;
            num++;
            console .log(num);
            if(num==3){
                num=0;
            }
            console .log(num);
            $(".slider").stop().animate({
                top : result + 'px'
            });
        },1000);
    }
    slider();
});













