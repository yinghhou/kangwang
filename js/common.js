$(function(){
     var timer;
    $(".public-nav>li").hover(function(){
        clearTimeout(timer);
        $(this).find(".dropdown-menu").show();
        $(this).siblings("li").find(".dropdown-menu").hide();
    },function(){
        timer=setTimeout(function(){
            $(".public-nav>li .dropdown-menu").hide();
        },500)
    });
})