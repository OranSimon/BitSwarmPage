import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const useCases = [
  {
    title: 'Off-roading',
    subtitle: 'Terrain Navigation',
    description: 'Fused aerial data and onboard AI create instant environmental models—revealing terrain features, obstacles, and optimal transpassing routes before you move.',
    image: 'https://images.unsplash.com/photo-1551818653-ad8adfb85fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGRlc2VydCUyMHRlcnJhaW58ZW58MXx8fHwxNzU5OTg2MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Monitoring',
    subtitle: 'Long-Range Tracking',
    description: 'Coordinated unmanned bots maintain continuous exploration and tracking across more than 10 kilometers, delivering live updates of moving targets and evolving environments.',
    image: 'https://images.unsplash.com/photo-1604257842189-8d177b35bd8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduYWwlMjB0b3dlciUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzU5OTg2MTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Rescue',
    subtitle: 'Search & Recovery',
    description: 'Point clouds with thermal overlays accelerate SAR targeting and route planning, delivering reliable results even in the most challenging environments.',
    image: 'https://images.unsplash.com/photo-1608723724234-558f4b72d8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWUlMjBlbWVyZ2VuY3klMjBkaXNhc3RlcnxlbnwxfHx8fDE3NTk5ODYxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function UseCases() {
  return (
    <motion.section
      id="use-cases"
      className="relative z-10 bg-gradient-to-b from-[#0b0f14] to-black py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: true }}
      variants={container}
    >
      <motion.h2
        className="text-center text-4xl md:text-5xl font-semibold"
        variants={card}
      >
        <span className="text-zinc-200">Three</span>{" "}
        <span className="text-sky-400">Critical Applications</span>
      </motion.h2>

      <motion.p
        className="mx-auto mt-4 max-w-2xl text-center text-zinc-400"
        variants={card}
      >
        From extreme terrain to emergency response, our AI-powered drones deliver instant 3D reconstruction.
      </motion.p>
    
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
        >
          {useCases.map((c) => (
            <motion.article
              key={c.title}
              variants={card}
              className="overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/5 shadow-2xl"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="relative h-56 w-full">
                <img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-zinc-100">{c.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sky-400">{c.subtitle}</p>
                <p className="mt-3 text-zinc-400">{c.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

