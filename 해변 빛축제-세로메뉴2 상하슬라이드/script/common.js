//menu
$(document).ready(function () {
    $(".menu > ul > li").hover(
        function () {
            $(this).find(".submenu").stop().slideDown(200);
        },
        function () {
            $(this).find(".submenu").stop().slideUp(200);
        }
    );
});

//slide
$(document).ready(function () {
    function slider() {
        var num = 0;
        var result;
        setInterval(function () {
            result = num * -350;
            num++;
            console.log(num);
            if (num == 3) {
                num = 0;
            }
            console.log(num);
            $(".slider").stop().animate({
                top : result + 'px'
            });
        }, 1000);
    }
    slider();
});

