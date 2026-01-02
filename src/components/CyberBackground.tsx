import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = 150;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawGrid = () => {
      ctx.strokeStyle = 'hsla(180, 100%, 50%, 0.03)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      const offsetX = (mouseRef.current.x * 0.02) % gridSize;
      const offsetY = (mouseRef.current.y * 0.02) % gridSize;

      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawParticles = () => {
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= 0.5;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          particle.vx -= dx * 0.0001;
          particle.vy -= dy * 0.0001;
        }

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;

        // Calculate 3D projection
        const scale = 1000 / (1000 + particle.z);
        const projX = particle.x * scale + (canvas.width / 2) * (1 - scale);
        const projY = particle.y * scale + (canvas.height / 2) * (1 - scale);
        const projSize = particle.size * scale;

        // Draw particle
        const gradient = ctx.createRadialGradient(
          projX, projY, 0,
          projX, projY, projSize * 3
        );
        gradient.addColorStop(0, `hsla(180, 100%, 50%, ${particle.opacity * scale})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(projX, projY, projSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((other) => {
          const otherScale = 1000 / (1000 + other.z);
          const otherProjX = other.x * otherScale + (canvas.width / 2) * (1 - otherScale);
          const otherProjY = other.y * otherScale + (canvas.height / 2) * (1 - otherScale);

          const distance = Math.sqrt(
            Math.pow(projX - otherProjX, 2) + Math.pow(projY - otherProjY, 2)
          );

          if (distance < 120) {
            ctx.strokeStyle = `hsla(180, 100%, 50%, ${0.1 * (1 - distance / 120) * scale * otherScale})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(otherProjX, otherProjY);
            ctx.stroke();
          }
        });
      });
    };

    const drawGlowOrbs = () => {
      const time = Date.now() * 0.001;
      
      // Cyan orb
      const orb1X = canvas.width * 0.3 + Math.sin(time * 0.5) * 100;
      const orb1Y = canvas.height * 0.4 + Math.cos(time * 0.3) * 80;
      const gradient1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, 300);
      gradient1.addColorStop(0, 'hsla(180, 100%, 50%, 0.1)');
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Purple orb
      const orb2X = canvas.width * 0.7 + Math.cos(time * 0.4) * 120;
      const orb2Y = canvas.height * 0.6 + Math.sin(time * 0.6) * 60;
      const gradient2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, 250);
      gradient2.addColorStop(0, 'hsla(270, 100%, 65%, 0.08)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green orb
      const orb3X = canvas.width * 0.5 + Math.sin(time * 0.7) * 80;
      const orb3Y = canvas.height * 0.2 + Math.cos(time * 0.5) * 40;
      const gradient3 = ctx.createRadialGradient(orb3X, orb3Y, 0, orb3X, orb3Y, 200);
      gradient3.addColorStop(0, 'hsla(140, 100%, 45%, 0.06)');
      gradient3.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.fillStyle = 'hsl(220, 20%, 4%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGlowOrbs();
      drawGrid();
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default CyberBackground;
