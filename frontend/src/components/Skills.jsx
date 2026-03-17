import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "PHP", "SQL"],
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400"
  },
  {
    category: "Frameworks & Libraries",
    skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "NodeJS", "ReactJS", "ExpressJS"],
    color: "from-purple-500/20 to-pink-500/5",
    accent: "text-purple-400"
  },
  {
    category: "Tools & Databases",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Postman"],
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            The technologies I command to engineer robust and beautiful digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              className={`glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-${group.accent.split('-')[1]}-500/50 transition-colors duration-500`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <h3 className={`text-2xl font-semibold mb-8 ${group.accent} flex items-center gap-3`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl text-sm font-medium border border-slate-700/50 bg-slate-900/50 text-slate-300 shadow-sm backdrop-blur-md group-hover:border-slate-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
