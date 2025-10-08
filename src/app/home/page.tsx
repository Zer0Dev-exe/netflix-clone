"use client";
import Image from "next/image";
import Link from "next/link";

const categorias = [
  { nombre: "1 mes", banner: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
  { nombre: "2 meses", banner: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" },
  { nombre: "3 meses", banner: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" },
  { nombre: "4 meses", banner: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80" },
];

const destinos = [
  { nombre: "Salou", banner: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
  { nombre: "Madrid", banner: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80" },
];

export default function HomeGallery() {
  return (
    <main className="gallery-main">
      <h1 className="gallery-title">Galería</h1>
      <div className="gallery-sections">
        {/* SECCIÓN DE MESES */}
        <section className="gallery-section">
          <h2 className="gallery-section-title gradient-text">Meses</h2>
          <div className="gallery-cards-row">
            {categorias.map((cat) => (
              <Link
                href={`/galeria/meses/${cat.nombre.replace(/\s/g, "-").toLowerCase()}`}
                key={cat.nombre}
                className="gallery-category-card"
              >
                <div className="gallery-banner-container">
                  <Image
                    src={cat.banner}
                    alt={`${cat.nombre} banner`}
                    width={400}
                    height={120}
                    className="gallery-banner"
                    unoptimized
                  />
                  <span className="gallery-banner-text">{cat.nombre}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECCIÓN DE DESTINOS */}
        <section className="gallery-section">
          <h2 className="gallery-section-title gradient-text">Destinos</h2>
          <div className="gallery-cards-row">
            {destinos.map((dest) => (
              <Link
                href={`/galeria/viajes/${dest.nombre.toLowerCase()}`}
                key={dest.nombre}
                className="gallery-category-card"
              >
                <div className="gallery-banner-container">
                  <Image
                    src={dest.banner}
                    alt={`${dest.nombre} banner`}
                    width={400}
                    height={120}
                    className="gallery-banner"
                    unoptimized
                  />
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
