"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Dream Trip",
  "Romantic Getaway",
  "Thrilling Adventure",
  "Work Retreat",
  "Sea Excursion",
];

export default function AnimatedHeading() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);

      // After fade out, swap text and fade back in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl font-extrabold text-text mb-6 leading-tight">
      Let&apos;s Plan Your{" "}
      <span
        className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-sky block p-5 transition-all duration-400 ease-in-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0px)" : "translateY(-10px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {phrases[index]}
      </span>
    </h1>
  );
}