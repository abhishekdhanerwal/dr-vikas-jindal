import Head from "next/head";

import { ServicesPage } from "@/containers/services/services.page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr Vikas Jindal - Services</title>
      </Head>
      <ServicesPage />
    </>
  );
}
