/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Movie } from ".";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Pagination from "@/components/Pagination";
import Head from "next/head";
import { get } from "http";

const API_KEY = process.env.API_KEY;

export default function Popular() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const fetchMovies = async (url: string): Promise<any> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
    fetchMovies(url);
  };
  const fetchTotalPages = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
    const data = await fetchMovies(url);
    if (data) {
      setTotalPages(data.total_pages);
    }
  };

  const fetchPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${activePage}`;
    fetchMovies(url);
  };

  useEffect(() => {
    fetchTotalPages();
    fetchPopularMovies();
  }, [activePage]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Movie API - Popular</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header
          searchInput={search}
          searchMovies={getMovie}
          setSearch={setSearch}
        />
        <Main movies={movies} />
        {search === "" && (
          <Pagination
            activePage={activePage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        )}
        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
}
