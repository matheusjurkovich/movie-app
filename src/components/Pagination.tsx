import React from "react";

interface Props {
  totalPages: number;
  activePage: number;
  handlePageChange: (pageNumber: number) => void;
}

export default function Pagination({
  totalPages,
  activePage,
  handlePageChange,
}: Props) {
  const renderPageButtons = () => {
    const buttons = [];
    const pagesInTotal = totalPages; // Total de páginas (substitua pelo valor correto)

    // Cálculo dos limites inferior e superior
    let lowerLimit = Math.max(1, activePage - 2);
    let upperLimit = Math.min(pagesInTotal, activePage + 2);

    // Ajuste dos limites para garantir no máximo 5 botões
    if (upperLimit - lowerLimit < 4) {
      if (activePage < pagesInTotal / 2) {
        upperLimit = Math.min(pagesInTotal, lowerLimit + 4);
      } else {
        lowerLimit = Math.max(1, upperLimit - 4);
      }
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`p-2 px-4 bg-blue-500 text-white rounded-full  font-bold hover:bg-blue-700 ${
            activePage === i ? "bg-blue-700" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
        className="p-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {"< Anterior"}
      </button>

      {renderPageButtons()}
      <button
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
        className="p-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {"Próxima >"}
      </button>
    </div>
  );
}
