import React from "react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/pages";

export default function Main({ movies }: { movies: Movie[] }) {
  return (
    <main className="p-6 grid grid-cols-3 gap-4 max-md:flex flex-col">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          imageUrl={movie.poster_path}
          title={movie.title}
          description={movie.overview}
          date={movie.release_date}
          genres={movie.genre_names}
        />
      ))}
    </main>
  );
}
