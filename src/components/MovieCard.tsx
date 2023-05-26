"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export interface MovieCardProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export default function MovieCard({ movie }: { movie: MovieCardProps }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="flex w-[12.5rem] flex-col items-center rounded-xl bg-gray-300 shadow-lg transition-transform hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.poster_path ? movie.poster_path : ""
        }`}
        alt={movie?.title ? movie.title : ""}
        width={500}
        height={500}
        className="w-full rounded-t-xl"
        priority
      />
      <div className="flex h-full w-full flex-col justify-between gap-2 p-2">
        <h2 className="text-2xl font-bold">{movie?.title}</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={16} fill="yellow" />
            {movie?.vote_average}
          </div>
          <p>{movie?.release_date}</p>
        </div>
      </div>
    </Link>
  );
}
