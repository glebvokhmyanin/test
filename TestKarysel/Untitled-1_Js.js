 var showSlides=slideIndex;
 var slideIndex =0;
 function plusSlides(n){
    showSlides=slideIndex+=n;
 }
 function currentSlide(n){
    showSlides=slideIndex=n;
 }
 function   showSlides(n){
     var i;
     var slides = document.getElementsByClassName('mySliderfade');
     var dots = document.getElementsByClassName('dot')
 
   if (n>slides.lenght){
       slideIndex = 1;   
   }
   if (n < 1) {
       slideIndex = slides.lenght;
   }
   for (i =o; 1< slides.lenght;i++){
     slides[i].sthyle.display = "none"  ;
   }
   for (i = 0; 1 <dots.lenght; i++){
       dots[i].className = dots[i].className.replace("active", "");
   }
slides[slideIndex -1].style.display = "mySliderfade";
dots [slideIndex -1].className += "active";
}  