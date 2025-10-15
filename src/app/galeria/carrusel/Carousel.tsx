"use client";

import { useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Imagen compacta */}
      <div className="w-full max-w-2xl h-[350px] md:h-[400px] bg-[#1a1a1a] flex items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(0,255,150,0.4)] overflow-hidden">
        <img
          src={images[index]}
          alt={`Imagen ${index + 1}`}
          className="w-auto max-h-full object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Barra de navegación */}
      <div className="flex items-center gap-10 mt-4">
        <button
          onClick={handlePrev}
          className="px-8 py-3 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white font-bold rounded-full shadow-[0_0_25px_rgba(0,255,150,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(0,200,255,0.7)] transition-transform duration-300 text-lg"
        >
          ‹ Lehenagokoa
        </button>
        <span className="text-white font-semibold">{index + 1} / {images.length}</span>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 text-white font-bold rounded-full shadow-[0_0_25px_rgba(0,255,150,0.5)] hover:scale-110 hover:shadow-[0_0_50px_rgba(0,200,255,0.7)] transition-transform duration-300 text-lg"
        >
          Hurrengoa ›
        </button>
      </div>
    </div>
  );
}
