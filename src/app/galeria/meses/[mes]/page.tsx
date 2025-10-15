import fs from "fs";
import path from "path";
import Link from "next/link";
import Carousel from "../../carrusel/Carousel";

interface PageProps {
  params: Promise<{ mes: string }>;
}

const monthFolders: Record<string, string> = {
  "1-hilabete": "1 hilabete webp",
  "2-hilabete": "2 hilabete webp",
  "3-hilabete": "3 hilabete webp",
  "4-hilabete": "4 hilabete webp",
  "5-hilabete": "5 hilabete webp",
};

export async function generateStaticParams() {
  return Object.keys(monthFolders).map((mes) => ({ mes }));
}

export default async function MesPage({ params }: PageProps) {
  const { mes } = await params;
  const mesTexto = mes.replace("-", " ");
  const folderName = monthFolders[mes];
  const imagesPath = path.join(process.cwd(), "public", "imgs", folderName);

  let images: string[] = [];
  try {
    images = fs
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

      {/* Título con gradiente verde → azul */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 mb-6 text-center">
        {mesTexto}
      </h1>

      {images.length > 0 ? <Carousel images={images} /> : <p className="text-white">No hay imágenes.</p>}

      <p className="text-white mt-6 text-center max-w-xl text-base md:text-lg">
        Argazkitxo batzuk <strong>{mesTexto} kuak</strong>. ❤️
      </p>
    </main>
  );
}
