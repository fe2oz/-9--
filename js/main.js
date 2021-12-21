



$(function(){

    $("#bottom_menu > li").mouseover(function(){
        $(".court_show").stop().slideDown("fast");
        $("#backg2").stop().slideDown("fast");
    }).mouseout(function(){
        $(".court_show").stop().slideUp("fast");
        $("#backg2").stop().slideUp("fast");
    })

    $("#next").click(function(){
        $("#slide_box").stop().animate({marginLeft:-685.41}, function(){
            $("#slide_box li:first").appendTo("#slide_box");
            $("#slide_box").css({marginLeft:0})
        })
    })

    $("#prev").click(function(){
        $("#slide_box").stop().animate({marginLeft:0}, function(){
            $("#slide_box li:last").prependTo("#slide_box");
            $("#slide_box").css({marginLeft:-685.41});
        })
    })

    $("#change_court_image_play").click(function(){
        $(this).attr("src", "img/211876_play_icon.png");
    })
})

function slide(){
    $("#slide_box").stop().animate({marginLeft:-685.41}, function(){
        $("#slide_box li:first").appendTo("#slide_box");
        $("#slide_box").css({marginLeft:0});
    })
}

setInterval(slide, 5000);


function slideTwo(){
    $("#slide2_box").stop().animate({marginLeft:-265.11}, function(){
        $("#slide2_box li:first").appendTo("#slide2_box");
        $("#slide2_box").css({marginLeft:0})
    })
}

setInterval(slideTwo, 5000);
