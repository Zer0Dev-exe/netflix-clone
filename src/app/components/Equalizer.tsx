"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Equalizer() {
  const [randomDurations, setRandomDurations] = useState<number[]>([]);

  useEffect(() => {
    setRandomDurations(Array.from({ length: 5 }, () => 1 + Math.random()));
  }, []);

  return (
    <div className="flex items-end justify-center gap-1 h-10">
      {randomDurations.map((duration, i) => (
        <motion.div
          key={i}
          className="w-2 bg-red-500 rounded"
          animate={{
            height: ["20%", "100%", "40%", "80%", "30%"],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
