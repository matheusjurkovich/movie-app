import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 px-6 py-4">
      <h1 className="text-4xl font-bold text-gray-900">
        <a href="/">Movie App</a>
      </h1>

      <div className="flex items-center rounded-md  bg-white px-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Procure seus filmes"
          className="w-full bg-transparent p-2 outline-none disabled:cursor-not-allowed disabled:opacity-50"
          disabled
        />

        <Link href="/">
          <Search color="gray" size={30} />
        </Link>
      </div>
    </header>
  );
}
