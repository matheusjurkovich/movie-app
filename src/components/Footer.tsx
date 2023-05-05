import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16">
      <p className="text-center">&copy; {year} Matheus Jurkovich</p>
    </footer>
  );
}
