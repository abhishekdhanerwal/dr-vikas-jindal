import { Header } from "@/components/header";

import css from './index.module.css';
import Image from "next/image";
import { Footer } from "@/components/footer";
import { useFonts } from "@/hooks/useFonts";

const EDUCATION = [
    {
        degree: "MBBS",
        name: "VMMC and Safdarjung Hospital",
        location: "New Delhi"
    },
    {
        degree: "MD in Internal Medicine",
        name: "PGIMER, RML Hospital",
        location: "New Delhi"
    },
    {
        degree: "Senior Residency in Hepatology",
        name: "PGIMER",
        location: "Chandigarh"
    },
    {
        degree: "DM in Gastroenterology",
        name: "AIIMS",
        location: "New Delhi"
    },
]

export const AboutPage = () => {
    const { openSans, roboto, exo2 } = useFonts();
    return (
        <main className={css.aboutMain}>
            <Header />
            <section>
                <div className={css.panel}></div>
                <div className={css.verticalPanel}>
                    <Image className={css.docImg} alt="dr vikas jindal" src={"/images/doctor-self-banner.png"} width={300} height={400} />
                    <div className={css.panelInfo}>
                        <h2 className={openSans.className}>Speciality</h2>
                        <span className={`${css.panelContent} ${roboto.className}`}>Gastroenterologist</span>
                        <h2 className={openSans.className}>Educational Background</h2>
                        {EDUCATION.map(item => (
                        <div className={`${roboto.className} ${css.eduContent}`}>
                            <h3>{item.degree}</h3>
                            <div>{item.name}</div>
                            <div>{item.location}</div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className={`${css.aboutContent} ${roboto.className}`}>
                    <h1 className={`${exo2.className} ${css.heading}`}>Dr Vikas Jindal</h1>
                    <p>Dr. Vikas Jindal is a distinguished gastroenterologist in India with over eight years of professional expertise. He earned his MBBS from VMMC and Safdarjung Hospital, New Delhi, and completed his internal medicine training at high-volume government hospitals like Safdarjung and RML Hospital. Following this, he joined the Department of Hepatology at PGIMER Chandigarh as a Senior Resident (Academic). Dr. Jindal pursued his DM in Gastroenterology at AIIMS, New Delhi.</p>
                    <p>Dr. Jindal has exceptional proficiency in diagnostic and therapeutic endoscopy and is skilled in advanced procedures such as Endoscopic Mucosal Resection (EMR), Endoscopic Submucosal Dissection (ESD), endoscopic weight-loss techniques, Endoscopic Ultrasound (EUS), ERCP, and transplant hepatology. With an impressive portfolio of over 30,000 endoscopic procedures, he is particularly passionate about managing liver diseases and portal hypertension.</p>
                    <h3 className={`${exo2.className} ${css.heading}`}>Key Specializations and Expertise</h3>
                    <ul>
                        <li>Liver disease and portal hypertension management</li>
                        <li>Transplant hepatology</li>
                        <li>Comprehensive endoscopic procedures, including diagnostic and therapeutic upper and lower GI endoscopies</li>
                        <li>Minimally invasive endoscopic resections</li>
                        <li>ERCP (Endoscopic Retrograde Cholangiopancreatography)</li>
                        <li>Placement of endoscopic metal stents (intestinal, esophageal, and biliary)</li>
                        <li>EUS-guided techniques: targeted FNAC, biliary drainage, cystogastrostomy</li>
                        <li>Advanced endoscopic surgeries: POEM, ESD, EMR</li>
                        <li>Esophageal stricture dilatation</li>
                        <li>Palliative endoscopic cancer treatments</li>
                        <li>EUS-guided liver biopsy</li>
                        <li>Endoscopic interventions for weight loss</li>
                        <li>Treatment of inflammatory bowel diseases, celiac disease, and food allergies</li>
                        <li>Pediatric gastroenterology</li>
                    </ul>
                    <h2 className={`${exo2.className} ${css.heading}`}>Professional Experience</h2>
                    <p>Dr. Jindal has a rich background in patient care, with over a decade of experience in diverse medical settings. He is adept at accurate diagnosis, formulating effective treatment strategies, and guiding patients towards healthier lifestyles. His collaborative approach and ability to perform under pressure have made him an asset to numerous esteemed institutions, including:</p>
                    <ul>
                        <li>Safdarjung Hospital, New Delhi</li>
                        <li>RML Hospital, New Delhi</li>
                        <li>PGIMER Chandigarh</li>
                        <li>AIIMS, New Delhi</li>
                        <li>Fortis Hospital, Gurugram</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </main>
    )
}