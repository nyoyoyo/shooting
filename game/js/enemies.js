export const enemies = [];
const SIZE = 70;
const enemyImage=new Image();
enemyImage.src="https://tfi.gamepedia.jp/image/w=1200,h=630,fit=pad,f=webp/media.gamepedia.jp/gamepedia/wp-content/uploads/sites/9/2019/02/05184234/db9b394114683824f13743de113dffe6.png";

function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 5) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
    ctx.drawImage(enemyImage,e.x, e.y, e.width, e.height);
  }
}
