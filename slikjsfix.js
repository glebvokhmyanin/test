jQuery(document).ready(function(){
    jQuery("#blok").removeClass("defult");

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled)
    if(scrolled>= 50){
        jQuery("#blok").addClass("fixet");
    } else {
        jQuery("#blok").removeClass("fixet");
    }
    }
  });
