/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import BackToTopButton from "@/components/BackToTopButton";
import MovieCard from "@/components/MovieCard";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const API_KEY = "f7fdccd2a14340943e97f8d9bb6a6584";
const year = new Date().getFullYear();
interface Movie {
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

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}}`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTotalPages = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${activePage}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTotalPages();
    fetchPopularMovies();
  }, [activePage]);

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 8; i++) {
      buttons.push(
        <Pagination.Item
          key={i}
          active={activePage === i}
          onClick={() => handlePageChange(i)}
          className="p-2 px-4 bg-blue-500 text-white rounded-full font-bold"
        >
          {i}
        </Pagination.Item>
      );
    }
    return buttons;
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Movie API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
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
                  getMovie();
                }
              }}
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
              onClick={getMovie}
            >
              <MagnifyingGlass size={16} weight="bold" />
            </button>
          </div>
        </header>
        <main className="p-6 grid grid-cols-3 gap-4 max-md:flex flex-col">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              description={movie.overview}
            />
          ))}
        </main>
        <Pagination className="flex gap-2 items-center justify-center mt-4">
          <Pagination.First
            onClick={() => handlePageChange(1)}
            className="p-2 bg-blue-500 text-white rounded-full font-bold"
          />
          <Pagination.Prev
            onClick={() => handlePageChange(activePage - 1)}
            disabled={activePage === 1}
            className="p-2 bg-blue-500 text-white rounded-full font-bold"
          />

          {renderPageButtons()}

          <Pagination.Next
            onClick={() => handlePageChange(activePage + 1)}
            disabled={activePage === totalPages}
            className="p-2 bg-blue-500 text-white rounded-full font-bold"
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages)}
            className="p-2 bg-blue-500 text-white rounded-full font-bold"
          />
        </Pagination>
        <BackToTopButton />
        <footer className="mt-auto">
          <p className="text-center">&copy; {year} Matheus Jurkovich</p>
        </footer>
      </div>
    </>
  );
}
