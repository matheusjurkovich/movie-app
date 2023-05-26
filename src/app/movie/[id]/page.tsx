"use client";
import { useParams } from "next/navigation";

export default function Movie() {
  const id = useParams();

  console.log(id.id);

  return (
    <div>
      <h1>Detalhes do Filme {id.id}</h1>
    </div>
  );
}
