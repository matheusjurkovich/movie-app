/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  imageUrl?: string;
  title: string;
  description: string;
  date: string;
  genres: string[] | undefined;
}

export default function MovieCard({
  imageUrl,
  title,
  description,
  date,
  genres,
}: Props) {
  const formattedDate = date ? new Date(date).toLocaleDateString("pt-BR") : "";

  const renderGenres = () => {
    if (!genres) {
      return null;
    }

    return genres.map((genre) => (
      <span
        key={genre}
        className="bg-gray-400 text-gray-800 rounded-full px-2 py-1 text-sm"
      >
        {genre}
      </span>
    ));
  };

  return (
    <div className="flex flex-col h-[40rem] w-full items-center mt-8 rounded-xl shadow-lg bg-gray-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        alt={title}
        className="object-cover object-left-top w-full h-64 rounded-t-xl shadow-lg"
      />
      <div className="flex flex-col max-h-[25rem] gap-6 p-6 ">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-lg text-start">
          Data de lançamento: {formattedDate}
        </p>
        <div className="flex flex-row flex-wrap gap-2">{renderGenres()}</div>

        <div className="overflow-auto mb-6">
          <p className="text-lg text-start ">{description}</p>
        </div>
      </div>
    </div>
  );
}
