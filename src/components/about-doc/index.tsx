import Image from "next/image";

import { Avatar, useMediaQuery } from "@mui/material";

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

export const AboutDoc = () => {
    const { openSans, roboto } = useFonts();
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');


    return (
        <div className={css.aboutDocContainer}>
            <div className={css.content}>
                <h1 className={openSans.className}>Meet Dr Vikas Jindal</h1>
                <p className={`${roboto.className} ${css.docDescription}`}>Dr. Vikas Jindal is a highly experienced Gastroenterologist with over 10 years of expertise. An alumnus of prestigious institutions like AIIMS New Delhi and PGI Chandigarh, he specializes in diagnostic and therapeutic endoscopy, EUS, ERCP, and transplant hepatology. With more than 30,000 endoscopic procedures performed, he has a keen interest in liver diseases and portal hypertension. Dr. Jindal’s skills extend to advanced endoscopic techniques such as EMR, ESD, and endoscopic weight loss procedures. He has served in renowned hospitals, including Safdarjung, RML, and Fortis, delivering exceptional care through precise diagnosis and innovative treatments tailored to patient needs.</p>
                <div className={css.avatarGroup}>
                    <Avatar src="/images/liver.gif" />
                    <Avatar src="/images/excercise.gif" />
                    <Avatar src="/images/baby-food.gif" />
                </div>
            </div>
            {matchesMobileScreen ?
                <div className={css.imgContainer}>
                    <Image alt="doctor vikas jindal" src={"/images/doctor-self.jpg"} objectFit="fill" fill />
                </div>
                :
                <div>
                    <Image alt="doctor vikas jindal" src={"/images/doctor-self.jpg"} width={200} height={350} />
                </div>}
        </div>
    )
}