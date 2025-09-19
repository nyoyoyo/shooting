document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

  

//width="480" height="640"
let x=225;


window.addEventListener("keydown",(e)=> {
    if(e.key==="ArrowLeft"){
        x-=10;
    }else if(e.key==="ArrowRight") {
        x+=10;
        }
});

let y=0;


function gameLoop(){
  ctx.fillStyle="purple";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="red";
  ctx.fillRect(150,y,30,30);
  ctx.fillStyle="blue";
  ctx.fillRect(x,480,30,30,);
  y+=1;
  ctx.fillStyle="blue";
  ctx.fillRect(x,480,30,30);
  requestAnimationFrame(gameLoop);
}

gameLoop();