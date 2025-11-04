import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chapters = [
  { key: 'asthma', title: 'Asthma', accent: 'from-emerald-400 to-teal-400' },
  { key: 'migraine', title: 'Migraine', accent: 'from-fuchsia-400 to-pink-400' },
  { key: 'anxiety', title: 'Anxiety', accent: 'from-sky-400 to-indigo-400' },
  { key: 'insomnia', title: 'Insomnia', accent: 'from-cyan-400 to-blue-400' },
  { key: 'hypertension', title: 'Hypertension', accent: 'from-amber-400 to-orange-500' },
  { key: 'diabetes', title: 'Diabetes', accent: 'from-lime-400 to-emerald-500' },
  { key: 'cold', title: 'Common Cold', accent: 'from-blue-300 to-purple-400' },
  { key: 'flu', title: 'Seasonal Flu', accent: 'from-rose-400 to-red-400' },
  { key: 'arthritis', title: 'Arthritis', accent: 'from-teal-400 to-emerald-500' },
  { key: 'dermatitis', title: 'Dermatitis', accent: 'from-violet-400 to-indigo-500' },
];

export default function JourneyScrolly() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);

  return (
    <section id="journey" className="relative isolate overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-24 text-slate-100">
      <motion.div style={{ scale, y, opacity }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">An Interactive Journey</h2>
          <p className="mt-4 text-slate-300">
            Scroll to discover ten featured conditions. Each chapter offers symptoms, home remedies, and effects—presented with clarity and calm.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {chapters.map((c, i) => (
            <motion.a
              key={c.key}
              href={`#garden-${c.key}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              aria-label={`Go to ${c.title}`}
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} opacity-30 blur-2xl transition duration-500 group-hover:scale-125`} />
              <div className="relative">
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{c.title}</h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-300">
                  Explore an artistic, science-informed walkthrough. Subtle animations and data visuals help transform information into insight.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-orange-300">
                  Begin chapter <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
