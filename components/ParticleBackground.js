import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(Math.floor(window.innerWidth * window.innerHeight / 15000), 100);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: resolvedTheme === 'dark' ? 'rgba(23, 195, 178, 0.4)' : 'rgba(23, 195, 178, 0.3)'
        });
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each particle
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off the edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Draw connecting lines
        connectParticles(particle, index);
      });
    };
    
    // Connect particles with lines
    const connectParticles = (p, index) => {
      for (let i = index + 1; i < particles.length; i++) {
        const p2 = particles[i];
        const distance = Math.sqrt(
          Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
        );
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = resolvedTheme === 'dark' 
            ? `rgba(0, 175, 255, ${0.1 * (1 - distance / 150)})` 
            : `rgba(0, 175, 255, ${0.05 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasSize();
    createParticles();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      setCanvasSize();
      createParticles();
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full"
    />
  );
} 