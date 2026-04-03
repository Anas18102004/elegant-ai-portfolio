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
    title: "MCP Server Infrastructure & RAG Ecosystem",
    description: "Built production MCP servers and clients for AI system integration, coupled with advanced RAG infrastructure for intelligent document retrieval.",
    tags: ["MCP Servers", "LangChain", "RAG", "Python", "FastAPI", "DigitalOcean"],
    problem: "AI applications need standardized ways to integrate with tools and data sources, and retrieval systems must efficiently handle large knowledge bases.",
    solution: "Designed and implemented MCP (Model Context Protocol) servers for seamless tool integration, built sophisticated RAG pipelines for semantic search and retrieval, and created client libraries for easy integration across multiple services.",
    impact: "Deployed MCP ecosystem serving 10K+ daily requests, RAG system processing 100K+ documents with 94% retrieval accuracy, reduced latency by 65% through optimized embedding strategies.",
  },
  {
    title: "Advanced Agentic AI System with n8n & LangGraph",
    description: "Sophisticated multi-agent orchestration using LangChain, LangGraph, and n8n for enterprise workflow automation.",
    tags: ["LangChain", "LangGraph", "n8n", "FastAPI", "Python", "Agentic Architecture"],
    problem: "Complex enterprise workflows require intelligent automation, but existing tools lack true agent reasoning and flexible orchestration.",
    solution: "Built sophisticated agentic systems using LangGraph for advanced agent reasoning and state persistence, integrated n8n for no-code/low-code workflow visualization, and layered FastAPI on top for API exposure. Created specialized agents that reason, plan, and execute complex multi-step processes.",
    impact: "Deployed agents handling 100K+ daily tasks with complex reasoning, reduced manual intervention by 85%, enabled rapid workflow prototyping through n8n UI.",
  },
  {
    title: "Healthcare AI + Cloud Infrastructure",
    description: "AI diagnostic engine with production-grade DevOps: monitoring, logging, security, disaster recovery.",
    tags: ["PyTorch", "FastAPI", "AWS", "Docker", "Terraform", "CloudWatch"],
    problem: "Medical AI systems must be HIPAA-compliant, highly available, and capable of handling real-time diagnostic requests at scale.",
    solution: "Deployed deep learning diagnostic model on AWS with containerization, encrypted storage, automated backups, and comprehensive logging. Implemented health checks, auto-recovery, and 24/7 monitoring.",
    impact: "95%+ diagnostic accuracy, 60ms average response time, 99.95% uptime, HIPAA-compliant infrastructure used by 3 clinics processing 5000+ daily scans.",
  },
  {
    title: "NLP Document Processing + Microservices",
    description: "Scalable NLP service with distributed architecture, load balancing, and automated infrastructure management.",
    tags: ["Transformers", "spaCy", "PostgreSQL", "Docker", "AWS ECS", "Terraform"],
    problem: "Organizations need to process millions of documents but lack scalable infrastructure and ML pipeline orchestration.",
    solution: "Created containerized NLP microservices deployed on AWS ECS with auto-scaling. Fine-tuned transformer models for entity extraction, built distributed processing queues with Redis, and implemented comprehensive monitoring.",
    impact: "Processes 50K+ documents daily with 92% accuracy, automatically scales from 2 to 20 containers based on load, 40ms average processing per document.",
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
