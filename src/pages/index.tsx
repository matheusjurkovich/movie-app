/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Head from "next/head";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Form } from "react-bootstrap";

const API_KEY = process.env.API_KEY;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchMovies = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
    fetchMovies(url);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Movie API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header
          searchInput={search}
          searchMovies={getMovie}
          setSearch={setSearch}
          disabled={movies.length === 0}
        />
        {movies.length > 0 ? (
          <Main movies={movies} />
        ) : (
          <div className="mt-20 flex flex-col gap-8 items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800">
              Search movies here
            </h1>
            <div className="flex w-1/4 bg-gray-200 p-2 rounded-xl justify-between max-md:w-full">
              <Form.Control
                type="text"
                placeholder="Digite o nome de um filme"
                className="w-full rounded-xl p-2 focus:border-0 bg-gray-200"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getMovie();
                  }
                }}
              />

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full"
                onClick={getMovie}
              >
                <MagnifyingGlass size={16} weight="bold" />
              </button>
            </div>
          </div>
        )}

        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
}
