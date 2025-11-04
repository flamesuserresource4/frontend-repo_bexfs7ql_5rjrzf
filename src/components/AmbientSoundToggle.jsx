import React, { useEffect, useRef, useState } from 'react';

export default function AmbientSoundToggle() {
  const [on, setOn] = useState(false);
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try { oscRef.current.stop(); } catch {}
      }
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch {}
      }
    };
  }, []);

  const toggle = async () => {
    if (!on) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      await ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      // Soft, calming pad-like tone
      osc.type = 'sine';
      osc.frequency.value = 220; // A3
      gain.gain.value = 0.02; // very quiet

      // Gentle modulation for a natural feel
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.type = 'sine';
      lfo.frequency.value = 0.08; // slow
      lfoGain.gain.value = 30; // modulate ±30 Hz
      lfo.connect(lfoGain).connect(osc.frequency);

      osc.connect(gain).connect(ctx.destination);
      osc.start();
      lfo.start();

      oscRef.current = osc;
      gainRef.current = gain;
      setOn(true);
    } else {
      if (oscRef.current) {
        try { oscRef.current.stop(); } catch {}
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      if (audioCtxRef.current) {
        try { await audioCtxRef.current.suspend(); } catch {}
      }
      setOn(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggle}
        className={`rounded-full px-4 py-2 text-sm font-medium shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          on
            ? 'bg-orange-400 text-slate-900 hover:bg-orange-300'
            : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur'
        }`}
        aria-pressed={on}
        aria-label="Toggle ambient sound"
      >
        {on ? 'Sound: On' : 'Sound: Off'}
      </button>
    </div>
  );
}
