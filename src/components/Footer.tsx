import { motion } from "framer-motion";
import { Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Clutgh",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ww33ndry/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center">
          {/* TEXT TENGAH */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 text-muted-foreground text-center"
          >
            © {currentYear} Wendry Asyraf. All rights reserved.
          </motion.div>

          {/* SOCIAL KANAN */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="ml-auto flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-foreground hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
