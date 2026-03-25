<<<<<<< HEAD
import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "IPA", level: 95 },
    { name: "IPS", level: 90 },
    { name: "TIK", level: 88 },
    { name: "PAI", level: 95 },
    { name: "Matematika", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 87 },
    { name: "MongoDB", level: 77 },
    { name: "MySQL", level: 84 },
    { name: "REST API", level: 87 },
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "VS Code", level: 97 },
    { name: "Postman", level: 88 },
    { name: "Chrome DevTools", level: 85 },
    { name: "Figma", level: 80 },
  ],
};

type SkillBarProps = {
  name: string;
  level: number;
  delay: number;
};

function SkillBar({ name, level, delay }: SkillBarProps) {
=======
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Vue.js', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 82 },
    { name: 'GraphQL', level: 78 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Figma', level: 85 },
    { name: 'CI/CD', level: 82 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
<<<<<<< HEAD
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
=======
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
<<<<<<< HEAD
        {/* Title */}
=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
<<<<<<< HEAD
            Skills & Teknologi
=======
            Skills &amp; Teknologi
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<<<<<<< HEAD
          {/* Akademik */}
=======
          {/* Frontend */}
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
<<<<<<< HEAD
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-display text-xl font-bold">Akademik</h3>
            </div>

=======
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-display text-xl font-bold">Frontend</h3>
            </div>
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-display text-xl font-bold">Backend</h3>
            </div>
<<<<<<< HEAD

=======
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🛠️</span>
              </div>
<<<<<<< HEAD
              <h3 className="font-display text-xl font-bold">
                Tools & Lainnya
              </h3>
            </div>

=======
              <h3 className="font-display text-xl font-bold">Tools &amp; Lainnya</h3>
            </div>
>>>>>>> 97d55f346334a7b3c1119310f53cf394aa05b515
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
