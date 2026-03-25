import { motion } from "framer-motion";
import { Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 🔥 FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start md:ml-28"
          >
            <img
              src="/profile.jpeg"
              alt="Wendry"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
              border-4 border-green-400/30 
              shadow-[0_0_40px_rgba(34,197,94,0.6)] 
              hover:shadow-[0_0_70px_rgba(34,197,94,1)] 
              transition-all duration-500"
            />
          </motion.div>

          {/* 🔥 KONTEN */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, i`m
              <br />
              <span className="text-gradient">Wendry Asyraf</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Pengembang Web & Desainer
            </motion.p>

            {/* 🔥 BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12"
            >
              <Button
                size="lg"
                className="rounded-full px-8 pressable-glow"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 pressable"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* 🔥 SOCIAL ICON (BESAR) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Clutgh",
                  color: "hover:text-white",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/ww33ndry/",
                  color: "hover:text-pink-500",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full glass hover:shadow-glow transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
