import "../styles/globals.css";
import type { AppProps } from "next/app";
import { geomanistRegular } from "./fonts/fontUtils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${geomanistRegular.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
