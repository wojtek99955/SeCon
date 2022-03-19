import { useEffect } from 'react'
import { Section, Container, ServicesWrapper, Service, CameraIcon, ElectricalIcon, SecurityIcon, LockIcon, Title } from './ServicesStyles'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"


function Services() {


    const services = [
        {
            img: <CameraIcon />,
            service: "Monitoring",
            url: "/uslugi/monitoring"
        },
        {
            img: <SecurityIcon />,
            service: "Systemy zabezpieczeń",
            url: "/uslugi/systemy-zabezpieczen",
        },
        {
            img: <LockIcon />,
            service: "Kontrola dostępu",
            url: "/uslugi/kontrola-dostepu-rejestracja-czasu-pracy",

        },
        {
            img: <ElectricalIcon />,
            service: "Pomiary instalacji i urządzeń elektrycznych",
            url: "/uslugi/pomiary-instalacji-i-urzadzen-elektrycznych",
        }
    ]

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <Section id="services">
            <Container>
                <Title data-aos="fade-up">
                    <h2 >Oferta</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero veritatis minus!</h3>
                </Title>
                <ServicesWrapper data-aos="fade-down" >
                    {services.map((service, id) => {
                        return (
                            <Service key={id}>
                                {service.img}
                                <h3>{service.service}</h3>
                                <p>{service.description}</p>
                                <Link to={{ pathname: `${service.url}` }}><button>Więcej</button></Link>
                            </Service>
                        )
                    })}
                </ServicesWrapper>
            </Container>
        </Section>
    )
}

export default Services
