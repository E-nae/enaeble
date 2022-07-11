function hover_none (){
    if($("ul:not([class=menu])>li").is(":empty")) {
        $(this).off('mouseenter mouseleave');
        $(this).off("hover");
        $(this).die("hover");
    };
};
// ul>li 등장
$("ul:not([class=menu])>li").css("animation","ani3 ease 1.5s 1");

// 상세보기 팝업창 열기 
$(".thumb").not("#web>li img, #motion>li img").click(function(){
    $("h3+ul+div:eq(0)").fadeIn();
    $(this).next().next().fadeIn();
    $(".exit:eq(0)").fadeIn();
});
$("#graphic>li>p").click(function(){
    $("h3+ul+div:eq(0)").fadeIn();
    $(this).next().fadeIn();
    $(".exit:eq(0)").fadeIn();
});
// 상세보기 팝업창 닫기
$(".exit:eq(0), h3+ul+div:eq(0), details>p").click(function(){
    $("h3+ul+div:eq(0)").fadeOut();
    $("details").fadeOut();
    $(".exit:eq(0)").fadeOut();
});

//ul(메뉴 카테고리) 전환
$("main .menu button").click(function(){
    //버튼 전환
    $("main .menu button").removeClass("on");
    $(this).addClass("on");
});

    //카테고리 작품만 보이기
var graphic = $("main .menu>li:first-child button")
var web = $("main .menu>li:nth-child(2) button")
var motion = $("main .menu>li:last-child button")

$( document ).ready( function() {
    $("#web, #motion").hide();

    $(graphic).click(function(){
        $("#web, #motion").hide();;
        $("#graphic").show();
    });
    $(web).click(function(){
        $("#graphic, #motion").hide();
        $("#web").show();
    });
    $(motion).click(function(){
        $("#graphic, #web").hide();
        $("#motion").show();
    });
});

// 썸네일 작품명 호버 

$("#graphic>li").not(".menu, .nohover").mouseenter(function(){
    $(this).css("background", "rgba(205, 42, 70, 0.8)");
});
$("#graphic>li").not(".menu, .nohover").mouseleave(function(){
    $(this).off();
});

/* footer */
// $(window).scroll(function(){
//     if($(window).scrollTop() >= $(window).height() - 50){
//         $("#footer").fadeIn();
//     }else if($(window).scrollTop() >= $(window).height() -100){
//         $("#footer").fadeOut();
//     }
// });

/* 모달 팝업 호버 */
$("details img").mouseover(function(){
var hover_txt = "<div>원본을 보시려면 사진을 클릭하세요</div>"
$(this).after(hover_txt);
$(this).next().addClass("hover2");
$(this).next().fadeIn();
});
$("details img").mouseout(function(){
$(this).next().fadeOut();
});

// 모달 팝업에서 한번 더 클릭할 때
$("details img").click(function(){
var img_src = $(this).attr("src");
$(".overall img").attr("src", img_src);
$(".overall").fadeIn();
$(".overall img").fadeIn();
// console.log(img_src)
});
$(".overall, .overall>img").click(function(){
$(".overall").fadeOut();
$(".overall img").fadeOut();
});

// 웹 p클릭 a링크 연결
$("#web li>p").click(function(){
    var a_href = $(this).prev('a').attr("href");
    $("#web_href a").attr("href", a_href);
    $("#web_href a").get(0).click();
}); 

// 영상 p클릭 a링크 연결
$("#motion li>p").click(function(){
    var a_href = $(this).prev('a').attr("href");
    $("#motion_href a").attr("href", a_href);
    $("#motion_href a").get(0).click();
}); 
// <video preload="metadata" src="vidlink.mp4#t=0.5"></video>
