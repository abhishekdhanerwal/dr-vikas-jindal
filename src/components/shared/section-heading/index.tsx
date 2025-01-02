import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

interface Props {
    title: string;
}

export const SectionHeading = ({title}: Props) => {
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');

    const { exo2 } = useFonts();
    return (
        <section className={css.headingContainer}>
            <h1 className={`${exo2.className} ${css.heading}`}>{title}</h1>
            <Image alt="heading-underline" src={"/images/heart-beat.png"} height={matchesMobileScreen ? 25 : 40} width={matchesMobileScreen ? 75 : 100} />
        </section>
    )
}