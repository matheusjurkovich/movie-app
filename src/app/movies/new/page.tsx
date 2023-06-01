"use client";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MovieCard, { MovieCardProps } from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function NewMovies() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [activePage, setActivePage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };
  const acessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=pt-BR&page=${activePage}`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${acessToken}`,
            },
          }
        );
        setTotalPages(data.data.total_pages);
        setMovies(data.data.results);
      };
      router.push(`/movies/new?page=${activePage}`);
      getMovies();
    } catch (error) {
      console.error(error);
    }
  }, [activePage]);
  return (
    <>
      <Header />
      <main className="grid grid-cols-5 gap-6 p-6 dark:bg-zinc-800 max-md:grid-cols-1 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
      <BackToTopButton />
      <Pagination
        activePage={activePage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
      <Footer />
    </>
  );
}
