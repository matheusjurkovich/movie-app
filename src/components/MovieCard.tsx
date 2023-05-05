/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  imageUrl?: string;
  title: string;
  description: string;
}

export default function MovieCard({ imageUrl, title, description }: Props) {
  return (
    <div className="flex flex-col w-full items-center mt-8 rounded-xl bg-gray-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        alt={title}
        className="object-cover w-full h-64 rounded-t-xl shadow-lg"
      />
      <div className="flex flex-col gap-6 p-6">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-lg text-start ">{description}</p>
      </div>
    </div>
  );
}
