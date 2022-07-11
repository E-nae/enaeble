if($(window).width() <= 500){
    $("div").width(100+"%").height(10+"px")
    setTimeout(function(){ 
        $("a").addClass("hover2")
        $("div").width(100+"%").height(100+"%");
    },1000);   
};

if($(window).width() >= 500){
    $("div").addClass("middle")
    setTimeout(function(){ 
        $("a").addClass("hover1")
        $("div").addClass("big");
    },1000); 
};
