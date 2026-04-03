import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Engineer",
    company: "JBCODEAPP",
    period: "2023 — Present",
    description:
      "Leading AI/ML initiatives in healthcare systems. Building intelligent diagnostic tools, multi-agent workflows, and production ML pipelines that serve real patients.",
    tags: ["PyTorch", "LangChain", "FastAPI", "AWS"],
  },
  {
    role: "DevOps Engineer",
    company: "WebXpress AI",
    period: "2022 — 2023",
    description:
      "Architected cloud infrastructure and CI/CD pipelines on AWS & DigitalOcean. Implemented automated deployments, monitoring, and infrastructure-as-code for scalable web platforms.",
    tags: ["AWS", "Docker", "Terraform", "GitHub Actions", "DigitalOcean"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Career
          </h2>
          <h3 className="mb-10 text-3xl font-bold sm:text-4xl">
            <span className="neon-text">Experience</span>
          </h3>
        </motion.div>

        <div className="relative space-y-8 border-l-2 border-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[calc(2rem+5px)] flex h-3 w-3 items-center justify-center rounded-full bg-primary shadow-[0_0_10px_hsl(252_87%_67%/0.5)]" />

              <div className="glass-card-hover p-6">
                <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
