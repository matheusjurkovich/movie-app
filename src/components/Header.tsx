import React from "react";
import { Search } from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-cyan-200 to-blue-500 px-6 py-2">
      <h1 className="text-3xl font-bold">Movie App</h1>

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
