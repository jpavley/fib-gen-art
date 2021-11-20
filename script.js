// Fib Art Generator

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate() {

  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(100, 300, 50, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  requestAnimationFrame(animate);
}

animate();