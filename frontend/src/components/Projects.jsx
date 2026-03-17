import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const projects = [
  {
    title: "AI Resume Analyzer",
    description: "An AI-powered web application that analyzes resumes for ATS compatibility, evaluates resume quality, and provides insights and suggestions for improvement.",
    tech: ["MongoDB", "Express", "React", "NodeJS"],
    github: "https://github.com/kotapatichandeep/resume-mern",
    color: "from-pink-500/20 to-pink-600/5",
    accent: "text-pink-400"
  },
  {
    title: "AgriTransport",
    description: "Platform for farmers and transport providers to manage logistics, bookings, and vehicle allocation with real-time tracking.",
    tech: ["MongoDB", "Express", "React", "NodeJS", "Tailwind"],
    github: "https://github.com/kotapatichandeep/agritransport",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400"
  },
  {
    title: "MediBook",
    description: "Enterprise Hospital Management System managing doctor appointments, live bed availability, and automated inventory tracking.",
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    github: "https://github.com/kotapatichandeep/Medibook",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "text-purple-400"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900 z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="text-blue-500 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            A selection of my recent developments showcasing full-stack capabilities and problem-solving through engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 relative"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 ${project.accent} shadow-lg`}>
                    <ExternalLink size={24} strokeWidth={1.5} />
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full backdrop-blur-sm transition-colors border border-transparent hover:border-slate-600">
                    <Github size={20} />
                  </a>
                </div>

                <h3 className={`text-2xl font-bold text-slate-100 mb-4 group-hover:${project.accent} transition-colors tracking-wide`}>
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-8 flex-grow leading-relaxed font-light text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-slate-300 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700/50"
                    >
                      {tech}
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
