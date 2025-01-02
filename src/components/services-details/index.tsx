import { SERVICES } from "@/content/services"
import { Footer } from "../footer"
import { Header } from "../header"
import { useRouter } from "next/router"

interface Props {
    selectedService?: typeof SERVICES[number]
}

export const ServicesDetails = ({selectedService}: Props) => {
    const router = useRouter();

    const goToServices = () => {
        router.push('/services');
    }


return (<>
        <Header />
        <main style={{marginTop: 64}}>
            <div>
                <span onClick={goToServices}>Services List</span> / {selectedService?.title}
            </div>
            {selectedService?.title}
        </main>
        <Footer />
    </>)
}