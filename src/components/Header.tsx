import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";

interface HeaderProps {
  searchInput: string;
  searchMovies: () => void;
  setSearch: (search: string) => void;
  disabled?: boolean;
}

export default function Header({
  searchInput,
  searchMovies,
  setSearch,
  disabled,
}: HeaderProps) {
  return (
    <header className="flex w-full justify-between items-center p-4 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg max-md:flex-col gap-4">
      <div className="flex gap-6 items-baseline">
        <Link href="/">
          <h1 className="m-0 text-4xl text-black font-bold ">Movie API</h1>
        </Link>
        <Link href="/popular">
          <p className="text-black font-semibold hover:underline">
            Popular Movies
          </p>
        </Link>
      </div>
      <div className="flex w-1/4 bg-white p-1 rounded-xl justify-between max-md:w-full">
        <input
          type="text"
          placeholder="Digite o nome de um filme"
          className="w-full rounded-xl p-1 focus:border-0 disabled:bg-gray-200
          disabled:cursor-not-allowed"
          disabled={disabled}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies();
            }
          }}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full disabled:bg-gray-200
          disabled:cursor-not-allowed"
          onClick={searchMovies}
          disabled={disabled}
        >
          <MagnifyingGlass size={16} weight="bold" />
        </button>
      </div>
    </header>
  );
}
