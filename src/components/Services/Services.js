import React from 'react'
import { Section, Container, ServicesWrapper, Service, CameraIcon, ElectricalIcon, SecurityIcon, LockIcon } from './ServicesStyles';
import { Link } from 'react-router-dom';


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


    return (
        <Section id="services">
            <Container>
                <h2>Oferta</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero veritatis minus!</h3>
                <ServicesWrapper>
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
