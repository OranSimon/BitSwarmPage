import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Map, Navigation, Clock, WifiOff, Mountain, Zap } from 'lucide-react';

const painPoints = [
  {
    icon: Map,
    question: "Lost in unfamiliar terrain with no reliable map?",
    description: "Traditional GPS maps don't show real-time terrain changes, hazards, or optimal routes for off-road conditions.",
    audience: "Offroading & Adventurers"
  },
  {
    icon: Clock,
    question: "Need terrain data immediately, not in days?",
    description: "Waiting hours or days for survey data and 3D models delays critical decisions in expeditions and rescue operations.",
    audience: "Expeditors & First Responders"
  },
  {
    icon: WifiOff,
    question: "No network coverage in remote locations?",
    description: "Cloud-dependent mapping solutions fail when you need them most—in remote areas without internet connectivity.",
    audience: "Outdoor Adventurers"
  },
  {
    icon: Mountain,
    question: "Can't visualize what's beyond the next ridge?",
    description: "Limited line-of-sight makes route planning dangerous without a comprehensive 3D view of surrounding terrain.",
    audience: "Offroading Enthusiast"
  },
  {
    icon: Navigation,
    question: "Struggling to plan safe routes in real-time?",
    description: "Static maps can't adapt to changing conditions or help you find the safest path through unknown territory.",
    audience: "Scientific Expeditors"
  },
  {
    icon: Zap,
    question: "Need instant situational awareness in emergencies?",
    description: "Emergency response teams lose precious time without immediate 3D terrain data for search, rescue, and tactical planning.",
    audience: "First Responders"
  }
];

function PainPointCard({ painPoint, index }: { painPoint: typeof painPoints[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const Icon = painPoint.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glassmorphism Card */}
      <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#0EA5E9]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] h-full">
        {/* Icon */}
        <motion.div
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#22D3EE]/20 border border-[#0EA5E9]/30"
        >
          <Icon className="w-8 h-8 text-[#0EA5E9]" />
        </motion.div>

        {/* Question */}
        <h3 className="text-white mb-4 text-xl leading-tight">
          {painPoint.question}
        </h3>

        {/* Description */}
        <p className="text-white/60 mb-4 leading-relaxed">
          {painPoint.description}
        </p>

        {/* Audience Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30">
          <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
          <span className="text-[#22D3EE] text-xs">{painPoint.audience}</span>
        </div>

        {/* Animated accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={isHovered ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0EA5E9] via-[#22D3EE] to-[#A78BFA]"
        />
      </div>
    </motion.div>
  );
}

export function PainPoints() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#A78BFA]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-white mb-6 text-4xl md:text-5xl">
            <span className="block mb-2">Do You Face</span>
            <span className="block text-[#0EA5E9]">These Challenges?</span>
          </h2>
          
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Whether you're exploring unknown terrain, conducting critical research, or responding to emergencies—traditional mapping solutions fall short when you need them most.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((painPoint, index) => (
            <PainPointCard key={index} painPoint={painPoint} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-xl mb-4">
            Get a <span className="text-[#0EA5E9]">God's-eye view</span> of your surroundings in minutes
          </p>
          <p className="text-white/60">
            Frame-selected or custom-drawn areas. Anywhere. Anytime. Even offline.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
