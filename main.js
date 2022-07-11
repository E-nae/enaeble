    /* HEADER MENU PAGE NATE */
        var user_height = $("section").height()/2;
        var menu1 = $("section").eq(0).offset().top;
        var menu2 = $("section").eq(1).offset().top;
        var menu3 = $("section").eq(2).offset().top;
        var menu4 = $("section").eq(3).offset().top;
        var menu5 = $("section").eq(4).offset().top;

        // 메뉴
        $("nav span").click(function(){
            $("#menu").fadeToggle();
            $(this).toggleClass("clk");
        });

        // 페이지네이트 링크기능
        $("#menu ul>li").click(function(){
            $("#menu").fadeOut();
            var n = $("#menu ul>li").index(this);
                $("html, body").animate({
                    scrollTop: $("section").eq(n+1).offset().top
                },1300); 
            $("nav span").toggleClass("clk");
            console.log($("section").eq(n+1).offset().top);
        });

    /* footer */
        $(window).scroll(function(){
            if($(window).scrollTop() >= menu5 -250){
                $("#footer").fadeIn();
            }else {
                $("#footer").fadeOut();
            }
        });
    /* 페이지 가로길이 변경값 */
    var jbWidth = $( "#latest" ).width();
        $( "html, body" ).resize( function() {
          $(jbWidth) = $( "#latest>ul>li" ).width();
          $("#latest, #latest>ul>li").css("width", jbWidth+"px");
        } );
    /* LATEST WORK */
        // 전체보기버튼 호버효과
        var view_all = $("main a[title=all_view]");
        $(view_all).mouseover(function(){
            $(view_all).text("View all");
        });
        $(view_all).mouseout(function(){
            $(view_all).text("전체보기");
        });
    /* LATEST WORK 페이지네이트 */
        var page = 0;  // 현재페이지 번호
        var page_li = 1;  // 한 페이지당 작품 개수
        var page_total = Math.ceil($("#latest>ul>li").length / page_li); //총 페이지 수
        var port_width = $("#latest").width(); 

        //페이지 네이트 자동생성
        var spanTag = "";
        for(var i=1; i<=page_total; i++){ 
            if(i==1){
                spanTag += "<span class='on'></span>"
            }  else {
                spanTag += "<span></span>";
            };
        };
        $("#page").html(spanTag) ;

     // 다음,이전버튼
     $(".btn1").click(function(){
        var n=$(".btn1").index(this);
        if(n==1) {  // 다음버튼
            if(page> -(page_total-1)) page--;
        } else {    // 이전버튼
            if(page!=0) page++;
        }
        $("#page span").removeClass("on");
        $("#page span").eq(page*-1).addClass("on");
        $("#latest>ul").css("margin-left",page * port_width);
    });

    /* 스크롤 다운 안내 */
        $("#scroll_guide").addClass("ani");

        //페이지네이트 기능
        $("#page span").click(function(){
            var n = $("#page span").index(this);
            page = -n;
            $("#latest>ul").css("margin-left", page * port_width+"px");
            $("#page span").removeClass("on");
            $(this).addClass("on");
        });

        //페이지네이트 span 
        $(".btn1").click(function(){
            $("#page span").index(".on");
            $(this).addClass("on");
        });

        // 상세보기 팝업창 열기 
        $("#latest .work_li>img").click(function(){
            $("main .modal").fadeIn();
            $(this).parent().next().fadeIn();
        });

        // 상세보기 팝업창 닫기
        $("#latest details>img, main .modal").click(function(){
            $("details").fadeOut();
            $("main .modal").fadeOut();
        });

    /* ABOUT */
        function skill() {
        for(var i=0; i<$("#skill li").length; i++){
            var txt = $("#skill li:eq("+i+") span:eq(1)").text();
            $("#skill li:eq("+i+") span:eq(1)").width(txt+"%");
        };
    };
    // skill();
        var skill_top = $("#skill").offset().top; 
        skill_top = skill_top - $(window).height() * 0.7; 
        var skill_bottom = skill_top + $(window).height() * 1.7; 
        $(window).scroll(function(){
            var t = $(window).scrollTop();
            if(t > skill_top && t < skill_bottom){
                skill();
            } else {
                $("#skill li span:nth-child(2)").width(0);
        }
    });

    /* CONTACT */
        $("#send_btn").click(function(){
            var chk1 = $("#name").val().length >=2;
            var chk2 = $("#email").val().length >=2;
            var chk3 = $("#phone").val().length >=1;
            var chk4 = $("#message").val().length >=5;
            if(chk1 && chk2 && chk3 && chk4){  
                email();
            } else {
                if(!chk1){
                    $("#name").addClass("alert").focus();
                } else if(!chk2){
                    $("#email").addClass("alert").focus();
                } else if(!chk3){
                    $("#phone").addClass("alert").focus();
                } else if(!chk4){
                    $("#message").addClass("alert").focus();
                };
            };
        });
        function email(){
            var param = {
                name: $("#name").val(),
                email_address: $("#email").val(),
                phone: $("#phone").val(),
                message: $("#message").val()
            };
            $.ajax({
                url: 'fmail_ih.php',
                type: "POST",
                async: true,
                dataType: "json", 
                data: param, 
                success: function(data) {
                    if(data.result == "true") {
                        alert("메일 전송이 완료 되었습니다.")
                    }
                }
            });
        };
        //이름/이메일 체크
            $("#name,#email").keyup(function(){
            var txt = $(this).val().length;
            if(txt>=2){
                $(this).removeClass("alert");
                $(this).next().next().fadeIn();
            };
        });
        //폰번호 체크
        $("#phone").keyup(function(){
            var txt = $(this).val().length;
            if(txt>=1){
                $(this).removeClass("alert");
                $(this).next().fadeIn();
            };
        });
        //메세지 체크
        $("#message").keyup(function(){
            var txt = $(this).val().length;
            if(txt>=5){
                $(this).removeClass("alert");
                $(this).next().next().fadeIn();
            };
        });

    /* up(TOP)버튼 */
        $("#up").click(function(){
            var n = $("#r_menu ul>li").index(this);
            $("html, body").animate({
                scrollTop: 0+"px"
            },1300);
        });

/* ScrollMagic */
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "90%"
        }
    });
    var slides = document.querySelectorAll("section");
 
    for (var i=0; i<slides.length; i++) {
        var scene = new ScrollMagic.Scene({
            triggerElement: slides[i],
    })
    .setPin(slides[i], {pushFollowers: false})
    .addTo(controller);
    }
