export function useFireworks () {
  let canvas: any = ''
  const gravity = 0.05;
  const friction = 0.99;
  let particles = [];
  let particleCount = 1000;
  let mouse;
  let ctx;

const init = () => {
  const el = document.createElement('canvas')
  document.body.appendChild(el);
  canvas = el
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Every time we click on the screen, we create a "feu d'artifice";
  canvas.addEventListener("click", (e) => {
    mouse = {
      x: e.clientX,
      y: e.clientY
    };
    explode(mouse.x, mouse.y);
  });
}

const destroy = () => {
  const el = document.querySelector('canvas')
  if (el) {
    el.remove()
  }
}

// Our particle constructor;
class Particle {
  constructor(x, y, r, color, velocity) {
    // coords
    this.x = x;
    this.y = y;
    this.r = r; // radius
    this.color = color; //background-color
    // velocity
    this.dx = velocity.x;
    this.dy = velocity.y;
    // opacity
    this.opacity = 1;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
    ctx.closePath();
  }
  // We update our particle for each frame;
  update() {
    this.draw();
    // Its new velocity(dx, dy) updates;
    this.dy += gravity;

    this.dx *= friction;
    this.dy *= friction;

    // Its position changes too;
    this.x += this.dx;
    this.y += this.dy;

    // And we want the particle to decrease by opacity for each frame;
    this.opacity -= 0.01;
  }
}

// Our animate function;
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  // For each frame we update our particle if its opacity is greater than 0;
  particles.forEach((particle, i) => {
    if (particle.opacity > 0) {
      particle.update();
    } else {
      particles.splice(i, 1);
    }
  });
}

// This is the function firework;
function explode(x = canvas.width / 2, y = canvas.height / 2) {
  let speed = 40;
  let angleIncrement = (Math.PI * 2) / particleCount;

  for (let i = 0; i < particleCount; i++) {
    particles.push(
      new Particle(x, y, 2, `hsl(${Math.random() * 360}, 50%, 50%)`, {
        x: Math.cos(angleIncrement * i) * Math.random() * speed,
        y: Math.sin(angleIncrement * i) * Math.random() * speed
      })
    );
  }
}

  return {
    init,
    explode,
    animate,
    destroy
  }
}