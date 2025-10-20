import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const techFeatures = [
  {
    title: 'Autonomous Swarm Intelligence',
    description: 'Coordinated drone fleets collaborate seamlessly through AI-driven swarm logic, achieving faster coverage, higher accuracy, and autonomous decision-making in any environment.',
    icon: '🛰',
  },
  {
    title: 'Hardware-Accelerated Edge Processing',
    description: 'GPU-optimized onboard algorithms deliver instant 3D inference and analysis—no cloud latency, no signal dependency, full speed in the field.',
    icon: '⚡',
  },
  {
    title: 'High-Bandwidth Mesh Communication',
    description: 'A resilient, high-throughput network links every drone into one intelligent mesh, maintaining data flow across kilometers—even in remote or signal-denied zones.',
    icon: '📡',
  },
  {
    title: 'Real-Time Reconstruction & Path Planning',
    description: 'From flight to full environmental model in minutes, the system simultaneously reconstructs terrain and updates optimal flight routes for rapid, adaptive decision-making.',
    icon: '🗺',
  },
  {
    title: 'Interactive Platform',
    description: 'An intuitive, user-friendly interface transforms complex drone coordination into simple visual commands—plan missions, view reconstructions, and control fleets with just a few clicks.',
    icon: '🧩',
  },
  {
    title: 'Scalable, Low-Cost Deployment',
    description: 'Our system adapts to virtually any standard unmanned platform and runs smoothly on minimal hardware requirements—making large-scale deployment simple, flexible, and cost-efficient.',
    icon: '💰',
  },
];

export function TechSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="tech" ref={ref} className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-white mb-4 text-4xl md:text-5xl">
            Why you should <span className="text-[#22D3EE]">Choose Us</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Advanced technology stack designed for the most challenging environments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-white mb-3 text-xl">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
