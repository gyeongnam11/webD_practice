//menu
$(document).ready(function () {

    $(".menu > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".menu > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

        
});
//tab bt
$(document).ready(function () {
    var tabBtn = $(".tab_btn > ul > li");
    var tabCon = $(".tab_con > div");

    tabCon.hide().eq(0).show(); 

    tabBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        //        alert(index);
        tabBtn.removeClass("actived_tab");
        target.addClass("actived_tab");
        tabCon.css("display", "none");
        tabCon.eq(index).css("display", "block");
    })
});

//slider
$(document).ready(function(){
    function slider(){
        var num = 0;
        var result;
        setInterval(function(){
            result = num * -300;
            num++;
            console .log(num);
            if (num==3){
                num =0;
            }
            console.log(num);
            $(".slider").stop().animate({
                top : result + 'px'
            });
        },1000);
    }
    slider();
});






















