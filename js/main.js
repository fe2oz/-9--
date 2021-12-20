



$(function(){

    $("#bottom_menu > li").mouseover(function(){
        $(".court_show").stop().slideDown("fast");
        $("#backg2").stop().slideDown("fast");
    }).mouseout(function(){
        $(".court_show").stop().slideUp("fast");
        $("#backg2").stop().slideUp("fast");
    })
})

