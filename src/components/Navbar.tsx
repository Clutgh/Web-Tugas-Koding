<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
=======
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [lang, setLang] = useState("id");
  const [openLang, setOpenLang] = useState(false);
=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
<<<<<<< HEAD

    const handleClickOutside = () => {
      setOpenLang(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // 🌍 MULTI LANGUAGE
  const navText = {
    id: [
      "Beranda",
      "Tentang",
      "Keterampilan",
      "Proyek",
      "Sertifikat",
      "Kontak",
    ],
    en: ["Home", "About", "Skills", "Projects", "Certificate", "Contact"],
    jp: ["ホーム", "紹介", "スキル", "プロジェクト", "証明書", "連絡先"],
    es: [
      "Inicio",
      "Sobre mí",
      "Habilidades",
      "Proyectos",
      "Certificado",
      "Contacto",
    ],
    fr: [
      "Accueil",
      "À propos",
      "Compétences",
      "Projets",
      "Certificat",
      "Contact",
    ],
  };

  const navItems = [
    { href: "#home" },
    { href: "#about" },
    { href: "#skills" },
    { href: "#projects" },
    { href: "#certificates" },
    { href: "#contact" },
=======
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
<<<<<<< HEAD
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
=======
      element.scrollIntoView({ behavior: 'smooth' });
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
        isScrolled ? "glass-strong shadow-card" : "bg-transparent"
=======
        isScrolled ? 'glass-strong shadow-card' : 'bg-transparent'
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
<<<<<<< HEAD
          {/* LOGO */}
=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
<<<<<<< HEAD
              scrollToSection("#home");
=======
              scrollToSection('#home');
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            }}
            className="font-display text-xl md:text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
<<<<<<< HEAD
            Wendry Portofolio
          </motion.a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-6">
            {/* MENU */}
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
=======
            &lt;Dev /&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
                whileHover={{ y: -2 }}
              >
<<<<<<< HEAD
                {navText[lang][index]}
              </motion.a>
            ))}

            {/* 🌍 LANGUAGE DROPDOWN (GREEN) */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full 
                border border-green-400/30 
                bg-green-500/10 
                backdrop-blur-md 
                hover:bg-green-500/20 
                transition text-sm"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
              </button>

              <AnimatePresence>
                {openLang && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-44 rounded-2xl 
                    bg-gradient-to-b from-green-500/20 to-emerald-600/20 
                    backdrop-blur-xl p-2 shadow-xl border border-green-400/20 z-50"
                  >
                    {[
                      { code: "en", label: "English" },
                      { code: "id", label: "Bahasa Indonesia" },
                      { code: "jp", label: "日本語" },
                      { code: "es", label: "Español" },
                      { code: "fr", label: "Français" },
                    ].map((item) => (
                      <div
                        key={item.code}
                        onClick={() => {
                          setLang(item.code);
                          setOpenLang(false);
                        }}
                        className="px-4 py-2 rounded-lg text-sm 
                        hover:bg-green-400/20 cursor-pointer transition"
                      >
                        {item.label}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* THEME */}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
=======
                {item.label}
              </motion.a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

<<<<<<< HEAD
          {/* MOBILE */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun /> : <Moon />}
            </Button>

=======
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
<<<<<<< HEAD
              {isMobileMenuOpen ? <X /> : <Menu />}
=======
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            </Button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* MOBILE MENU */}
=======
      {/* Mobile Menu */}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            animate={{ opacity: 1, height: "auto" }}
=======
            animate={{ opacity: 1, height: 'auto' }}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
<<<<<<< HEAD
              {/* LANGUAGE MOBILE */}
              <div className="flex gap-2 flex-wrap">
                {["id", "en", "jp", "es", "fr"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className="border px-2 py-1 rounded text-xs"
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {navItems.map((item, index) => (
                <a
                  key={item.href}
=======
              {navItems.map((item) => (
                <a
                  key={item.label}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
<<<<<<< HEAD
                  {navText[lang][index]}
=======
                  {item.label}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
