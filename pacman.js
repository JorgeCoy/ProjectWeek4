var pos = 0;
var movEjeX = 0;
var imagPacma = 0;
let anchoPagi = window.innerWidth;
const arrImagPac = [
    ['./images/PacMan1.png','./images/PacMan2.png'],
    ['./images/PacMan3.png','./images/PacMan4.png'],
]


function mover(){
    let img = document.getElementById('PacMan');
    let anchoimg = img.width;
    imagPacma = (imagPacma + 1) % 2;
    movEjeX = chekLimPagi(movEjeX, anchoimg , pos, anchoPagi);
    img.src = arrImagPac[movEjeX][imagPacma];
    if(movEjeX){
        pos -= 20;   
    }else{
        pos += 20;   
    }
    img.style.left = pos + 'px';
}

setInterval(mover, 300);

function chekLimPagi(movEjeX, anchoimg , pos, anchoPagi){
    if(movEjeX == 0 && pos + anchoimg > anchoPagi){
        movEjeX = 1;
       }
    if(movEjeX == 1 && pos <0){
        movEjeX = 0;
       }
    return movEjeX;
}

