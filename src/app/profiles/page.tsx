"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const perfiles = [
  { id: 1, nombre: "Haizea", avatar: "/avatar1.png", sub: "Betita🦕🩵" },
  { id: 2, nombre: "Igor", avatar: "/avatar2.png", sub: "Blue 🦕🩵" },
];

export default function ProfilesPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePerfilClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/home");
    }, 1200); // 1.2 segundos de "cargando"
  };

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="mb-6">
          <div className="loader-red"></div>
        </div>
        <span className="text-lg font-semibold">Cargando...</span>
        <style jsx>{`
          .loader-red {
            border: 6px solid #222;
            border-top: 6px solid #e50914;
            border-radius: 50%;
            width: 48px;
            height: 48px;
            animation: spin 0.8s linear infinite;
            margin: auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-12 mt-12 text-center">
        ¿Aukeratu Dinoperfila 🦕🩵?
      </h1>
      <div className="perfiles-container">
        {perfiles.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePerfilClick}
            className="perfil-card"
          >
            <Image
              src={p.avatar}
              alt={p.nombre}
              width={140}
              height={140}
              className="perfil-avatar"
            />
            <p className="perfil-nombre">{p.nombre}</p>
            <span className="perfil-sub">{p.sub}</span>
          </motion.div>
        ))}
      </div>
    </main>
  );
}