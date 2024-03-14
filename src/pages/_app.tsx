import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { PrefectureProvider } from "@/store/prefectureContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrefectureProvider>
      <Component {...pageProps} />;
    </PrefectureProvider>
  );
}
