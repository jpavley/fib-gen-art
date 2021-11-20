// Fib Art Generator

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 0;
let posX = 0;
let posY = 0;

function drawFlower() {
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(posX, posY, size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  size += 0.15;
  posX += 0.2;
  posY += 0.2;

  drawFlower();


  requestAnimationFrame(animate);
}

animate();