import { ServicesDetails } from "@/components/services-details";
import { SERVICES } from "@/content/services";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface Props {
  selectedService?: typeof SERVICES[number];
}

export default function ServiceType({selectedService}: Props) {
    return (
        <>
          <Head>
            <title>Dr Vikas Jindal - Services</title>
          </Head>
          <ServicesDetails selectedService={selectedService} />
        </>
      );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const arr: string[] = SERVICES.map(item => item.id);
    const paths = arr.map((type) => {
        return {
            params: { type },
        }
    });
    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<{ selectedService?: typeof SERVICES[number] }> = async (context) => {
  const currentId = context.params?.type ?? "";
  const selectedService = SERVICES.find(item => item.id === currentId);
  return {
      props: { selectedService }
  }
}