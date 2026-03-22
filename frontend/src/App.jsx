import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TrainingEducation from './components/TrainingEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveBackground from './components/LiveBackground';

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500/30 relative">
      <LiveBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <TrainingEducation />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
