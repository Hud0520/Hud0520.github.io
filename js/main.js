// navbar background color change on scroll

$(window).scroll(function(){
   
    if($(window).scrollTop()>79){
        $(".top").addClass("top-scrolled");
        $("#header").addClass("header-scrolled");
        $('.booking').addClass('mt--3');
        $('.booking').removeClass('mt-3');
    }else{
        $(".top").removeClass("top-scrolled");
        $("#header").removeClass("header-scrolled");

        $('.booking').removeClass('mt--3');
        $('.booking').addClass('mt-3');
    }
})

/*Search*/
$("#show").click(function showSearch(){
    var indexSeach =$(".booking").position().top;// Lấy vị trí của nó cho vui
    var iSearch = $(".booking").height()+0.1*screen.height;
    $("body").animate({scrollTop: iSearch},'slow');
    //Lấy kích thước ô tìm kiếm + 0,1 chiều cao màn hình
});
