"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { MovieCardProps } from "./MovieCard";

export default function PopularMovies() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`,
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
