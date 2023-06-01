"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MovieCard, { MovieCardProps } from "../../components/MovieCard";
import axios from "axios";
import Header from "@/components/Header";
import BackToTopButton from "@/components/BackToTopButton";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

export default function Search() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };
  const acessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${search}&page=${activePage}`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer ${acessToken}`,
            },
          }
        );
        setTotalPages(data.data.total_pages);
        setMovies(data.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    router.push(`/search?q=${search}&page=${activePage}`);
    getMovies();
  }, [search, activePage]);
  return (
    <>
      <Header />
      <main className="grid grid-cols-5 flex-col gap-6 p-6 dark:bg-zinc-800 max-md:grid-cols-1 ">
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
