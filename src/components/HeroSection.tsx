import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, hsl(252 87% 67% / 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(210 100% 56% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(185 80% 55% / 0.06) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />
      <Particles />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            AI/ML Engineer · Expert DevOps · Full Stack Production Systems
          </p>
        </motion.div>

        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          I deploy <span className="neon-text">ML models</span> &{" "}
          <span className="neon-text">production infrastructure</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Building end-to-end AI/ML systems with enterprise-grade DevOps: from model training and optimization 
          to containerization, orchestration, and scalable cloud deployment. Production-ready AI that actually works.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <a href="#projects" className="neon-glow-btn flex items-center gap-2">
            View Projects <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-secondary/80"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
