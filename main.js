var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d")
var width;
var height;
var wallx = 422;
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function() {
width = window.innerWidth;
height = window.innerHeight;
canvas.width = width;
canvas.height = height;
drawLoop();
}

var objects = [];

for(var i=0; i<32; i++){
 new wall(i*32, wallx);

}
//map

new wall(20*32, wallx-128);

//endmap
window.onresize();
var Player = new player(32, 400-64);
function loop(){
stepLoop();
drawLoop();
keyEnd();
}


function stepLoop(){
 for(var i=0; i<objects.length; i++){
  if(objects[i].step) objects[i].step( );
 }
}
function drawLoop(){
 background(25,25,25);
 for(var i=0; i<objects.length; i++){
  if(objects[i].draw) objects[i].draw();
}
}
var target_fps = 30;
setInterval(loop,1000/target_fps);


///
