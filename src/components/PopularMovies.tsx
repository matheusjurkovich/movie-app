"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { MovieCardProps } from "./MovieCard";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function PopularMovies() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const acessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${acessToken}`,
            },
          }
        );
        setMovies(data.data.results.slice(0, 6));
      };
      getMovies();
    } catch (error) {
      console.error(error);
    }
  }, [acessToken, apiKey]);
  return (
    <section className="flex w-full flex-col">
      {" "}
      <h1 className="mb-4 text-xl font-medium leading-tight dark:text-gray-50">
        Popular Movies
      </h1>
      <div className="flex w-full items-center gap-4 overflow-x-auto p-4 ">
        {movies.map((movie: MovieCardProps) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <Link
          className="absolute right-0 rounded-full bg-gray-200  p-2 transition-transform hover:-translate-y-2 dark:bg-gray-100"
          title="Veja mais"
          href="/movies/popular?page=1"
        >
          <ArrowRight size={36} className="dark:text-gray-600" />
        </Link>
      </div>
    </section>
  );
}
