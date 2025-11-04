import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-slate-900">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-900/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-100">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wider text-slate-100 backdrop-blur">
            Clarity Through Artistry
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            The Digital Apothecary
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90 md:text-lg">
            An interactive journey through natural healing—where elegant design meets trustworthy
            wellness guidance. Breathe in. Scroll slow. Feel better.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-400 px-6 py-3 text-slate-900 transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              Begin the Journey
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#garden"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
            >
              Explore the Garden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
