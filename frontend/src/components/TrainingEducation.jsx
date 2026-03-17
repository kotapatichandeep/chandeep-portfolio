import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, ArrowRight, Award, Star } from 'lucide-react';

export default function TrainingEducation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
  };

  const certifications = [
    { icon: Award, color: "green", title: "NPTEL Cloud Computing", desc: "Completed with Elite Certification", certificateUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs107/Course/NPTEL25CS107S135870053110558747.pdf" },
    { icon: BookOpen, color: "blue", title: "CSE Pathshala", desc: "C++ OOP & DSA Training Completion", certificateUrl: "https://docs.google.com/document/d/1DF7v1rpy_HzIcnA9j7AkbfQSvbi2M_jsKUWfGeX4QRg/edit?tab=t.0" },
    { icon: Star, color: "purple", title: "Coursera Networks", desc: "Fundamentals of Network Communication", certificateUrl: "https://www.coursera.org/account/accomplishments/verify/7LQSGJ3OKXC6" }
  ];

  return (
    <section id="training" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-blue-900/5 clip-path-slant-reverse pointer-events-none -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        {/* Top Row: Training & Certifications */}
        <div className="grid md:grid-cols-2 gap-10 mb-24 items-start">
          {/* Training */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 flex items-center gap-4 text-slate-100">
              <div className="p-3 glass rounded-xl text-purple-400">
                <BookOpen size={28} />
              </div>
              <span className="text-gradient">Training</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
              <h3 className="text-2xl font-bold text-slate-100 mb-2 relative z-10">CSE Pathshala</h3>
              <p className="text-purple-400 font-medium mb-6 relative z-10">DSA & OOP Training</p>
              <ul className="space-y-3 relative z-10">
                {["In-depth experience with algorithms and optimization techniques", "Proficient in C++ OOP principles and file handling", "Hands-on system and project development"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300 font-light text-base items-start">
                    <ArrowRight className="text-purple-500 shrink-0 mt-1 block" size={16} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={rightItemVariants} className="text-3xl font-bold mb-8 flex items-center gap-4 text-slate-100">
              <div className="p-3 glass rounded-xl text-green-500">
                <Award size={28} />
              </div>
              <span className="text-gradient">Certifications</span>
            </motion.h2>
            <div className="grid gap-4">
              {certifications.map((item, i) => (
                <motion.div key={i} variants={rightItemVariants} className="flex gap-5 items-center glass-card p-5 rounded-2xl hover:-translate-x-1 transition-transform cursor-default group">
                  <div className={`p-3 bg-${item.color}-500/10 rounded-xl text-${item.color}-400 group-hover:bg-${item.color}-500/20 transition-colors shrink-0`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg text-slate-200 tracking-wide">{item.title}</h4>
                    <p className="text-sm font-light text-slate-400">{item.desc}</p>
                  </div>
                  <motion.a 
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 bg-${item.color}-500/10 rounded-lg text-${item.color}-400 hover:bg-${item.color}-500/20 transition-colors border border-${item.color}-500/10`}
                    title="View Certificate"
                  >
                    <ArrowRight size={18} />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Education (Horizontal Timeline) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="pt-10 border-t border-slate-800/50"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-16 flex items-center gap-4 text-slate-100">
            <div className="p-3 glass rounded-xl text-blue-400">
              <GraduationCap size={28} />
            </div>
            <span className="text-gradient">Education</span>
          </motion.h2>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-slate-700/30 rounded-full"></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {/* LPU */}
              <motion.div variants={itemVariants} className="group">
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-900 shadow-xl mb-10 mx-auto transition-colors group-hover:border-blue-500/50 relative z-20">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>
                <div className="glass-card p-6 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-center md:text-left">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl group-hover:bg-blue-500/10 transition-colors"></div>
                  <div className="font-bold text-xl text-slate-100 mb-1 tracking-wide">BTech CSE</div>
                  <div className="text-slate-400 text-sm font-light mb-1">Lovely Professional University</div>
                  <div className="text-slate-500 text-xs font-light mb-4 italic">Phagwara, Punjab</div>
                  <div className="text-xs font-semibold text-blue-400 px-3 py-1 bg-blue-500/10 inline-block rounded-lg border border-blue-500/20">CGPA: 6.7</div>
                </div>
              </motion.div>

              {/* Inter */}
              <motion.div variants={itemVariants} className="group">
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-900 shadow-xl mb-10 mx-auto transition-colors group-hover:border-purple-500/50 relative z-20">
                  <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-purple-500 transition-colors"></div>
                </div>
                <div className="glass-card p-6 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-center md:text-left">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl group-hover:bg-purple-500/10 transition-colors"></div>
                  <div className="font-bold text-xl text-slate-100 mb-1 tracking-wide">Intermediate</div>
                  <div className="text-slate-400 text-sm font-light mb-1">Sri Chaitanya Junior College</div>
                  <div className="text-slate-500 text-xs font-light mb-4 italic">Tirupati, Andhra Pradesh</div>
                  <div className="text-xs font-semibold text-purple-400 px-3 py-1 bg-purple-500/10 inline-block rounded-lg border border-purple-500/20">84.3%</div>
                </div>
              </motion.div>

              {/* School */}
              <motion.div variants={itemVariants} className="group">
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-900 shadow-xl mb-10 mx-auto transition-colors group-hover:border-slate-400 relative z-20">
                  <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors"></div>
                </div>
                <div className="glass-card p-6 rounded-3xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden text-center md:text-left">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-400/5 rounded-full filter blur-xl group-hover:bg-slate-400/10 transition-colors"></div>
                  <div className="font-bold text-xl text-slate-100 mb-1 tracking-wide">Schooling</div>
                  <div className="text-slate-400 text-sm font-light mb-1">Sri Chaitanya School</div>
                  <div className="text-slate-500 text-xs font-light mb-4 italic">Tirupati, Andhra Pradesh</div>
                  <div className="text-xs font-semibold text-slate-300 px-3 py-1 bg-slate-800/80 inline-block rounded-lg border border-slate-700/50">96%</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
