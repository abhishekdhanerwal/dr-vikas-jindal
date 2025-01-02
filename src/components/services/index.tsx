import { ServicesCard } from "@/components/services-card"
import { SectionHeading } from "@/components/shared/section-heading"
import { SERVICES } from "@/content/services"

import css from './index.module.css';

export const Services = () => {
    return (
        <>
            <SectionHeading title="Services" />
            <div className={css.servicesContainer}>
                {SERVICES.slice(4).map(item => <ServicesCard key={item.title} {...item} />)}
            </div>
        </>
    )
}