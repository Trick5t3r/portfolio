// src/components/ImageSlider.jsx
import React, { useState, useRef, useEffect } from "react";

export default function ImageSlider({ images, pause = 3, speed = 1 }) {
  // on clone la première image à la fin pour la boucle infinie
  const extended = [...images, images[0]];
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const wrapperRef = useRef(null);

  // Change d'image toutes les `pause` secondes
  useEffect(() => {
    const id = setTimeout(() => setIndex(i => i + 1), pause * 1000);
    return () => clearTimeout(id);
  }, [index, pause]);

  // Quand l'animation CSS se termine...
  const onTransitionEnd = () => {
    // Si on vient d'afficher la copie (dernier slide), on reset sans transition
    if (index >= images.length) {
      setTransitioning(false);
      setIndex(0);
    }
  };

  // Quand on reset à 0, on réactive la transition CSS
  useEffect(() => {
    if (!transitioning) {
      // un petit délai pour laisser le DOM appliquer le translate sans transition
      const id = setTimeout(() => setTransitioning(true), 50);
      return () => clearTimeout(id);
    }
  }, [transitioning]);

  // Styles dynamiques du wrapper
  const wrapperStyle = {
    display: "flex",
    width: `${extended.length * 100}%`,
    transform: `translateX(-${(index * 100) / extended.length}%)`,
    transition: transitioning ? `transform ${speed}s ease-in-out` : "none",
  };

  return (
    <div
      style={{
        overflow: "hidden",
        width: "224px",   // équivalent à Tailwind w-56
        height: "224px",  // équivalent à Tailwind h-56
        position: "relative",
        margin: "0 auto", // centre horizontalement
      }}
    >
      <div
        ref={wrapperRef}
        style={wrapperStyle}
        onTransitionEnd={onTransitionEnd}
      >
        {extended.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            style={{
              width: "224px",
              height: "224px",
              objectFit: "cover",
              flexShrink: 0,
            }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
