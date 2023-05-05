import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const roboto = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
