$(function(){
    /**
     * navigation
     */
    var timer;
    $(".topnavigation .nav li").hover(function(){
        clearTimeout(timer);
        $(this).find(".subNav").show();
        $(this).siblings("li").find(".subNav").hide();
    },function(){
        timer=setTimeout(function(){
            $(".topnavigation .nav .subNav").hide();
        },500)
    });
    /**
     * homepage banner
     */
    var swiperBanner = new Swiper('.indexBanner .swiper-container', {
      pagination: {
        el: '.indexBanner .swiper-pagination',
        clickable: true,
        }
    });
    if($(".indexBanner").length>0){
        
    }
    $(window).resize(function(){

    });
    if($(window).innerWidth()>=768){
    }
    //手机端首页导航手风琴效果
    $(".index-nav-section .nav-title").click(function(){
        if($(this).next(".navbox").length>0 && $(this).next(".navbox").is(":hidden")){
            $(this).addClass("open");
            $(this).next(".navbox").slideDown();
        }else if($(this).next(".navbox").length>0 && $(this).next(".navbox").is(":visible")){
            $(this).removeClass("open");
            $(this).next(".navbox").slideUp();
        }
        
    });
})