export default async function MesPage({
  params,
}: {
  params: Promise<{ mes: string }>;
}) {
  const { mes } = await params;

  return (
    <main className="gallery-detail p-6">
      <h1 className="gradient-text text-4xl font-bold">
        Mes: {mes.replace("-", " ")}
      </h1>
      <p className="text-lg mt-2">
        Aquí puedes mostrar fotos, información o contenido específico del mes{" "}
        <strong>{mes.replace("-", " ")}</strong>.
      </p>
    </main>
  );
}
