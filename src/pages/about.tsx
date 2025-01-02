import Head from "next/head";

import { AboutPage } from "@/containers/about/about.page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr Vikas Jindal - About</title>
      </Head>
      <AboutPage />
    </>
  );
}
