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
    const pagesInTotal = totalPages;

    let lowerLimit = Math.max(1, activePage - 2);
    let upperLimit = Math.min(pagesInTotal, activePage + 2);

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
          className={`rounded-full bg-blue-500 p-2 px-4 font-bold  text-white hover:bg-blue-700 ${
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
    <div className="mt-4 flex items-center justify-center gap-2">
      <button
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
        className="rounded-full bg-blue-500 p-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {"< Anterior"}
      </button>

      {renderPageButtons()}
      <button
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
        className="rounded-full bg-blue-500 p-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {"Próxima >"}
      </button>
    </div>
  );
}
