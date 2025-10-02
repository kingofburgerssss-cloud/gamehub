const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let particles = [];
let buttons = [];

window.addEventListener('DOMContentLoaded', () => {
  buttons = Array.from(document.querySelectorAll('.game-btn'));
});

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 2;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.baseOpacity = Math.random() * 0.5 + 0.2;
    this.opacity = this.baseOpacity;
    this.opacityDir = Math.random() > 0.5 ? 1 : -1;
  }

  update() {
    // move particle
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0) this.x = canvas.width;
    if(this.x > canvas.width) this.x = 0;
    if(this.y < 0) this.y = canvas.height;
    if(this.y > canvas.height) this.y = 0;

    // pulse opacity
    this.opacity += 0.005 * this.opacityDir;
    if(this.opacity > 0.8) this.opacityDir = -1;
    if(this.opacity < 0.2) this.opacityDir = 1;

    // hover reaction
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const dx = this.x - (rect.left + rect.width / 2);
      const dy = this.y - (rect.top + rect.height / 2);
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < Math.max(rect.width, rect.height)/1.5) {
        this.x += dx / dist * 2;
        this.y += dy / dist * 2;
        this.opacity = Math.min(1, this.opacity + 0.05);
      }
    });
  }

  draw() {
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fill();
  }
}

function initParticles(num) {
  particles = [];
  for(let i = 0; i < num; i++) particles.push(new Particle());
}
initParticles(200);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();
