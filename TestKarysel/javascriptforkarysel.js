var left = 0;
var right = 0;



function sliderLeft () {
    var polosa = document.getElementById('polosa' );
    left = left - 120;
    if (left <-1600) {
        left = 0;
    }
    polosa.style.left = left+ 'px';
}


function sliderRight(){
    var polosa = document.getElementById('polosa');
    right = right+120;
    if (right > 1600) {
        right = 0;
    }
    polosa.style.right =right+'px';
}

document.getElementById('slider-left').onclick=sliderLeft;
document.getElementById('slider-right').onclick=sliderRight;