// Fib Art Generator

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0;
let scale = 10;

function drawFlower() {
  let angle = number * 1;
  let radius = scale * Math.sqrt(number);
  let posX = radius * Math.sin(angle) + canvas.width / 2;
  let posY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(posX, posY, 20, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number += 1;
}

function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFlower();
  requestAnimationFrame(animate);
}

animate();