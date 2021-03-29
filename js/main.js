// navbar background color change on scroll

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll <= 0){
            $('.fixed-top').css('background', 'rgba(255, 255, 255, 0.8)');
            $('.icon-box').removeClass('mt--3');
            $('.icon-box').addClass('mt-3');
            $('.icon-box').css('opacity','0');
        } else{
            $('.fixed-top').css('background', 'white');
            $('.icon-box').addClass('mt--3');
            $('.icon-box').removeClass('mt-3');
            $('.icon-box').css('opacity','1');
        }
        
    });