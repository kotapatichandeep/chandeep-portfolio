import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 10 } 
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Switched to Web3Forms for direct frontend-to-email delivery without needing a backend server
      // 1. Go to https://web3forms.com/
      // 2. Enter your email (k.chandunaidu2005@gmail.com) and click "Create Access Key"
      // 3. Check your email for the key and paste it below
      const WEB3FORMS_ACCESS_KEY = "ba6c3035-071a-48b8-8b2b-6c98ef011485"; 
 
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Message from Portfolio"
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Unable to connect securely to the server. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full filter blur-[120px] pointer-events-none -translate-y-1/2"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full filter blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="text-pink-500" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="md:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email Address", value: "k.chandunaidu2005@gmail.com", href: "mailto:k.chandunaidu2005@gmail.com", color: "orange" },
              { icon: Phone, label: "Phone Number", value: "+91 9652505608", href: "tel:+919652505608", color: "green" },
              { icon: MapPin, label: "Location", value: "India", href: null, color: "blue" }
            ].map((contact, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                whileHover={{ y: -5, scale: 1.02 }}
                className={`flex items-center gap-5 glass-card p-6 rounded-2xl border border-white/5 hover:border-${contact.color}-500/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 group cursor-default min-w-0 relative overflow-hidden`}
              >
                {/* Subtle gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${contact.color}-500/0 via-${contact.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`p-4 bg-${contact.color}-500/10 rounded-2xl text-${contact.color}-400 group-hover:bg-${contact.color}-500/20 transition-colors shadow-inner relative z-10`}
                >
                  <contact.icon size={24} />
                </motion.div>
                <div className="min-w-0 relative z-10">
                  <p className="text-sm text-slate-400 font-medium mb-1">{contact.label}</p>
                  {contact.href ? (
                    <a href={contact.href} className={`text-lg text-slate-200 hover:text-${contact.color}-400 transition-colors font-semibold tracking-wide break-words`}>
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-lg text-slate-200 font-semibold tracking-wide break-words">
                      {contact.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card p-10 rounded-3xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status.type === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center py-12 h-full text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 15, -10, 0] }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 shadow-[0_0_40px_rgba(34,197,94,0.3)]"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-white mb-3"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-400 text-lg max-w-sm mb-8"
                  >
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </motion.p>
                  
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setStatus({ type: '', message: '' })}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-medium border border-white/5"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59,130,246,0.5)" }}
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all shadow-inner"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                      <motion.input
                        whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59,130,246,0.5)" }}
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all shadow-inner"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59,130,246,0.5)" }}
                      id="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none transition-all shadow-inner resize-none"
                      placeholder="Hello Chandeep, I'd like to discuss..."
                    ></motion.textarea>
                  </div>

                  {status.message && status.type === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl text-sm font-medium border bg-red-500/10 text-red-400 border-red-500/20"
                    >
                      {status.message}
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={status.type !== 'loading' ? { scale: 1.02, boxShadow: "0 0 30px rgba(37,99,235,0.4)" } : {}}
                    whileTap={status.type !== 'loading' ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-blue-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] mt-4 overflow-hidden relative group"
                  >
                    {status.type === 'loading' ? (
                      <>
                        Sending...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.div 
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        >
                          <Send size={18} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
