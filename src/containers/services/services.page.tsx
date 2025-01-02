import { Header } from "@/components/header";

import css from './index.module.css';
import { useFonts } from "@/hooks/useFonts";
import { SERVICES } from "@/content/services";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { Footer } from "@/components/footer";
import { useRouter } from "next/router";

interface Props {
    imgAlt: string;
    imgPath: string;
    title: string;
    description: string;
    width?: number;
    id: string;
}

const ServicesCard = ({ description, imgAlt, imgPath, title, width, id }: Props) => {
    const router =  useRouter();
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');
    const { openSans, roboto } = useFonts();

    const imgHeight = matchesMobileScreen ? 90 : matchesSmallScreen ? 140: 120;

    const goToServiceDetails = () => {
        router.push(`/services/${id}`);
    }
    return (
        <div className={css.serviceCard} onClick={goToServiceDetails}>
            <div>
                <h3 className={openSans.className}>{title}</h3>
                <p className={roboto.className}>{description}</p>
            </div>
            <Image alt={imgAlt} src={imgPath} className={css.img} width={width ?? 110} height={imgHeight} />
        </div>
    )
}

export const ServicesPage = () => {
    const { openSans, roboto } = useFonts();

    return (
        <main>
            <Header />
            <section className={css.servicesSection}>
                <h1 className={openSans.className}>What we treat</h1>
                <p className={`${css.description} ${roboto.className}`}>From heartburn and indigestion to inflammatory bowel disease and colon cancer, we offer comprehensive diagnostic and therapeutic services for a wide range of digestive disorders. See our treatments.</p>
                <div className={css.servicesGroup}>
                    {SERVICES.map(item => <ServicesCard key={item.title} {...item} />)}
                </div>
            </section>
            <Footer />
        </main>
    )
}