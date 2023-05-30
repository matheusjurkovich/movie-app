export default function Footer() {
  return (
    <footer className="pt-10 dark:bg-zinc-800 ">
      <hr />
      <p className="py-6 text-center dark:text-gray-50">
        &copy; {new Date().getFullYear()} Feito por Matheus Jurkovich.
      </p>
    </footer>
  );
}
