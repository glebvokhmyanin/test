$ (document).ready(function(){
/*Фиксируем окно при скроле */
$("#blok").removeClass("defult");

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled)
    if(scrolled>= 90){
        $("#blok").addClass("fixet");
    } else {
        $("#blok").removeClass("fixet");
    }
    }
  });
