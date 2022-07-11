/* 디폴트 */
    $("#section1_2").hide();
    $("#section1_1").show();
    $(".add1").eq(0).addClass("on");

/* add버튼 */
    function button_1(){  //   shadow1 버튼 눌렀을 때 버튼과 옵션창 변화 함수 정의
        $(".add1").removeClass("on");
        $(".add1").eq(0).addClass("on");
        $("#section1_2").hide();
        $("#section1_1").show();
        preview();
    };
    function button_2(){  //   shadow2 버튼 눌렀을 때 버튼과 옵션창 변화 함수 정의
        $(".add1").removeClass("on");
        $(".add1").eq(1).addClass("on");
        $("#section1_1").hide();
        $("#section1_2").show();
        preview2();
    };
    $("#add2").click(function(){  //한번 누르면
        if($(".add1").eq(1).is(":disabled")){
            $(".add1").eq(1).removeAttr("disabled");
            button_2();
            code_2();
            hljs.highlightAll();
            preview2();
        }
    });

 //input range & inset(이너 섀도) & code
    var range = false;
    var rangeTarget;
    $("input[type=range]").change(function(){
        var ctr_bar = $(this).val();
        $(this).next().text(ctr_bar + "px"); //next -> 형제 중에 다음 태그
    });
    $("input[type=range]").mousedown(function(){ 
        range = true;
        rangeTarget = $(this);
    });
    $("input[type=range]").mouseup(function(){ 
        range = false;
    });
    $(document).mousemove(function(){
        if(range == true) {
            var rangeValue = rangeTarget.val();
            var rangeId = rangeTarget.attr("class");
            rangeTarget.next().text(rangeValue + "px");
        } 
    });

/* code에 입력 */
    function code_1() {
        if($(".inner").eq(0).is(":checked")){
            // code1.concat("inset;");
            $(".language-css").text("box-shadow: "+$(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+" inset; "+"background-color: "+$(".box_color").val());
        }else{
            // code1.concat(";");
            $(".language-css").text("box-shadow: "+$(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+"; "+"background-color: "+$(".box_color").val());
        };
    };
    function code_2() {
        if($(".inner").eq(0).is(":checked") && $(".inner").eq(1).is(":checked")){
            $(".language-css").text("box-shadow: "+$(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+" inset,"+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()+" inset; "+"background-color: "+$(".box_color").val());
        }else if($(".inner").eq(0).prop("checked") == false && $(".inner").eq(1).is(":checked")){
            $(".language-css").text("box-shadow: "+$(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+", "+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()+" inset; "+"background-color: "+$(".box_color").val());
        }else if ($(".inner").eq(0).is(":checked") && $(".inner").eq(1).prop("checked") == false){
            $(".language-css").text("box-shadow: "+$(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+" inset, "+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()+"; "+"background-color: "+$(".box_color").val());
        }else{
            $(".language-css").text("box-shadow: "+$(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+", "+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()+"; "+"background-color: "+$(".box_color").val());
        };
    };
 
    $("input").change(function(){
        if($(".add1:eq(1)").prop("disabled") == true){
            code_1();
            // $(".language-css").append("background-color: "+$(".box_color").val());
            preview();
        }else{
            code_2();
            preview2()
        };
        hljs.highlightAll();
    });

/* shadow button */
    $(".add1").eq(0).click(function(){
        button_1();
        if($(".add1:eq(1)").prop("disabled") == true){
            code_1();
            preview();
        } else {
            code_2();
            preview2();
        };
        hljs.highlightAll();
    });
    $(".add1").eq(1).click(function(){
        button_2();
        code_2();
        hljs.highlightAll();
        preview2();
    });

//리셋버튼
    $("#reset_0").click(function(){
        if($(".add1").eq(0).hasClass("on")){
            if($(".add1").eq(1).prop("disabled") ==true){
                $("#section1_1").find("input[type=range]").attr("value","0");
                $("#section1_1").find("input[type=range]").val("0")
                $("#section1_1").find(".val").text("0px")
                code_1();
                preview();
            }else{
                $("#section1_1").find("input[type=range]").attr("value","0");
                $("#section1_1").find("input[type=range]").val("0")
                $("#section1_1").find(".val").text("0px")
                code_2();
                preview2();
            };
        }else if($(".add1").eq(1).hasClass("on")){
            $("#section1_2").find("input[type=range]").attr("value","0");
            $("#section1_2").find("input[type=range]").val("0")
            $("#section1_2").find(".val").text("0px")
            code_2();
            preview2();
        }
        hljs.highlightAll();
    });

/* preview에 반영 */
function preview(){
    if($(".inner").eq(0).is(":checked")){
        $("#preview").css("box-shadow", $(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+" inset").css("background-color", $(".box_color").val());;
    }else if($(".inner").eq(0).prop("checked") == false){
        $("#preview").css("box-shadow", $(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()).css("background-color", $(".box_color").val());
    }
};

function preview2(){
    if($(".inner").eq(0).is(":checked") && $(".inner").eq(1).is(":checked")){
        $("#preview").css("box-shadow", $(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+" inset,"+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()+" inset ").css("background-color: ", $(".box_color").val());
    }else if($(".inner").eq(0).prop("checked") == false && $(".inner").eq(1).is(":checked")){
        $("#preview").css("box-shadow", $(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+", "+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()+" inset ").css("background-color", $(".box_color").val());
    }else if ($(".inner").eq(0).is(":checked") && $(".inner").eq(1).prop("checked") == false){
        $("#preview").css("box-shadow", $(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+" inset, "+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()).css("background-color", $(".box_color").val());
    }else{
        $("#preview").css("box-shadow", $(".horizon").eq(0).val()+"px "+$(".vertical").eq(0).val()+"px " + $(".blur1").eq(0).val()+"px "+$(".spread").eq(0).val()+"px "+$(".shadow_color").eq(0).val()+", "+$(".horizon").eq(1).val()+"px "+$(".vertical").eq(1).val()+"px " + $(".blur1").eq(1).val()+"px "+$(".spread").eq(1).val()+"px "+$(".shadow_color").eq(1).val()).css("background-color", $(".box_color").val());
    }
};

// Copy 버튼
    $("#copy").click(function(){
        // 소스표현기능
        var code = $(".language-css").text();
        $("#copytxt").val(code);
        setTimeout(function(){  // 셀렉트를 위해 지연실행
            $("#copytxt").select();
            document.execCommand('Copy');
        },100);
        $("#copy+p").each(function(){
            $(this).fadeIn().delay(1000).fadeOut();
        });
    });
