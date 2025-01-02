import { useEffect, useState } from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

import { useFonts } from '@/hooks/useFonts';

import css from './index.module.css';
import { NAVIGATION } from '@/content/navigation';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mui/material';
import { Services } from '@/components/services';
import { Reviews } from '@/components/reviews';
import { AboutDoc } from '@/components/about-doc';
import { Footer } from '@/components/footer';
import { GraphicalInfo } from '@/components/graphical-info';
import { Header } from '@/components/header';
import Image from 'next/image';

export const HomePage = () => {
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');

    const router = useRouter();
    const { openSans, roboto, exo2, playpenSans } = useFonts();
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const stickyDiv = document.getElementById('sticky-div');
            const stickyDivRect = stickyDiv?.getBoundingClientRect();
            // Check if the sticky div is at the top
            if (stickyDivRect && stickyDivRect.top <= 0) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToRoute = (route: string) => {
        router.push(route)
    }

    const NavBar = () => (<nav className={css.navContainer}>
        <ul className={`${css.listContainer} ${roboto.className}`}>
            {NAVIGATION.map(item => <li key={item.route} onClick={() => goToRoute(item.route)}>{matchesMobileScreen ? item.smLabel : item.label}</li>)}
            <li className={css.navAppointmentBtn}>{matchesMobileScreen ? <EditCalendarIcon /> : 'Book Appointment'}</li>
        </ul>
    </nav>)

    return (
        <>
            <section className={css.headingSection}>
                <div className={css.head}>
                    <span className={`${openSans.className} ${css.title}`}>Dr. Vikas Jindal</span>
                    {matchesSmallScreen ? null : <NavBar />}
                    <span className={css.iconGroup}>
                        <span><FacebookIcon /></span>
                        <span><InstagramIcon /></span>
                        <span><TwitterIcon /></span>
                    </span>
                </div>
                {matchesSmallScreen ? <div className={css.smNavContainer}><NavBar /></div> : null}
                <div className={css.content}>
                    <div className={css.contentText}>
                        <h1 className={`${exo2.className} ${css.headingText}`}>Comprehensive Gastroenterology</h1>
                        <h1 className={`${exo2.className} ${css.headingText} ${css.headingSpacing}`}>Solutions</h1>
                        <h1 className={`${exo2.className} ${css.headingText} ${css.headingSpacing}`}>for a Healthier Tomorrow.</h1>
                        <p className={`${playpenSans.className} ${css.contentDescription}`}>"Providing personalized, advanced care to ensure your digestive health and a brighter, healthier future."</p>
                    </div>
                    {matchesMobileScreen ?
                        <div className={css.imageContainer}>
                            <div className={css.bgImage}>
                                <Image alt='banner image' src={"/images/world.png"} objectFit="fill" fill />
                            </div>
                            <Image className={css.docImage} alt="doctor vikas jindal" src={"/images/doctor-self-banner.png"} width={150} height={265} />
                        </div>
                        :
                        <div className={css.imageContainer}>
                            <Image alt='banner image' src={"/images/world.png"} width={400} height={350} />
                            <Image className={css.docImage} alt="doctor vikas jindal" src={"/images/doctor-self-banner.png"} width={200} height={370} />
                        </div>}
                </div>
            </section>
            <section className={css.mainSection}>
                {isHeaderVisible && <Header />}
                <main id="sticky-div" className={css.mainContent}>
                    <Services />
                    <AboutDoc />
                    <Reviews />
                    <GraphicalInfo />
                    <Footer />
                </main>
            </section>
        </>
    )
}