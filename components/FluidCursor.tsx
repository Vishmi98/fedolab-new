"use client";

import { SmokeyFluidCursor } from "react-smokey-fluid-cursor";

export default function FluidCursor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[20]">
      <SmokeyFluidCursor
        config={{
          simResolution: 128,       
          densityDissipation: 0.95,  // slower fade → heavier liquid
          velocityDissipation: 0.95, // slower trail movement
          curl: -2,                  // softer swirls
          pressureIteration: 6,
          splatRadius: 0.15,         
        }}
      />

      <style jsx global>{`
        /* Smooth light gray + white transitions */
        @keyframes mercuryLight {
          0%   { filter: grayscale(100%) brightness(1.2) contrast(1.4); }
          50%  { filter: grayscale(100%) brightness(1.3) contrast(1.45); }
          100% { filter: grayscale(100%) brightness(1.2) contrast(1.4); }
        }

        canvas {
          filter: grayscale(100%) brightness(1.2) contrast(1.4);
          mix-blend-mode: screen;
          animation: mercuryLight 20s ease-in-out infinite; /* slow smooth cycle */
        }

        body::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 60%);
          mix-blend-mode: screen;
          z-index: 20;
          animation: mercuryLight 20s ease-in-out infinite; /* synced highlights */
        }
      `}</style>
    </div>
  );
}
