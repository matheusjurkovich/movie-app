import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16">
      <hr />
      <p className="mt-10 text-center">&copy; {year} Matheus Jurkovich</p>
    </footer>
  );
}
