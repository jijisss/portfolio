//스크립트 위로 튕기는 이벤트 제거
$(document).on('click', 'a[href="#"]', function(e){
   e.preventDefault(); 
});







//탭메뉴
$(function(){
    $('.introduce .roomInfo .tab li a').on('click', function(){
        var num = $('.introduce .roomInfo .tab li a').index($(this));
        $('.introduce .roomInfo .tabBox').removeClass('on');
        $('.introduce .roomInfo .tabBox:eq('+ num +')').addClass('on');
    });
});









