// Zero-dependency confetti engine (Canvas 2D)
class ConfettiEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dpr = Math.max(1, window.devicePixelRatio || 1);
    this.particles = [];
    this.running = false;
    this._resize = this.resize.bind(this);
    this.resize();
    window.addEventListener('resize', this._resize);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stop(); else this.start();
    });
    this.colors = ["#ef4444","#f59e0b","#10b981","#3b82f6","#a855f7","#ec4899","#22c55e","#eab308"];
  }
  resize(){
    const { canvas, dpr } = this;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
  }
  addBurst({ x=0.5, y=0.5, count=150, spread=Math.PI/2, speed=8, scalar=1 }){
    const { width, height } = this.canvas;
    for(let i=0;i<count;i++){
      const angle = (Math.random() * spread) + (Math.PI/2 - spread/2);
      const v = speed * (0.6 + Math.random()*0.8);
      this.particles.push({
        x: x*width, y: y*height,
        vx: Math.cos(angle) * v, vy: Math.sin(angle) * v * -1,
        g: 0.18 + Math.random()*0.28,
        w: 4*scalar + Math.random()*4*scalar,
        h: 8*scalar + Math.random()*8*scalar,
        rot: Math.random()*Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        alpha: 1,
        fade: 0.007 + Math.random()*0.01,
        color: this.colors[(Math.random()*this.colors.length)|0]
      });
    }
    this.start();
  }
  addCannon({ side='left' }){
    const x = side==='left' ? 0.12 : 0.88;
    this.addBurst({ x, y: 0.7, count: 180, spread: Math.PI/3, speed: 10, scalar: 1.1 });
  }
  addRain({ count=60 }){
    const { width } = this.canvas;
    for(let i=0;i<count;i++){
      this.particles.push({
        x: Math.random()*width, y: -20,
        vx: (Math.random()-0.5)*1.2, vy: 6 + Math.random()*3,
        g: 0.04,
        w: 3 + Math.random()*3,
        h: 10 + Math.random()*14,
        rot: Math.random()*Math.PI, vr: (Math.random()-0.5)*0.08,
        alpha: 0.9, fade: 0.004 + Math.random()*0.006,
        color: this.colors[(Math.random()*this.colors.length)|0]
      });
    }
    this.start();
  }
  addComet(){
    const { width, height } = this.canvas;
    const startX = Math.random()*width*0.3;
    const startY = Math.random()*height*0.2;
    for(let i=0;i<28;i++){
      this.particles.push({
        x: startX - i*8, y: startY + i*5,
        vx: 6, vy: 2,
        g: 0.06,
        w: 3, h: 3,
        rot: 0, vr: 0.02,
        alpha: 1 - i*0.03, fade: 0.01,
        color: this.colors[(Math.random()*this.colors.length)|0]
      });
    }
    this.start();
  }
  start(){
    if (this.running) return;
    this.running = true;
    let last = performance.now();
    const step = (now) => {
      if (!this.running) return;
      const dt = Math.min(32, now - last); last = now;
      this.update(dt);
      this.draw();
      if (this.particles.length > 0) requestAnimationFrame(step);
      else this.running = false;
    };
    requestAnimationFrame(step);
  }
  stop(){ this.running = false; }
  update(dt){
    const gdt = dt/16.6;
    const { width, height } = this.canvas;
    this.particles = this.particles.filter(p => {
      p.vy += p.g * gdt;
      p.x += p.vx * gdt;
      p.y += p.vy * gdt;
      p.rot += p.vr * gdt;
      p.alpha -= p.fade * gdt;
      return p.alpha > 0 && p.y < height + 40 && p.x > -40 && p.x < width + 40;
    });
  }
  draw(){
    const { ctx, canvas } = this;
    const dpr = this.dpr;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    for(const p of this.particles){
      ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.setTransform(1,0,0,1,0,0);
    }
    ctx.restore();
  }
  megaShow(duration=4200){
    const end = Date.now() + duration;
    const loop = () => {
      this.addRain({ count: 6 });
      if (Math.random() < 0.18) this.addComet();
      if (Date.now() < end) requestAnimationFrame(loop);
    };
    this.addCannon({ side:'left' }); this.addCannon({ side:'right' });
    this.addBurst({ x:0.5, y:0.35, count:180, spread:Math.PI*1.2, speed:9, scalar:1.2 });
    loop();
  }
}

module.exports = ConfettiEngine;
