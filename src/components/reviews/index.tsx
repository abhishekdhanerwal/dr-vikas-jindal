import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import { useMediaQuery } from "@mui/material";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { SectionHeading } from "@/components/shared/section-heading"
import { ReviewCard } from "@/components/review-card";

import css from './index.module.css';
import { CSSProperties } from "react";

const indicatorStyles: CSSProperties = {
    background: '#fff',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: 25,
    border: '1px solid #3A6D8C'
};


export const Reviews = () => {
    const matchesSmallScreen = useMediaQuery('(max-width: 480px)');

    return (
        <div className={css.reviews}>
            <SectionHeading title="What Our Patients Say" />
                {matchesSmallScreen ?
                    <div className={css.reviewsMobileContainer}>
                    <Carousel
                        infiniteLoop
                        autoPlay
                        showThumbs={true}
                        emulateTouch
                        interval={10000}
                        showStatus={false}
                        showIndicators={true}
                        // className={css.carousel}
                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                            if (isSelected) {
                                return (
                                    <li
                                        style={{ ...indicatorStyles, background: 'rgb(203, 227, 239)' }}
                                        aria-label={`Selected: ${label} ${index + 1}`}
                                        title={`Selected: ${label} ${index + 1}`}
                                    />
                                );
                            }
                            return (
                                <li
                                    style={indicatorStyles}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    title={`${label} ${index + 1}`}
                                    aria-label={`${label} ${index + 1}`}
                                />
                            );
                        }}
                    >
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </Carousel>
                    </div>
                    :
                    <div className={css.reviewsContainer}>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                }
        </div>
    )
}