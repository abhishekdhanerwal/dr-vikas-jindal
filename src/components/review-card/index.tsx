import { Avatar, Rating } from "@mui/material";

import { useFonts } from "@/hooks/useFonts";

import css from './index.module.css';

export const ReviewCard = () => {
    const { roboto } = useFonts();
    return (
        <div className={css.reviewCard}>
            <div className={`${css.description} ${roboto.className}`}>
                "
                Doctor is kind, confident and explains everthing. Gives appropriate time, makes you fully satisfied on each front. Keeps u at ease. If you have tried many doctors earlier, at least visit him once on my request. Hope God will not disappoint you. Thank you Doctor.
                "
                <Avatar className={css.avatar} />
            </div>
            <div className={css.label}>
                <Rating name="read-only" value={5} readOnly /> 
                <span className={`${roboto.className} ${css.title}`}>Abhinav Singh</span>
            </div>
        </div>
    )
}