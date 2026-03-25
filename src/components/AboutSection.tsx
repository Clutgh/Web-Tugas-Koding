import { motion } from "framer-motion";
import { Code2, Video } from "lucide-react";

// Typing Component
function TypingText({ text }) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.02,
          },
        },
      }}
      className="text-muted-foreground leading-relaxed"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}

      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.p>
  );
}

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: "10+", label: "Projects Selesai" },
    { icon: Video, value: "30+", label: "Video Konten" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20 bg-gradient-to-br from-primary to-emerald-400" />

              {/* VIDEO HERE */}
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card relative">
                <motion.video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card"
              >
                <p className="font-display font-bold text-lg text-gradient">
                  3 Bulan Pengalaman
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
              className="font-display text-2xl md:text-3xl font-bold"
            >
              {"Passionate Developer".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h3>

            <TypingText
              text={`Saya adalah seorang siswa dari MAN 1 Banda Aceh yang sedang belajar web development, khususnya fullstack. Saya suka membuat aplikasi sederhana dan terus berkembang melalui project nyata.`}
            />

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center shadow-card hover:shadow-2xl transition group"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
