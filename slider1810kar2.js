var width = 600;
var count = 1;
var carouseler = document.getElementById('carouseler');
var list = carouseler.querySelector('ul');
var ListElements = carouseler.querySelectorAll('li');
var position = 0;
var lis =document.getElementsByTagName('li');
/* Описываем как будет происходить перебор списка из картинок */
for ( var i=0; i<lis.length; i++){
    lis[i].style.position = 'relative';
    /*Задаем промежуток для картинок */
    var span = document.createElement('span');
    span.style.cssText = ' position: absolute;left:0;top:0;';
    span.innerHTML = 1;
    /*Задаем промежуток для картинок чтобы их не было видно */
    lis [1].appendChild(span);
}
/*Смещение картинок */
/*CМЕЩЕНИЕ ПОЗИЦИИ 1задали ширину отступа 2 смещаем картинку на определенное кол пикс*/
var prev = 0;
console.log(carouseler)
carouseler.querySelector('.prev').onclick = function(){
    console.log('asdasdasd')
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px'
};
/* Проописываем движение картинки принажатиии кнопки в обратную сторону. из позиции мы  отнимаем -штрину ум число*/

carouseler.querySelector('.next').onclick = function(){
    position = Math.max(position - width * count, -width * (ListElements.length - count));
    list.style.marginLeft =  position + 'px';
};