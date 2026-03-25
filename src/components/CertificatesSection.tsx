<<<<<<< HEAD
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Desain Poster",
    issuer: "Delta Greatfest -3",
    date: "2024",
    credentialId: "001",
    image: "/sertifikat.jpeg",
    link: "/sertifikat.jpeg",
=======
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-123456',
    image: '🏆',
    color: 'from-orange-500/20 to-yellow-500/20',
    link: '#',
  },
  {
    title: 'Google Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: '2023',
    credentialId: 'GCP-PCD-789012',
    image: '☁️',
    color: 'from-blue-500/20 to-cyan-500/20',
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023',
    credentialId: 'META-FE-345678',
    image: '⚛️',
    color: 'from-blue-600/20 to-indigo-500/20',
    link: '#',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023',
    credentialId: 'MDB-DEV-901234',
    image: '🍃',
    color: 'from-green-500/20 to-emerald-500/20',
    link: '#',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF',
    date: '2022',
    credentialId: 'CKA-567890',
    image: '⚙️',
    color: 'from-indigo-500/20 to-purple-500/20',
    link: '#',
  },
  {
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: '2022',
    credentialId: 'PSM-I-234567',
    image: '📋',
    color: 'from-teal-500/20 to-cyan-500/20',
    link: '#',
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
<<<<<<< HEAD
        {/* HEADER */}
=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
<<<<<<< HEAD
          <span className="text-primary font-medium mb-2 block">
            Kredensial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sertifikat Saya
=======
          <span className="text-primary font-medium mb-2 block">Kredensial</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Sertifikat &amp; Lisensi
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

<<<<<<< HEAD
        {/* CARD */}
        <div className="flex justify-center">
          {certificates.map((cert) => (
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              transition={{ duration: 0.5 }}
              className="group max-w-lg w-full"
            >
              <div
                className="p-6 glass rounded-2xl shadow-card 
                transition-all duration-500 
                hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden"
              >
                {/* ✨ GLOW GOLD */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                  bg-gradient-to-br from-yellow-400/20 via-yellow-500/20 to-yellow-600/20"
                />

                {/* 🏆 FRAME EMAS */}
                <a href={cert.image} target="_blank" rel="noopener noreferrer">
                  <div
                    className="relative p-[3px] rounded-xl 
                    bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 
                    group-hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] 
                    transition duration-500 overflow-hidden"
                  >
                    {/* ✨ SHINE EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                      <div
                        className="w-full h-full bg-gradient-to-r 
                        from-transparent via-white/40 to-transparent 
                        translate-x-[-200%] group-hover:translate-x-[200%] 
                        transition-all duration-1000"
                      />
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden rounded-lg bg-black">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-72 object-cover 
                        transition duration-500 
                        group-hover:scale-105"
                      />
                    </div>
                  </div>
                </a>

                {/* INFO */}
                <div className="space-y-3 mt-5 relative z-10">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-yellow-500 mt-0.5 group-hover:scale-110 transition" />
                    <h3 className="text-lg font-bold group-hover:text-yellow-500 transition">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>

=======
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <span className="text-3xl">{cert.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
<<<<<<< HEAD

                  <p className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>

                  {/* BUTTON */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full mt-2 
                    group-hover:border-yellow-500 
                    group-hover:text-yellow-500 
                    transition"
                    asChild
                  >
                    <a href={cert.link} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Lihat Sertifikat
=======
                  
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    ID: {cert.credentialId}
                  </p>
                  
                  <Button variant="outline" size="sm" className="rounded-full mt-2" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Verifikasi
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
