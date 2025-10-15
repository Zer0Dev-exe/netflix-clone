import fs from "fs";
import path from "path";
import Link from "next/link";
import Carousel from "../../carrusel/Carousel";

interface PageProps {
  params: Promise<{ destino: string }>;
}

// Destinos estáticos
export async function generateStaticParams() {
  const destinos = ["madrid", "salou"];
  return destinos.map((destino) => ({ destino }));
}

export default async function DestinoPage({ params }: PageProps) {
  const { destino } = await params;

  // Map de destino -> carpeta exacta
  const folderMap: Record<string, string> = {
    madrid: "Madrid webp",
    salou: "Salou webp",
  };

  const folderName = folderMap[destino.toLowerCase()];
  const imagesPath = path.join(process.cwd(), "public", "imgs", folderName);

  let fotos: string[] = [];
  try {
    fotos = fs
      .readdirSync(imagesPath)
      .filter((file) => file.endsWith(".webp"))
      .map((file) => `/imgs/${folderName}/${file}`);
  } catch (err) {
    console.error("No se pudieron cargar las imágenes:", err);
  }

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#141414] p-6">
      {/* Botón de regreso solo texto */}
      <Link
        href="/home"
        className="absolute top-6 left-6 text-white font-semibold hover:text-green-400 transition-colors duration-300 text-lg"
      >
        ← Home-ea itzuli
      </Link>

      <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 mb-6 text-center capitalize">
        Helmuga: {destino}
      </h1>

      {fotos.length > 0 ? (
        <Carousel images={fotos} />
      ) : (
        <p className="text-white">No hay fotos disponibles.</p>
      )}
    </main>
  );
}
