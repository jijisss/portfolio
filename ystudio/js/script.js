'use strict';

// a 클릭했을때 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//gnb 메뉴 
$(function() {
	$('header .menuOpen').on('click', function(){
		$('.gnb').addClass('on');//선택한 요소에 클래스 속성값을 추가
	});
	$('.gnb .close, section').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
		$('.gnb').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
	});
});

//스크롤 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

//slick.js 이미지 슬라이드 적용
 $(function() {
    $(".visual .slide").slick({ 
        arrows: true, //화살표 사용함
        dots: false, //닷츠 사용안함
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 4000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
		pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
    });
}); 

//fixheader 영역
var scrollValue = 0;
scrollValue = $(document).scrollTop(); 
fixHeader();

$(window).on('scroll resize', function(){
   scrollValue = $(document).scrollTop(); 
   fixHeader();
});

function fixHeader(){
    if(scrollValue > 150) {
        $('header').addClass('on');
    }else {$('header').removeClass('on');}
}