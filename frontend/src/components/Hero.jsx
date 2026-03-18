import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 px-6 overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center">

        {/* Circular Profile Image with Drop-In Spring Animation */}
        <motion.div
          initial={{ opacity: 0, y: -200, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 1,
            delay: 0.2
          }}
          className="relative mb-6"
        >
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-purple-600 shadow-[0_0_50px_rgba(37,99,235,0.2)] group">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-950 bg-slate-800">
              <img
                src="/image.png"
                alt="Kotapati Chandeep"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            {/* Outer Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/40 to-purple-500/40 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity -z-10"></div>
          </div>
        </motion.div>

        {/* Status Badge - Appears after image lands */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-blue-300 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Open to work</span>
        </motion.div>

        {/* Name and Title - Staggered entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-50 tracking-tighter uppercase leading-[0.9]">
            Kotapati <br />
            <span className="text-gradient">Chandeep</span>
          </h1>

          <p className="text-lg md:text-xl font-normal text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            Enthusiastic full stack developer passionate about crafting <br className="hidden md:block" />
            elegant, scalable, and efficient web applications.
          </p>
        </motion.div>

        {/* CTA Buttons - Appear last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 w-full max-w-md"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="w-full sm:w-auto px-12 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 cursor-pointer text-center text-sm tracking-wide"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-4 rounded-xl border border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white font-bold transition-all hover:-translate-y-1 cursor-pointer text-center text-sm tracking-wide"
          >
            View CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="flex items-center gap-8"
        >
          <a
            href="https://github.com/kotapatichandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors group"
            aria-label="GitHub"
          >
            <Github size={26} className="group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="http://linkedin.com/in/kotapatichandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin size={26} className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
