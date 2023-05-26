import React from "react";
import { Search } from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 px-6 py-4">
      <h1 className="text-4xl font-bold">
        <a href="/">Movie App</a>
      </h1>

      <div className="flex items-center rounded-md border border-gray-300 bg-white">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Procure seus filmes"
          className="w-full bg-transparent p-2 outline-none"
        />
        <Search size={30} />
      </div>
    </header>
  );
}
