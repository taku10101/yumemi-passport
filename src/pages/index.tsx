import Head from "next/head";

import { PrefectureList } from "@/components/prefectureList";
export default function Home() {
  return (
    <>
      <Head>
        <title>yumemi-passport</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PrefectureList />
      </main>
    </>
  );
}
