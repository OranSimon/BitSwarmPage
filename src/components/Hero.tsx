import { motion } from 'motion/react';

export function Hero() {
  const scrollToSubscribe = () => {
    const element = document.getElementById('subscribe');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070"
          className="w-full h-full object-cover"
        >
          <source
            src="YOUR_VIDEO_URL_HERE.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Company Name at Top */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
      >
        <h1 className="text-white/90 tracking-[0.3em] text-sm uppercase">
          [BitSwarm]
        </h1>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-6 text-5xl md:text-7xl"
        >
          <span className="block mb-2">Turn any terrain to a map</span>
          <span className="block text-[#0EA5E9]">in Minutes</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          An rapid AI-driven multi-unmanned system with interactive platform for any environment.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={scrollToSubscribe}
          className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:scale-105"
        >
          <span className="relative z-10">Subscribe</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-[#0EA5E9] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
