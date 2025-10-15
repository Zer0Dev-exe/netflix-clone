// app/galeria/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

const meses = ["1 hilabete", "2 hilabete", "3 hilabete", "4 hilabete", "5 hilabete"];
const destinos = ["Salou", "Madrid"];

// Función para obtener la primera imagen de una carpeta
function getFirstImage(folderName: string) {
  const folderPath = path.join(process.cwd(), "public", "imgs", folderName);
  try {
    const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".webp"));
    return files.length > 0 ? `/imgs/${folderName}/${files[0]}` : "";
  } catch (err) {
    console.error("No se pudo leer la carpeta:", folderName, err);
    return "";
  }
}

export default function HomeGallery() {
  const categorias = meses.map((mes) => ({
    nombre: mes,
    banner: getFirstImage(`${mes} webp`),
  }));

  const destinosData = destinos.map((dest) => ({
    nombre: dest,
    banner: getFirstImage(`${dest} webp`),
  }));

  return (
    <main className="gallery-main">
      <h1 className="gallery-title">Dino Galeria</h1>
      <div className="gallery-sections">
        {/* SECCIÓN DE MESES */}
        <section className="gallery-section">
          <h2 className="gallery-section-title dinosaur-text">Hilabetiak</h2>
          <div className="gallery-cards-row">
            {categorias.map((cat) => (
              <Link
                href={`/galeria/meses/${cat.nombre.replace(/\s/g, "-").toLowerCase()}`}
                key={cat.nombre}
                className="gallery-category-card"
              >
                <div className="gallery-banner-container">
                  {cat.banner ? (
                    <Image
                      src={cat.banner}
                      alt={`${cat.nombre} banner`}
                      width={400}
                      height={120}
                      className="gallery-banner"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-[120px] bg-gray-800 flex items-center justify-center text-white">
                      Sin imagen
                    </div>
                  )}
                  <span className="gallery-banner-text">{cat.nombre}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECCIÓN DE DESTINOS */}
        <section className="gallery-section">
          <h2 className="gallery-section-title dinosaur-text">Helmugak</h2>
          <div className="gallery-cards-row">
            {destinosData.map((dest) => (
              <Link
                href={`/galeria/viajes/${dest.nombre.toLowerCase()}`}
                key={dest.nombre}
                className="gallery-category-card"
              >
                <div className="gallery-banner-container">
                  {dest.banner ? (
                    <Image
                      src={dest.banner}
                      alt={`${dest.nombre} banner`}
                      width={400}
                      height={120}
                      className="gallery-banner"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-[120px] bg-gray-800 flex items-center justify-center text-white">
                      Sin imagen
                    </div>
                  )}
                  <span className="gallery-banner-text">{dest.nombre}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
