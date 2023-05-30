"use client";
import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [search, setSearch] = React.useState("");

  const router = useRouter();

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/search?q=${search}`);
  };

  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 px-6 py-4">
      <h1 className="text-4xl font-bold text-gray-900">
        <a href="/">Movie App</a>
      </h1>

      <form
        onSubmit={handlesubmit}
        className="flex items-center rounded-md  bg-white px-2"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Procure seus filmes"
          className="w-full bg-transparent p-2 outline-none disabled:cursor-not-allowed disabled:opacity-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">
          <Search color="gray" size={30} />
        </button>
      </form>
    </header>
  );
}
