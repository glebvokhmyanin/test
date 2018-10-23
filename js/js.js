$(document).ready(function(){
$("#blok").removeClass("defult");

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled)
    if(scrolled>= 5){
        $("#blok").addClass("fixet");
    } else {
        $("#blok").removeClass("fixet");
    }
    }
  });
