"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieCardProps } from "../../../components/MovieCard";
import axios from "axios";
import Image from "next/image";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

interface MovieProps extends MovieCardProps {
  overview: string;
  genres: {
    id: number;
    name: string;
  }[];
  runtime: number;
  release_date: string;
}

export default function Movie() {
  const [movie, setMovie] = useState<MovieProps>();

  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
      );
      setMovie(data.data);
      console.log(data.data);
    };
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detalhes do Filme {id}</h1>
      {movie?.title}
      {movie?.overview}
      {movie?.genres.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
      {movie?.runtime}
      {movie?.release_date}

      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        alt={movie?.title ? movie.title : ""}
        width={300}
        height={450}
      />
    </div>
  );
}
