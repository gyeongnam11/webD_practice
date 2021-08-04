//$(document).ready(function () {

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

    tabCon.hide().eq(0).show(); // eq : 인덱스 검색

    tabBtn.click(function (e) {
        e.preventDefault(); //태그의 고유 동작을 중단
        var target = $(this);
        var index = target.index();
        //        alert(index);
        tabBtn.removeClass("actived_tab");
        target.addClass("actived_tab");
        tabCon.css("display", "none");
        tabCon.eq(index).css("display", "block");
    })
});






//popup
//$(document).ready(function () {

    $(".notice li:first").click(function () {
        $(".layer").show();
        $(".layer-bg").show();
       
    });

    $(".close-btn").click(function () {
        $(".layer").hide();
        $(".layer-bg").hide();
        
    });
});