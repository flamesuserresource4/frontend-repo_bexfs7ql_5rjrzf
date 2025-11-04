import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    key: 'asthma',
    name: 'Asthma',
    info: 'Tight chest, wheeze. Steam inhalation with eucalyptus may ease airflow.',
    color: 'from-emerald-400/30 to-teal-500/20',
  },
  {
    key: 'migraine',
    name: 'Migraine',
    info: 'Throbbing pain, aura. Peppermint oil and magnesium can help some.',
    color: 'from-fuchsia-400/30 to-pink-500/20',
  },
  {
    key: 'anxiety',
    name: 'Anxiety',
    info: 'Racing thoughts. Chamomile tea and deep breathing support calm.',
    color: 'from-sky-400/30 to-indigo-500/20',
  },
  {
    key: 'insomnia',
    name: 'Insomnia',
    info: 'Restless nights. Lavender and sleep hygiene can improve rest.',
    color: 'from-cyan-400/30 to-blue-500/20',
  },
  {
    key: 'hypertension',
    name: 'Hypertension',
    info: 'Elevated BP. Garlic and movement may aid alongside medical care.',
    color: 'from-amber-400/30 to-orange-500/20',
  },
  {
    key: 'diabetes',
    name: 'Diabetes',
    info: 'Glucose control. Cinnamon and fiber can support stability.',
    color: 'from-lime-400/30 to-emerald-500/20',
  },
  {
    key: 'cold',
    name: 'Common Cold',
    info: 'Congestion, sore throat. Ginger-lemon tea soothes.',
    color: 'from-blue-300/30 to-purple-500/20',
  },
  {
    key: 'flu',
    name: 'Seasonal Flu',
    info: 'Fever, aches. Hydration and rest remain foundational.',
    color: 'from-rose-400/30 to-red-500/20',
  },
  {
    key: 'arthritis',
    name: 'Arthritis',
    info: 'Joint stiffness. Turmeric and gentle mobility can help.',
    color: 'from-teal-400/30 to-emerald-500/20',
  },
  {
    key: 'dermatitis',
    name: 'Dermatitis',
    info: 'Irritated skin. Oat baths and aloe may soothe.',
    color: 'from-violet-400/30 to-indigo-500/20',
  },
];

export default function DiseaseGrid() {
  return (
    <section id="garden" className="relative bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">Garden of Knowledge</h2>
          <p className="mt-4 text-slate-300">
            An unconventional layout that blossoms as you explore. Hover for a glance. Click to anchor focus.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]"><div className="hidden" aria-hidden="true" />
          {items.map((card, idx) => (
            <motion.a
              id={`garden-${card.key}`}
              key={card.key}
              href={`#garden-${card.key}`}
              className="mb-6 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
            >
              <div className={`relative h-40 w-full bg-gradient-to-br ${card.color}`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><defs><radialGradient id=\"g\" cx=\"50%\" cy=\"50%\" r=\"50%\"><stop offset=\"0%\" stop-color=\"%23ffffff\" stop-opacity=\"0.08\"/><stop offset=\"100%\" stop-color=\"%23ffffff\" stop-opacity=\"0\"/></radialGradient></defs><circle cx=\"100\" cy=\"100\" r=\"100\" fill=\"url(%23g)\"/></svg>')] bg-center opacity-50" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{card.name}</h3>
                  <span className="text-xs uppercase tracking-wider text-slate-300">Featured</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {card.info}
                </p>
                <div className="mt-4 inline-flex items-center text-orange-300">
                  Learn more <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
