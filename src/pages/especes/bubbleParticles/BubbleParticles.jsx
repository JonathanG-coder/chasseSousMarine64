import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles-engine";

const BubbleParticles = () => {
  const particlesInit = async (engine) => {
    // Chargement complet des fonctionnalités tsparticles
    await loadFull(engine);
  };

  return (
    <Particles
      id="bubble-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // On désactive le plein écran (géré par CSS)
        background: { color: { value: "#001f3f" } },
        particles: {
          color: { value: "#a0e7e5" },
          move: {
            direction: "top",
            enable: true,
            outModes: { default: "out" },
            speed: { min: 0.5, max: 2 },
          },
          number: {
            value: 100,
            density: { enable: true, area: 800 },
          },
          opacity: { value: { min: 0.2, max: 0.5 } },
          shape: { type: "circle" },
          size: { value: { min: 4, max: 10 } },
          zIndex: {
            value: { min: 0, max: 50 },
            opacityRate: 0,
            velocityRate: 1,
          },
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default BubbleParticles;
