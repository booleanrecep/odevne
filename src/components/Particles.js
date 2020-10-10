import React from "react";
import Particles from "react-particles-js";
export const Particle = () => (
  <Particles
    style={
      {
        // zIndex: -1,
        // position: "fixed",
        // top: 0,
        // left: 0
      }
    }
    params={{
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#40E0D0",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },

        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
      },
      //   interactivity: {
      //     events: {
      //       onhover: {
      //         enable: true,
      //         mode: "repulse",
      //       },
      //     },
      //   },

      retina_detect: true,
    }}
  />
);
