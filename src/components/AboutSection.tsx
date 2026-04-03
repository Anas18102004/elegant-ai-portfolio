import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Zap } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI/ML Engineering" },
  { icon: Cloud, label: "DevOps & AWS" },
  { icon: Zap, label: "Full ML Lifecycle" },
  { icon: Code2, label: "Production Systems" },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            About
          </h2>
          <h3 className="mb-8 text-3xl font-bold sm:text-4xl">
            Who is <span className="neon-text">Mohammad Anas</span>?
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              I'm an AI/ML engineer with expert-level DevOps skills, specializing in building production-grade 
              intelligent systems from the ground up. I don't just build AI models — I architect entire ecosystems: 
              from training pipelines and containerization to cloud infrastructure, monitoring, and scaling.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My strength lies in bridging the gap between AI research and production reality. I combine deep learning 
              expertise with enterprise DevOps practices to deploy AI that actually works in the real world at scale.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card-hover flex flex-col items-center justify-center gap-3 p-6 text-center"
              >
                <item.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
