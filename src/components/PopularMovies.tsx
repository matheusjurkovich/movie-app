"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { MovieCardProps } from "./MovieCard";

export default function PopularMovies() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    const getMovies = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
      );
      setMovies(data.data.results.slice(0, 6));
    };
    getMovies();
  }, []);
  return (
    <section className="flex flex-col">
      {" "}
      <h1 className="mb-4 text-xl font-medium leading-tight">Popular Movies</h1>
      <div className="flex flex-wrap gap-4">
        {movies.map((movie: MovieCardProps) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
