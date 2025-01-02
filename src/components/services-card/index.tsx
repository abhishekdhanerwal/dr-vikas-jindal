import Image from 'next/image';

import { useMediaQuery } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';

interface Props {
    imgAlt: string;
    imgPath: string;
    title: string;
    description: string;
}

export const ServicesCard = ({ description, imgAlt, imgPath, title }: Props) => {
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');
    const { openSans, roboto, montserrat } = useFonts();

    const imgHeight = matchesMobileScreen ? 90 : matchesSmallScreen ? 140: 120;

    return (
        <div className={css.card}>
            <Image alt={imgAlt} src={imgPath} className={css.img} width={110} height={imgHeight} />
            <div className={css.content}>
                <h3 className={openSans.className}>{title}</h3>
                <p className={roboto.className}>{description}</p>
                <span role="button" className={montserrat.className}>read more <EastIcon /></span>
            </div>
        </div>
    )
}