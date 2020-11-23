class player {
 constructor(x,y){
  this.x = x;
  this.y = y;
  this.size = 32;
  this.bbx = new bbox(this.x, this.y, 32,this.size);
  this.gravity = 4.4;
  this.yspd = 0;
  this.jspd = 30;
  this.mspd = 10;
  this.xspd = 0;
  objects.push(this);
}
step(){
//this.x = mouseX;
//this.y = mouseY;
this.yspd += this.gravity
var ground = wallCollision(this.bbx, this.x, this.y + 1);
if(keyPress.SPACE|| keyPress.W && ground) {
this.yspd += -this.jspd;

}
if(wallCollision(this.bbx, this.x, this.y+this.yspd)){
 while(!wallCollision(this.bbx, this.x, this.y+Math.sign(this.yspd))){
  this.y += Math.sign(this.yspd);
}
this.yspd = 0;
}
var d = 0;
if (keyDown.D)
{
  d = 1;
}
if ( keyDown.A )
{
  d = -1;
}
if(this.yspd > 30) this.yspd = 30;
this.y += this.yspd;
this.bbx.update(this.x,this.y);

this.xspd = d * this.mspd;
if(wallCollision(this.bbx, this.x+this.xspd, this.y)){
 while(!wallCollision(this.bbx, this.x+Math.sign(this.xspd), this.y)){
  this.x += Math.sign(this.xspd);
}
this.xspd = 0;
}
this.x += this.xspd;

if(this.y > canvas.height){
this.y = wallx-32;
this.x = 0
}
if(this.y < -30){
this.y = canvas.height
}
if(this.x < -30 ){
this.x = canvas.width
}
if(this.x > canvas.width ){
this.x = -30
}
}
draw(){
  strokeColor(255,255,255);
  //noFill();
  fillColor(255,255,255);
  rectangle(this.x,this.y,this.size,this.size);
  //this.bbx.draw();
 }
}
