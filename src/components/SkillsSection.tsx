import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "LangChain", "Transformers", "scikit-learn", "OpenAI", "Computer Vision", "NLP"],
  },
  {
    category: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "REST APIs", "GraphQL"],
  },
  {
    category: "DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "DigitalOcean"],
  },
  {
    category: "Tools",
    skills: ["Git", "Linux", "VS Code", "Jupyter", "Postman", "Figma", "Notion"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Toolkit
          </h2>
          <h3 className="mb-10 text-3xl font-bold sm:text-4xl">
            Skills & <span className="neon-text">Technologies</span>
          </h3>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
