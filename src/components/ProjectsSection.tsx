import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Healthcare AI Platform",
    description: "AI-powered diagnostic system for medical imaging analysis with multi-modal capabilities.",
    tags: ["PyTorch", "FastAPI", "Docker", "AWS"],
    problem: "Manual medical image analysis is slow, error-prone, and creates bottlenecks in patient care.",
    solution: "Built an AI pipeline using deep learning for automated medical image classification with 95%+ accuracy.",
    impact: "Reduced diagnostic time by 60% and improved early detection rates across partnered clinics.",
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Distributed multi-agent system for automated workflow management and decision-making.",
    tags: ["LangChain", "Python", "Redis", "Kubernetes"],
    problem: "Complex business workflows required manual coordination across multiple teams and systems.",
    solution: "Designed a multi-agent architecture where specialized AI agents collaborate to automate end-to-end processes.",
    impact: "Automated 80% of routine decision workflows, saving 200+ hours monthly.",
  },
  {
    title: "CI/CD Infrastructure",
    description: "Enterprise-grade DevOps pipeline with automated testing, deployment, and monitoring.",
    tags: ["AWS", "Terraform", "GitHub Actions", "Docker"],
    problem: "Manual deployments caused frequent downtime and inconsistent environments.",
    solution: "Built a fully automated CI/CD pipeline with infrastructure-as-code, blue-green deployments, and real-time monitoring.",
    impact: "Zero-downtime deployments with 99.9% uptime and 3x faster release cycles.",
  },
  {
    title: "NLP Document Intelligence",
    description: "Intelligent document processing system using NLP for extraction, classification, and summarization.",
    tags: ["Transformers", "spaCy", "PostgreSQL", "React"],
    problem: "Organizations struggled to process thousands of unstructured documents efficiently.",
    solution: "Created an NLP pipeline with custom fine-tuned models for entity extraction and automated categorization.",
    impact: "Processed 10,000+ documents daily with 92% accuracy, replacing manual review workflows.",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Work
          </h2>
          <h3 className="mb-10 text-3xl font-bold sm:text-4xl">
            Featured <span className="neon-text">Projects</span>
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.button
              key={project.title}
              className="glass-card-hover cursor-pointer p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(project)}
            >
              <h4 className="mb-2 text-xl font-semibold">{project.title}</h4>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-border sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selected?.title}</DialogTitle>
            <DialogDescription>{selected?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <h5 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Problem</h5>
              <p className="text-sm text-muted-foreground">{selected?.problem}</p>
            </div>
            <div>
              <h5 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Solution</h5>
              <p className="text-sm text-muted-foreground">{selected?.solution}</p>
            </div>
            <div>
              <h5 className="mb-1 text-sm font-semibold uppercase tracking-wider text-primary">Impact</h5>
              <p className="text-sm text-muted-foreground">{selected?.impact}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {selected?.tags.map((tag) => (
                <span key={tag} className="skill-tag text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
