var canvas = document.getElementById("canvas")

if (canvas.getContext)
    var ctx = canvas.getContext('2d');
else
    canvas.remove();


var main = new Image()
main.src = 'src/sprites/main.png'
main.onload = function(){
    draw.drawImage(main, 50,50, 250,300);
}






    
    
