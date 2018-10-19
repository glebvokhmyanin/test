$ (document).ready(function(){
/*Фиксируем окно при скроле */
$("#header").removeClass("defult");

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled)
    if(scrolled>= 90){
        $("#header").addClass("fixet");
    } else {
        $("#header").removeClass("fixet");
    }
    }
  });
