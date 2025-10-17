
import{player , initPlayer, drawPlayer} from "./player.js";
import{spawnEnemy,enemies}from"./enemies.js";

const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

 initPlayer(canvas);
 spawnEnemy(canvas);

const bullets=[];
const BULLET_SPEED=-10;

function tryShoot(){
  bullets.push({
    x:player.x,
    y:player.y,
    width:5,
    height:5,
    vy: BULLET_SPEED,
  })
}
//width="480" height="640"

window.addEventListener("keydown",(e)=> {
    if(e.key==="ArrowLeft"){
        player.x>10;{
          player.x-=10;
        }
    }else if(e.key==="ArrowRight") {
      if(player.x< canvas.width-player.width-10){
        player.x+=10;
    }
    }else if (e.code==="Space"){
     tryShoot();
 }
});

let y=0;

function update(){
for(let i=0;1<bullets.length;i++){
  const bullet=bullets[i];
  bullet.y+=bullet.vy;
  if(bullet.y<0){
    bullets.splice(i,1);
}
}
}
function draw(){
ctx.fillStyle="red";
ctx.fillRect(0,0,canvas.width,convasheight);

drawPlayer(ctx);

ctxfillStyle="white";
for(let i=0; i<bullets.length;i++){
  const bullet=bullets[i];
  ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
}

txfillStyle="white";
for(let i=0; i<bullets.length;i++){
  const enemy=enemies[i];
  ctx.fillRect(enemy.x,enemy.y,enemy.width,enemy.height);
}
}

function gameLoop(){
  ctx.fillStyle="red";
  ctx.fillRect(0,0,canvas.width,canvas.height);
 
  ctx.fillStyle=player.color;
  ctx.fillRect(player.x,player.y,player.width,player.height);

  for(let i=bullets.length-1;i>=0;i--) {
    const bullet=bullets[i];
    bullet.y+=bullet.vy;
  ctx.fillStyle="white";
  ctx.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);
  if(bullet.y<0){
    bullets.splice(i,1);
}
console.log(bullet);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();