import { useState } from 'react';

import { useRouter } from 'next/router';

import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { NAVIGATION } from '@/content/navigation';
import { useFonts } from '@/hooks/useFonts';
import NavigationDrawer from '@/components/navigation-drawer';


import css from './index.module.css';

export const Header = () => {
    const { openSans, roboto } = useFonts();
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');

    const router = useRouter();

    const [openSideMenu, setOpenSideMenu] = useState(false);

    const goToRoute = (route: string) => {
        router.push(route)
    };

    const showDrawer = () => {
        setOpenSideMenu(true);
    };
  
    const onCloseDrawer = () => {
        setOpenSideMenu(false);
    };

    return (
        <header className={css.header}>
            <div className={css.headerContent}>
                <span className={`${openSans.className} ${css.title}`}>Dr. Vikas Jindal</span>
                {matchesMobileScreen ? <MenuIcon onClick={showDrawer} /> :
                    <>
                        <nav>
                            <ul className={`${css.listContainer} ${roboto.className}`}>
                                {NAVIGATION.map(item => <li key={item.route} onClick={() => goToRoute(item.route)}>{item.label}</li>)}
                                <li className={css.navAppointmentBtn}>{matchesSmallScreen ? <EditCalendarIcon /> : 'Book Appointment'}</li>
                            </ul>
                        </nav>
                        <span className={css.iconGroupHead}>
                            <span className={css.icons}><FacebookIcon /></span>
                            <span className={css.icons}><InstagramIcon /></span>
                            <span className={css.icons}><TwitterIcon /></span>
                        </span>
                    </>}

                <NavigationDrawer open={openSideMenu} onClose={onCloseDrawer} />
            </div>
        </header>
    )
}