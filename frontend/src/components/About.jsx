import { motion } from 'framer-motion';
import { User, Code, Brain, Target, Cpu } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-blue-900/5 clip-path-slant z-0"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6 text-slate-300 leading-relaxed text-lg font-light">
              <p className="text-xl text-slate-200 font-medium">
                I am a passionate <span className="text-blue-400">Computer Science student</span> currently pursuing my BTech at Lovely Professional University.
              </p>
              <p>
                My journey revolves around full stack development, solving algorithm-heavy problems, and architecting scalable backend systems. I strive to design applications that not only function beautifully under the hood but look stunning on the surface.
              </p>
              <p>
                Through rigorous coursework and hands-on projects, I have developed a robust foundation in <span className="text-purple-400">Data Structures and Algorithms</span>, enabling me to write highly optimized, clean, and maintainable code for any environment.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { icon: Brain, title: "Problem Solving", color: "blue" },
                { icon: Cpu, title: "System Design", color: "purple" },
                { icon: Target, title: "Adaptability", color: "green" },
                { icon: Code, title: "Development", color: "orange" }
              ].map((skill, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 group">
                  <div className={`p-4 rounded-xl bg-${skill.color}-500/10 text-${skill.color}-400 group-hover:bg-${skill.color}-500/20 transition-colors`}>
                    <skill.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-slate-200">{skill.title}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
