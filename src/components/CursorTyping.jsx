import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function CursorTyping() {
  const phrases = [
    "Lover of mathematics.",
    "Lover of algorithms.",
    "Everything starts with curiosity.",
    "Trickster",
  ];

  const [showCursor, setShowCursor] = useState(true);

  const handleType = (count) => {
    // Si on tape la dernière phrase du cycle, on programme un masquage
    if (count === phrases.length - 1) {
      setTimeout(() => {
        setShowCursor(false);
      }, 2500); // délai identique à delaySpeed
    } else {
      setShowCursor(true); // réactive le curseur pour les autres phrases
    }
  };

  return (
    <Typewriter
      words={phrases}
      loop={true}
      cursor={showCursor}
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2500}
      onType={handleType}
    />
  );
}
