import BestMovies from "@/components/BestMovies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewMovies from "@/components/NewMovies";
import PopularMovies from "@/components/PopularMovies";

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-col gap-6 p-6">
        <PopularMovies />
        <hr />
        <NewMovies />
        <hr />
        <BestMovies />
      </main>
      <Footer />
    </div>
  );
}
