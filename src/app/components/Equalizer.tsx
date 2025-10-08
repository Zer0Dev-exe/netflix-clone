"use client";
import { motion } from "framer-motion";

export default function Equalizer() {
  const bars = Array.from({ length: 5 });

  return (
    <div className="flex items-end justify-center gap-1 h-10">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-2 bg-red-500 rounded"
          animate={{
            height: ["20%", "100%", "40%", "80%", "30%"],
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}
