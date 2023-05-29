"use client";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MovieCard, { MovieCardProps } from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PopularMovies() {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  useEffect(() => {
    try {
      const getMovies = async () => {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${activePage}`,
          {
            headers: {
              accept: "application/json",
              authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM1NGY4MDFjYzMwZjliOTRjNTM0Mjk1MDBjNTZhYSIsInN1YiI6IjY0NGFiM2E4MGU0ZmM4MDJmYjMzMDJiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO0EgMVnQrokBdZiArutvcQ_aSUCBOSwMxhaAEMfzAM`,
            },
          }
        );
        setTotalPages(data.data.total_pages);
        setMovies(data.data.results);
      };
      getMovies();
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <>
      <Header />
      <main className="grid grid-cols-5 flex-col gap-6 p-6 dark:bg-zinc-800 max-md:grid-cols-2 ">
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
