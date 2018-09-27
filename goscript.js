function Slideres(width_li,margin_right_li,col_view_img){
    var step=width_l+margin_right_li,
        slider_box_with=col_view_img*step-margin_right_li,
        $col_img=$("#slider_box>ul>li").length,
        col_main_left=0,
        max_col_main_left=$col_img*step;
    $("#slider_box").width(slider_box_with);
    $("#slider_box>ul>li").width(width_li).css("margin-right",margin_right_li);
    $("#left_nav").click(function(){
        if(-col_main_left==max_col_main_left-col_view_img*step){
            col_main_left=0;
        } else{
            col_main_left=col_main_left-step;
        }
        $("#slider_box>ul").css("margin-left",col_main_left+"px");
    });
    $("#right_nav").click(function(){
        if(col_main_left==0){
            col_main_left=-max_col_main_left+col_view_img*step;
        } else{
            col_main_left=col_main_left+step;
        }
        $("#slider_box>ul").css("margin-left",col_main_left+"px");
    });
}

function Slider2(width_li,margin_right_li,col_view_img){
    var step=width_li+margin_right_li,
        slider_box_with=col_view_img*step-margin_right_li,
        $col_img=$("slider_box2>ul>li").length,
        col_main_left=0,
        max_col_main_left=$col_img*step;
    $("#slider_box2").width(slider_box_with);
    $("#slider_box2>ul>li").width(width_li).css("margin-right",margin_right_li);
    $("#left_navig").click(function(){
        if(-col_main_left==max_col_main_left-col_view_img*step){
            col_main_left=0;
        } else{
            col_main_left=col_main_left-step;
        }
        $("#slider_box2>ul").css("margin-left",col_main_left+"px");
    });
    $("#right_navig").click(function(){
        if(col_main_left==0){
            col_main_left=-max_col_main_left+col_view_img*step;
        } else{
            col_main_left=col_main_left+step;
        }
        $("#slider_box2>ul").css("margin-left",col_main_left+"px");
    });
}

$(document).on("ready", function(){
    $(Slideres(750,10,3));
    $(Slider2(150,1,6));
});

 