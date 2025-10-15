/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // Exporta todo como HTML estático (requerido)
  trailingSlash: true,   // Asegura rutas correctas con / al final
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
