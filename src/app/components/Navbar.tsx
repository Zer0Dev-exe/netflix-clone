import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-black text-white px-6 py-4">
      <Link href="/" className="text-2xl font-bold">
        Netflix Clone
      </Link>
      <ul className="flex gap-6">
        <li>
          <Link href="/profiles" className="hover:text-red-500">
            Perfiles
          </Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer">Series</li>
        <li className="hover:text-red-500 cursor-pointer">Películas</li>
      </ul>
    </nav>
  );
}
