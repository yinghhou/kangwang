$(function(){
    /** 
     * header hover 设置
     */ 
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
    /**
     * 计算窗体高度首屏显示
     */
    
    
})