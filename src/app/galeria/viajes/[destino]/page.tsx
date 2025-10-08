export default async function DestinoPage({
  params,
}: {
  params: Promise<{ destino: string }>;
}) {
  const { destino } = await params;

  const destinosInfo: Record<string, string> = {
    madrid:
      "Madrid, la vibrante capital de España, destaca por su vida cultural, gastronomía y arquitectura impresionante.",
    salou:
      "Salou es un destino costero famoso por sus playas, ambiente familiar y parques temáticos como PortAventura.",
  };

  const descripcion =
    destinosInfo[destino.toLowerCase()] ||
    "Información sobre este destino próximamente disponible.";

  return (
    <main className="gallery-detail flex flex-col gap-4 p-6">
      <h1 className="gradient-text text-4xl font-bold capitalize">
        Destino: {destino}
      </h1>
      <p className="text-lg max-w-2xl">{descripcion}</p>
    </main>
  );
}
