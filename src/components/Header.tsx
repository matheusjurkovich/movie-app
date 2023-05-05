import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface HeaderProps {
  searchInput: string;
  searchMovies: () => void;
}

export default function Header({ searchInput, searchMovies }: HeaderProps) {
  const [search, setSearch] = useState("");

  return (
    <header className="flex w-full justify-between items-center p-4 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg max-md:flex-col gap-4">
      <h1 className="m-0 text-4xl text-black font-bold ">Movie API</h1>
      <div className="flex w-1/4 bg-white p-1 rounded-xl justify-between max-md:w-full">
        <Form.Control
          type="text"
          placeholder="Digite o nome de um filme"
          className="w-full rounded-xl p-1 focus:border-0"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchMovies;
            }
          }}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
          onClick={searchMovies}
        >
          <MagnifyingGlass size={16} weight="bold" />
        </button>
      </div>
    </header>
  );
}
