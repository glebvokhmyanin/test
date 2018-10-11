
document.getElementById('slider-left').onclick =sliderLeft;
var  left = 0;
function  sliderLeft() {
    var polosa= document.getElementById('polosa');
    left = left -128;
    if ( left<-1800){
        
    }
    polosa.style.left = left +'px';


}