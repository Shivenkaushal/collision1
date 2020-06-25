function colision(moverect,fixrect){
  if (moverect.y-fixrect.y < moverect.height/2+fixrect.height/2 &&
    moverect.y-fixrect.y < moverect.height/2+fixrect.height/2  ){
    moverect.velocityY=moverect.velocityY*(0);
    fixrect.velocityY=fixrect.velocityY*(0);
  }
 
}
function bounce1(moverect1,fiyrect1){
  if (moverect1.y-fiyrect1.y < moverect1.height/2+fiyrect1.height/2 &&
    moverect1.y-fiyrect1.y < moverect1.height/2+fiyrect1.height/2  ){
    moverect1.velocityY=moverect1.velocityY*(-1);
    fiyrect1.velocityY=fiyrect1.velocityY*(-1);
  }
 
}
function bounceoff(moverect2,fiyrect2){
  if (moverect2.y-fiyrect2.y < moverect2.height/2+fiyrect2.height/2 &&
    moverect2.y-fiyrect2.y < moverect2.height/2+fiyrect2.height/2  ){
    moverect2.velocityY=moverect2.velocityY*(-1);
    fiyrect2.velocityY=moverect2.velocityY;
    fiyrect2.velocityY=fiyrect2.velocityY*(-1);
  }
 
}

