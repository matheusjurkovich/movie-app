"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { MovieCardProps } from "./MovieCard";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
export default function BestMovies() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM1NGY4MDFjYzMwZjliOTRjNTM0Mjk1MDBjNTZhYSIsInN1YiI6IjY0NGFiM2E4MGU0ZmM4MDJmYjMzMDJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO0EgMVnQrokBdZiArutvcQ_aSUCBOSwMxhaAEMfzAM`,
            },
          }
        );
        setMovies(data.data.results.slice(0, 6));
      };
      getMovies();
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <section className="flex w-full flex-col">
      {" "}
      <h1 className="mb-4 text-xl font-medium leading-tight dark:text-gray-50">
        Best Movies
      </h1>
      <div className="flex w-full items-center gap-4 overflow-x-auto p-4 ">
        {movies.map((movie: MovieCardProps) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <Link title="Veja mais" href="/movies/top-rated">
          <ArrowRightCircle
            size={48}
            className="transition-transform hover:-translate-y-2 hover:scale-105 dark:text-gray-50"
          />
        </Link>
      </div>
    </section>
  );
}
