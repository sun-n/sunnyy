$(".family_list").hide();
$(".family_btn").click(function(){
$(".family_list").slideToggle(100);
})

$(".sub_bg").hide();
$(".menu>li").mouseover(function(){
$(this).children(".sub_bg").stop().slideDown(300);
})
$(".menu>li").mouseout(function(){
$(this).children(".sub_bg").stop().slideUp(300);
})

$(".m_nav").hide();
$(".m_btn").click(function(){
$(".m_nav").fadeIn(300);
$(".m_menu_box").addClass("active")
})
$(".m_close,.m_nav_bg").click(function(){
$(".m_nav").fadeOut(300);
$(".m_menu_box").removeClass("active")
$(".m_sub_bg").hide(); //추가
})

$(".m_sub_bg").hide();
$(".m_menu>li").click(function(){
$(this).children(".m_sub_bg").show();
})
$(".m_sub_close").click(function(){
$(".m_sub_bg").fadeOut(100);
})

/*main slide*/
$(".main_wrap>img:nth-child(1)~").hide();
let i=0;
function slide(){
i=i==6?0:i+1;/*==는 등호연산자, ===는 대위연산자(제일마지막)*/
$(".main_wrap>img").eq(i).show();
$(".main_wrap>img").eq(i).siblings().hide();
}

setInterval(slide,500);//0.5초마다 slide함수 호출

//스크롤 애니메이션
AOS.init();


let lastTop=0;//스크롤 값을 저장할 용도로 씀
$(window).scroll(function(){
let top=$(this).scrollTop();//스크롤이 움직일때마다 바뀜, this는 window

if (top>lastTop){
$(".header").css({'margin-top':'-100px'})//header transtion 속성 작성 0.5s
}else{
$(".header").css({'margin-top':'0px'})
}
lastTop=top;

if(top>50){
 $(".maintitle_top").css({"padding-right":top,"transform":"scale(1.3)","color":'gray'})
 $(".maintitle_bottom").css({"padding-left":top,"transform":"scale(1.3)","color":'gray'})
}else{
 $(".maintitle_top").css({"padding-right":top,"transform":"scale(1)","color":'#000'})
 $(".maintitle_bottom").css({"padding-left":top,"transform":"scale(1)","color":'#000'})

}



})

