import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [internalScroll, setInternalScroll] = useState(0);
  const [isLocked, setIsLocked] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const lockedScrollPos = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const moveX = useTransform(springX, [0, 1], [-20, 20]);
  const moveY = useTransform(springY, [0, 1], [-20, 20]);

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Use internal scroll for animation instead of actual page scroll
  const animationProgress = internalScroll / 100; // 0 to 1 based on internal scroll

  // Monitor animation transforms based on internal scroll - bigger scale
  const monitorY = 300 - (animationProgress * 400); // 300 to -100
  const monitorScale = 0.9 + (animationProgress * 0.5); // 0.9 to 1.4 (bigger)
  const textOpacity = Math.max(0, 1 - (animationProgress * 2)); // Fade out faster
  const moveTextScrollY = -(animationProgress * 120);

  // Play video when monitor starts moving up (at 20% progress)
  useEffect(() => {
    if (animationProgress > 0.2 && !videoPlaying && videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video play error:', err));
      setVideoPlaying(true);
    }
  }, [animationProgress, videoPlaying]);

  // Handle scroll lock
  useEffect(() => {
    let accumulatedScroll = 0;

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom > 0;

      if (isInView && isLocked) {
        e.preventDefault();
        
        // Accumulate scroll
        accumulatedScroll += e.deltaY;
        const newScroll = Math.max(0, Math.min(100, internalScroll + (e.deltaY * 0.05)));
        setInternalScroll(newScroll);

        // Unlock when animation reaches 100%
        if (newScroll >= 100) {
          setIsLocked(false);
          // Scroll past the hero section
          setTimeout(() => {
            window.scrollTo(0, lockedScrollPos.current + window.innerHeight);
          }, 100);
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isLocked && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInView = rect.top <= 0 && rect.bottom > 0;
        if (isInView) {
          e.preventDefault();
        }
      }
    };

    if (isLocked) {
      // Lock scroll position
      lockedScrollPos.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${lockedScrollPos.current}px`;
      document.body.style.width = '100%';
    } else {
      // Unlock scroll
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    }

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isLocked, internalScroll]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-20 px-6">

        {/* Play Showreel Button */}
        <div className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-600 transition-colors">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Play Showreel</span>
          </motion.button>
        </div>

        {/* Main Typography */}
        <div className="relative z-10 flex flex-col items-center text-center -translate-y-[25%] md:-translate-y-[35%]">
          <motion.h1
            animate={{ opacity: textOpacity }}
            className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-white"
          >
            SOLUTIONS THAT
          </motion.h1>
          <motion.h1
            style={{
              translateX: moveX,
              translateY: moveY,
              WebkitTextStroke: '2px rgba(239, 68, 68, 0.5)'
            }}
            animate={{ y: moveTextScrollY }}
            className="text-[18vw] font-black uppercase tracking-tighter leading-[0.8] text-neutral-800/50 relative"
          >
            SCALE
          </motion.h1>
        </div>

        {/* 3D Monitor Reveal - Smaller */}
        <motion.div
          animate={{
            y: monitorY,
            scale: monitorScale
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
          className="absolute bottom-0 w-full max-w-5xl aspect-video px-4 z-30"
        >
          <div className="relative w-full h-full bg-[#1a1a1a] rounded-t-2xl p-6 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] border-x border-t border-white/10">
            {/* Screen */}
            <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/5">
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-30"
              >
                <source src="https://cdn.pixabay.com/video/2022/11/13/138791-770943252_large.mp4" type="video/mp4" />
              </video>

              {/* 3D Floating Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Animated Cubes */}
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    rotateZ: [0, 180, 360],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear"
                  }}
                  className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-red-600/40 bg-red-600/5"
                  style={{ transform: "perspective(1000px)" }}
                />
                
                <motion.div
                  animate={{
                    y: [0, 40, 0],
                    rotateZ: [360, 180, 0],
                    rotateX: [0, 180, 360],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                    delay: 2
                  }}
                  className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-red-600/30 bg-red-600/10 rounded-full"
                  style={{ transform: "perspective(1000px)" }}
                />

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-red-600/50"
                  style={{ transform: "perspective(1000px)" }}
                />

                {/* Glowing Orbs */}
                <motion.div
                  animate={{
                    x: [-100, 100, -100],
                    y: [-50, 50, -50],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear"
                  }}
                  className="absolute top-1/3 right-1/3 w-32 h-32 bg-red-600/20 rounded-full blur-xl"
                />

                <motion.div
                  animate={{
                    x: [100, -100, 100],
                    y: [50, -50, 50],
                    scale: [1.5, 1, 1.5]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear"
                  }}
                  className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-red-600/15 rounded-full blur-2xl"
                />
              </div>

              {/* Center Text with Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                  className="text-center"
                >
                  <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2"
                      style={{
                        textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(239, 68, 68, 0.3)'
                      }}>
                    Where Ideas Meets
                  </h3>
                  <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-red-600"
                      style={{
                        textShadow: '0 0 40px rgba(239, 68, 68, 0.8)'
                      }}>
                    Execution
                  </h3>
                </motion.div>
              </div>

              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-10" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Metadata */}
        <div className="absolute bottom-12 left-8 md:left-24 right-8 md:right-24 flex flex-col md:flex-row items-end justify-between gap-8 z-40">
          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 leading-loose">
            POWERED BY LAEVIX <br />
            NEPAL 🇳🇵 {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} NPT
          </div>

          <div className="max-w-xs text-[10px] font-bold uppercase tracking-widest text-right text-neutral-500 leading-relaxed">
            We build intelligent solutions - websites, AI agents & automation systems that scale with your ambition.
          </div>
        </div>

      </div>
    </section>
  );
}



