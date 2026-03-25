<<<<<<< HEAD
import { motion } from "framer-motion";
import { Github, Instagram, Heart } from "lucide-react";
=======
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
<<<<<<< HEAD
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
=======
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
  ];

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
<<<<<<< HEAD
          {/* TEXT */}
=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
<<<<<<< HEAD
            <span>by Wendry</span>
          </motion.div>

          {/* SOCIAL ICON */}
=======
            <span>by Developer</span>
          </motion.div>

>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
<<<<<<< HEAD
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-foreground hover:scale-110"
=======
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
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
