import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Training', to: 'training' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`mx-auto max-w-6xl transition-all duration-500 ${scrolled ? 'px-4' : 'px-6'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass px-6 py-4 rounded-2xl shadow-lg border-slate-700/50' : 'bg-transparent px-2 py-2'}`}>
          {/* Logo */}
          <div className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
            <Link to="home" smooth={true} duration={500}>KC</Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center bg-slate-900/50 px-6 py-2 rounded-full border border-slate-700/50 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-blue-400 font-semibold"
                className="text-sm font-medium text-slate-300 hover:text-white transition-all cursor-pointer tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-5 py-2.5 rounded-xl bg-blue-600/10 text-blue-400 text-sm font-semibold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass-card rounded-2xl border border-slate-700/50 flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors cursor-pointer w-full text-center py-2"
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
