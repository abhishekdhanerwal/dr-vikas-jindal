import Image from 'next/image';
import css from './index.module.css';
import { useFonts } from '@/hooks/useFonts';

export const GraphicalInfo = () => {
    const { playpenSans, roboto, robotoBold } =  useFonts();
    return (
        <section className={css.graphicalInfoContainer}>
            <div className={css.imgContainer}>
                <Image alt="pie chart" src="/images/graph-1.png" objectFit="fill" fill />
            </div>
            <div className={css.content}>
                <h1 className={playpenSans.className}>DO REMEMBER</h1>
                <h3 className={roboto.className}>9 out of 10 cases of liver disease could be prevented</h3>
            </div>
            <div className={css.imgContainerTwo}>
                <Image alt="pie chart" src="/images/graph-2.jpg" objectFit="fill" fill />
            </div>
        </section>
    )
}