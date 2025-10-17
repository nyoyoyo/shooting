
export const ebenues=[];
const SIZE=26;

function pushEnemies(canvas){
    const w=SIZE;
    const h=SIZE;
    const x=SIZE;
    const y=0;
    const vy=5

    enemies.push({x,y,width: w,height: h,vy});
}
export function spawnEnemy(canvas){
    if(enemies.lengyh<5){
        pushEnemies(canvas);
    }
}

//export function updateEnemies(canvas) {
//for (ley i=enemies.length-1; i>=0; i--){
// const e=enemies[i];
// e.y+=e.vy;
// if (e.y>canvas.height){
// enemies.splice(i,1);
//   }
//  }
// }

// export function drawenemies(ctx){
// ctx.fillStyle ="crimson";
// for(const e of enemies){
// ctx.fillRect(e.x,e.y,e)