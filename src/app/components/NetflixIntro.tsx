"use client";
import { useEffect, useState } from "react";

const HEARTS = 7;

export default function NetflixIntro({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);
  const [heartPositions, setHeartPositions] = useState<
    { left: string; size: string }[]
  >([]);

  useEffect(() => {
    // 🩷 Generar posiciones aleatorias solo en el cliente
    const positions = Array.from({ length: HEARTS }, () => ({
      left: `${Math.random() * 90 + 5}vw`,
      size: `${Math.random() * 16 + 24}px`,
    }));
    setHeartPositions(positions);

    // ⏳ Temporizador para finalizar la intro
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  // Evita renderizar nada en SSR o antes de generar los corazones
  if (!visible || heartPositions.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="netflix-logo text-7xl text-red-600 font-bold">N</div>
      <div className="absolute inset-0 pointer-events-none">
        {heartPositions.map((pos, i) => (
          <span
            key={i}
            className={`heart heart-${i}`}
            style={{
              left: pos.left,
              fontSize: pos.size,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      <style jsx>{`
        .heart {
          position: absolute;
          bottom: 0;
          color: #e50914;
          opacity: 0.8;
          animation: floatHeart 3s linear infinite;
          will-change: transform, opacity;
        }

        .heart-0 { animation-delay: 0s; }
        .heart-1 { animation-delay: 0.5s; }
        .heart-2 { animation-delay: 1s; }
        .heart-3 { animation-delay: 1.5s; }
        .heart-4 { animation-delay: 2s; }
        .heart-5 { animation-delay: 2.5s; }
        .heart-6 { animation-delay: 2.8s; }

        @keyframes floatHeart {
          0% {
            transform: translateY(0) scale(1) rotate(-10deg);
            opacity: 0.8;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-80vh) scale(1.3) rotate(10deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
