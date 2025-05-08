$(function(){
  // 서브메뉴 안보이게하기
  $(".g_sub").hide();
  // 서브메뉴 스르륵 내려오기
  $(".h_gnb>li").mouseenter(function(){
      $(this).children(".g_sub").stop().slideDown();
  });
  // 서브메뉴 스르륵 올라가기
  $(".h_gnb>li").mouseleave(function(){
      $(this).children(".g_sub").stop().slideUp();
  });
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
    $('html, body').animate({
    scrollTop: target.offset().top
    }, 500);//움직이는 시간 조정
    return false;
    }
    }
    });
});

$(document).ready(function () {
    //탭버튼 동작 소스
  
  
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show();
  
    //On Click Event
    $("ul.tabs li").click(function () {
  
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
      $(".tab_content").hide();
  
      var activeTab = $(this).find("span").attr("tabs");
      $(activeTab).fadeIn();
      return false;
    });

    $(".sub>li").click(function () {
        var indexNo = $(this).index();
        $("ul.tabs li").removeClass("active");
        $(".tabs li").eq(indexNo).addClass("active");
        $(".tab_content").hide();
        var activeTab2 = $(".tabs li.active").find("span").attr("tabs");
        $(activeTab2).fadeIn();
        return false;
      });
});

$(document).ready(function () {
    //탭버튼 동작 소스
  
  
    $(".tab_content2").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs2 li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content2:first").show();
  
    //On Click Event
    $("ul.tabs2 li").click(function () {
  
      $("ul.tabs2 li").removeClass("active");
      $(this).addClass("active");
      $(".tab_content2").hide();
  
      var activeTab = $(this).find("span").attr("tabs");
      $(activeTab).fadeIn();
      return false;
    });

    $(".sub>li").click(function () {
        var indexNo = $(this).index();
        $("ul.tabs2 li").removeClass("active");
        $(".tabs2 li").eq(indexNo).addClass("active");
        $(".tab_content2").hide();
        var activeTab2 = $(".tabs2 li.active").find("span").attr("tabs");
        $(activeTab2).fadeIn();
        return false;
      });
});

$(function () {
	$(".FAQ>ul>li").click(function () {
		$(this).children(".FAQ_content").slideToggle();
	});
	$(".FAQ>ul>li").click(function () {
		$(this).toggleClass("turn");


	});
});