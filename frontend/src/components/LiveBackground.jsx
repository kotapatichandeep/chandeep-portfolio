import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function LiveBackground() {
  const [isMounted, setIsMounted] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const lastBubbleTime = useRef(0);

  // Use motion values for better performance than React state for high-frequency updates
  // Default values set to roughly center screen before user moves mouse
  const cursorX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 - 250 : 0);
  const cursorY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 - 250 : 0);

  // Smooth out the movement with a spring physics configuration
  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250); 
      cursorY.set(e.clientY - 250); 

      // Popping bubbles logic
      const now = Date.now();
      // Throttle bubble creation (e.g. every 50ms) so it's smooth
      if (now - lastBubbleTime.current > 50) {
        lastBubbleTime.current = now;
        
        // Add random scatter so they don't form a perfect line
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;

        const newBubble = {
          id: now + Math.random(),
          x: e.clientX + offsetX,
          y: e.clientY + offsetY,
          size: Math.random() * 15 + 8, // Between 8px and 23px
          color: ['bg-blue-400/80', 'bg-purple-400/80', 'bg-pink-400/80', 'bg-cyan-400/80'][Math.floor(Math.random() * 4)]
        };
        
        // Keep a maximum of 30 bubbles in state to maintain high performance
        setBubbles(prev => [...prev.slice(-30), newBubble]);
        
        // Schedule removal
        setTimeout(() => {
          setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
        }, 1000);
      }
    };
    
    // Add event listener to the window
    window.addEventListener('mousemove', moveCursor);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return <div className="fixed inset-0 z-0 pointer-events-none" />;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Drifting background blob 1 - Blue/Purple */}
      <motion.div 
        initial={{ opacity: 0.2 }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-blue-600/20 rounded-full filter blur-[150px]"
      />
      
      {/* Drifting background blob 2 - Purple/Pink */}
      <motion.div 
        initial={{ opacity: 0.15 }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full filter blur-[150px]"
      />

      {/* Drifting background blob 3 - Cyan */}
      <motion.div 
        initial={{ opacity: 0.1 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full filter blur-[120px]"
      />
      
      {/* Mouse Follower Glow Removed */}
      
      {/* Popping Bubbles Trail */}
      <AnimatePresence>
        {bubbles.map(bubble => {
          // Calculate random end positions so each bubble floats slightly differently
          const endY = bubble.y - bubble.size / 2 - (Math.random() * 40 + 40); // Float up 40-80px
          const endX = bubble.x - bubble.size / 2 + (Math.random() - 0.5) * 60; // Wiggle left/right 30px
          
          return (
            <motion.div
              key={bubble.id}
              initial={{ 
                opacity: 1, 
                scale: 0, 
                x: bubble.x - bubble.size / 2, 
                y: bubble.y - bubble.size / 2 
              }}
              animate={{ 
                opacity: 0, 
                scale: 1.5, 
                y: endY,
                x: endX
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`absolute rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] ${bubble.color}`}
              style={{
                width: bubble.size,
                height: bubble.size,
              }}
            />
          );
        })}
      </AnimatePresence>
      
    </div>
  );
}
