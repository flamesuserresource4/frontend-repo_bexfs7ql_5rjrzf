import React from 'react';
import Hero from './components/Hero';
import JourneyScrolly from './components/JourneyScrolly';
import DiseaseGrid from './components/DiseaseGrid';
import AmbientSoundToggle from './components/AmbientSoundToggle';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Hero />
      <JourneyScrolly />
      <DiseaseGrid />

      {/* Subtle footer */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-slate-400">
            This experience blends design and wellness education. It is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>

      <AmbientSoundToggle />
    </div>
  );
}

export default App;
