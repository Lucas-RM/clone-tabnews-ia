"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Confetti() {
  const [size, setSize] = useState(null);
  const [concluido, setConcluido] = useState(false);

  useEffect(() => {
    if (concluido) return;
    const atualizar = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, [concluido]);

  if (!size || concluido) return null;

  return (
    <ReactConfetti
      width={size.width}
      height={size.height}
      recycle={false}
      numberOfPieces={400}
      onConfettiComplete={() => setConcluido(true)}
      style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
    />
  );
}
