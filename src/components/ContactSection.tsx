import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:anas@example.com" },
  { icon: Phone, label: "Call", href: "tel:+916351478230" },
  { icon: Github, label: "GitHub", href: "https://github.com/Anas18102004" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-anas-africawala/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Connect
          </h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Let's <span className="neon-text">Work Together</span>
          </h3>
          <p className="mb-10 text-muted-foreground">
            Interested in collaborating or have a project in mind? Reach out — I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-hover flex items-center gap-3 px-6 py-4 transition-all"
            >
              <link.icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.p
          className="mt-16 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          © 2026 Mohammad Anas. Built with precision.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
