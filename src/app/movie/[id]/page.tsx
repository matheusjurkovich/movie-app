"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard, { MovieCardProps } from "../../../components/MovieCard";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dayjs from "dayjs";
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
  const [recomendations, setRecomendations] = useState<MovieCardProps[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
        );
        setMovie(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovie();
  }, [id]);
  useEffect(() => {
    const getRecomendations = async () => {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=pt-BR&page=1`
        );
        setRecomendations(data.data.results.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    getRecomendations();
  }, [id]);

  return (
    <>
      {" "}
      <Header />
      <main className="flex flex-col gap-20 p-6">
        <section className="flex items-center justify-center gap-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            width={500}
            height={750}
            alt={movie?.title ? movie?.title : "Poster"}
            className="h-80 w-72 rounded-2xl"
          />
          <div className="flex h-1/2 flex-col justify-between gap-3">
            <h1 className="text-2xl font-bold">{movie?.title}</h1>
            <p className="leading-relaxed tracking-wide">{movie?.overview}</p>

            <p>
              Data de lançamento:{" "}
              {movie?.release_date
                ? dayjs(movie?.release_date).format("DD/MM/YYYY")
                : movie?.release_date}
            </p>
            <p>
              Tempo de duração:{" "}
              {movie?.runtime
                ? (() => {
                    const hours = Math.floor(movie?.runtime / 60);
                    const minutes = movie?.runtime % 60;
                    return `${hours}h${minutes}m`;
                  })()
                : movie?.runtime}
            </p>
            <p>
              Generos:{" "}
              <span className="flex gap-4">
                {movie?.genres.map((genre) => (
                  <span className="rounded bg-zinc-400 p-2" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-medium">Recomendações:</h2>
          <div className="flex flex-wrap gap-4">
            {recomendations.map((recomendation) => (
              <MovieCard key={recomendation.id} movie={recomendation} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
